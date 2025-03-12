import { axiosGet } from 'src/apiconfig/generalSetup';
import { APIEndpoints } from 'src/apiconfig/apiEndPoints';
import { create } from 'zustand';
import { TOAST_TYPE } from 'src/consts/common';
import { APIMessages } from 'src/apiconfig/apiMessages';

const useHistoryStore = create((set) => ({
    loading: false,
    historyList: {
        rows: [],
        total: 0,
        loading: false
    },

    // State Updaters
    setLoading: (loading) => set({ loading }),

    // Get Hisotries (Paginated)
    fetchHistory: async (pageInfo, queryParams, showToast) => {
        try {
            set((state) => ({ historyList: { ...state.historyList, loading: true } }));
            const { data } = await axiosGet(APIEndpoints.history, true, {}, false, pageInfo, queryParams);
            set(() => ({
                historyList: {
                    rows: data?.rows,
                    total: data?.pagination?.total,
                    loading: false
                }
            }));
        }
        catch (err) {
            if(!err?.response){
                return showToast(APIMessages.noInternet, TOAST_TYPE.ERROR)
            }
            showToast(err?.message, TOAST_TYPE.ERROR)
        }
        finally {
            set((state) => ({ historyList: { ...state.historyList, loading: false } }));
        }
    },

}))

export default useHistoryStore;
