import { axiosDelete, axiosFilePost, axiosGet, axiosPost } from 'src/apiconfig/generalSetup';
import { APIEndpoints } from 'src/apiconfig/apiEndPoints';
import { create } from 'zustand';
import { TOAST_TYPE } from 'src/consts/common';
import { APIMessages } from 'src/apiconfig/apiMessages';
import useCommonStore from './useCommonStore';

const useGrievancetore = create((set) => ({
    loading: false,
    grievanceList: {
        rows: [],
        total: 0,
        loading: false
    },

    // State Updaters
    setLoading: (loading) => set({ loading }),

    // Get Grievances (Paginated)
    fetchGrievances: async (pageInfo, queryParams, showToast) => {
        try {
            set((state) => ({ grievanceList: { ...state.grievanceList, loading: true } }));
            const { data } = await axiosGet(APIEndpoints.grievances, true, {}, false, pageInfo, queryParams);
            set(() => ({
                grievanceList: {
                    rows: data?.rows,
                    total: data?.pagination?.total,
                    loading: false
                }
            }));
        }
        catch (err) {
            console.log(err)
            if(!err?.response){
                return showToast(APIMessages.noInternet, TOAST_TYPE.ERROR)
            }
            showToast(err?.message, TOAST_TYPE.ERROR)
        }
        finally {
            set((state) => ({ grievanceList: { ...state.grievanceList, loading: false } }));
        }
    },

    // Get Grievances (Paginated)
    createGrievance: async (payload, showToast) => {
        const {setShowResponseModal } = useCommonStore.getState();
        try {
            set(()=>({loading: true}))
            const { data } = await axiosFilePost(APIEndpoints.grievanceCreate, true, payload);
            setShowResponseModal(TOAST_TYPE.SUCCESS, 'Grievance Registration Successful!', `Your Grievance number is ${data?.grievance_no}. Please Save your Grievance number for your future reference.`, '/grievance')
        }
        catch (err) {
            console.log(err)
            if(!err?.response){
                return showToast(APIMessages.noInternet, TOAST_TYPE.ERROR)
            }
            showToast(err?.message, TOAST_TYPE.ERROR)
        }
        finally {
            set(()=>({loading: false}))
        }
    },

    // Delete Specific Grievance
    deleteSpecificGrievance: async (grievanceId, showToast) => {
        try {
            set(() => ({loading: true}))
            await axiosDelete(`${APIEndpoints.grievanceDelete}/${grievanceId}`, true  );
            showToast(APIMessages.grievanceDeleteSuccess, TOAST_TYPE.SUCCESS)
            return true;
        }
        catch (err) {
            if(!err?.response){
                return showToast(APIMessages.noInternet, TOAST_TYPE.ERROR)
            }
            showToast(err?.message, TOAST_TYPE.ERROR)
        }
        finally {
            set(() => ({loading: false}))
        }
    },
}))

export default useGrievancetore;
