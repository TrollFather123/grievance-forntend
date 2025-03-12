import { axiosGet } from 'src/apiconfig/generalSetup';
import { APIEndpoints } from 'src/apiconfig/apiEndPoints';
import { create } from 'zustand';
import { TOAST_TYPE } from 'src/consts/common';
import { APIMessages } from 'src/apiconfig/apiMessages';

const useEmployeeStore = create((set) => ({
    loading: false,
    employeeList: {
        rows: [],
        total: 0,
        loading: false
    },

    // State Updaters
    setLoading: (loading) => set({ loading }),

    // Get All Employees
    fetchEmployees: async (pageInfo, queryParams, showToast) => {
        try {
            set((state) => ({ employeeList: { ...state.employeeList, loading: true } }));
            const { data } = await axiosGet(APIEndpoints.getEmployees, true, {}, false, pageInfo, queryParams);
            set(() => ({
                employeeList: {
                    rows: data?.list,
                    total: data?.pagination?.total,
                    loading: false
                }
            }));
        }
        catch (err) {
            if(!err?.response){
                return showToast(APIMessages.noInternet, TOAST_TYPE.ERROR)
            }
            console.log("Error: ", err)
        }
        finally {
            set((state) => ({ employeeList: { ...state.employeeList, loading: false } }));
        }
    },



}))

export default useEmployeeStore;
