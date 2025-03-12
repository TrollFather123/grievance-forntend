import { axiosGet } from "src/apiconfig/generalSetup";
import { APIEndpoints } from "src/apiconfig/apiEndPoints";
import { create } from "zustand";
import { TOAST_TYPE } from "src/consts/common";
import { APIMessages } from "src/apiconfig/apiMessages";

const useCommonStore = create((set) => ({
  showResponseModal: false,
  responseModalType: "",
  responseModalHeader: "",
  responseModalHelperText: "",
  navigatePath: "",
  showGrievanceRegistrationModal: false,

  // State Updaters
  setShowResponseModal: (
    responseModalType,
    responseModalHeader,
    responseModalHelperText,
    navigatePath
  ) =>
    set({
      showResponseModal: true,
      responseModalType,
      responseModalHeader,
      responseModalHelperText,
      navigatePath,
    }),

  closeResponseModal: () => {
    set({
      showResponseModal: false,
      responseModalType: "",
      responseModalHeader: "",
      responseModalHelperText: "",
      navigatePath: "",
    });
  },

  toggleGrievanceRegistrationModal: () => {
    set((state) => ({
      showGrievanceRegistrationModal: !state.showGrievanceRegistrationModal,
    }));
  },
}));

export default useCommonStore;
