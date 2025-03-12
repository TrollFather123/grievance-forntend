import { Modal, Box, Button, Typography, Backdrop } from "@mui/material";
import { motion } from "framer-motion";
import { MdWarning } from "react-icons/md";
import useCommonStore from "src/store/useCommonStore";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { TOAST_TYPE } from "src/consts/common";

const RegistrationSuccess = () => {

    const {
        showResponseModal, responseModalType, responseModalHeader, showGrievanceRegistrationModal,
        responseModalHelperText, closeResponseModal, toggleGrievanceRegistrationModal, 
    } = useCommonStore();

    // Modal Helper Methods
    const handleClose = () => toggleGrievanceRegistrationModal();
    const handleModalClose = (event, reason) => {
        if (reason !== "backdropClick") {
            handleClose();
        }
    };

    return (
        <>
            <Modal
                open={showGrievanceRegistrationModal}
                onClose={handleClose}
                closeAfterTransition
                disableEnforceFocus
                disableEscapeKeyDown={false}
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.5)", transition: "opacity 0.5s ease" } }
                }}
            >
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        textAlign: "center",
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>GRIEVANCE REGISTRATION</div>
                    </div>
                </Box>
            </Modal>
        </>
    );
};

export default RegistrationSuccess;
