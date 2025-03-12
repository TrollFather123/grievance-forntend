import { axiosGet } from 'src/apiconfig/generalSetup';
import { APIEndpoints } from 'src/apiconfig/apiEndPoints';
import { create } from 'zustand';
import { TOAST_TYPE } from 'src/consts/common';
import { APIMessages } from 'src/apiconfig/apiMessages';

const useDependencyStore = create((set) => ({
    loading: false,
    grievanceTypes: [],
    grievanceSubTypes: [],
    grievanceReceivedFromList: [],

    // State Updaters
    emptyGrievanceSubTypes: () => set({grievanceSubTypes: []}),

    // Get Grievance Types
    fetchGrievanceType: async (showToast) => {
        try {
            set(()=>({loading: true}))
            const { data } = await axiosGet(APIEndpoints.grievanceTypes, true);
            set(() => ({
                grievanceTypes: data
            }));
        }
        catch (err) {
            if(!err?.response){
                return showToast(APIMessages.noInternet, TOAST_TYPE.ERROR)
            }
            showToast(err?.message, TOAST_TYPE.ERROR)
            console.log("Error: ", err)
        }
        finally {
            set(()=>({loading: false}))
        }
    },

    // Get Grievance Sub Types
    fetchGrievanceSubType: async(id, showToast) => {
        try {
            set(()=>({loading: true}))
            const { data } = await axiosGet(`${APIEndpoints.grievanceSubTypes}?categoryId=${id}`, true);
            set(() => ({
                grievanceSubTypes: data
            }));
        }
        catch (err) {
            if(!err?.response){
                return showToast(APIMessages.noInternet, TOAST_TYPE.ERROR)
            }
            showToast(err?.message, TOAST_TYPE.ERROR)
            console.log("Error: ", err)
        }
        finally {
            set(()=>({loading: false}))
        }
    },

    // Get Grievance Sub Types
    fetchGrievanceReceiveFromList: async(showToast) => {
        try {
            set(()=>({loading: true}))
            const { data } = await axiosGet(`${APIEndpoints.grievanceReceivedFromList}`, true);
            set(() => ({
                grievanceReceivedFromList: data
            }));
        }
        catch (err) {
            if(!err?.response){
                return showToast(APIMessages.noInternet, TOAST_TYPE.ERROR)
            }
            showToast(err?.message, TOAST_TYPE.ERROR)
            console.log("Error: ", err)
        }
        finally {
            set(()=>({loading: false}))
        }
    }

}))

export default useDependencyStore;
