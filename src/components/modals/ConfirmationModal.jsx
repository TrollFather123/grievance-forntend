import { Modal, Box, Button, Typography, Backdrop } from "@mui/material";
import { motion } from "framer-motion";
import { MdWarning } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { TiInfo } from "react-icons/ti";
import { iconType } from "src/consts/common";

const ConfirmationModal = ({open, setOpen, performAction, loading, icon, heading, subheading }) => {

    // Modal Helper Methods
    const handleClose = () => setOpen(false);
    const handleModalClose = (event, reason) => {
        if (reason !== "backdropClick") {
            handleClose();
        }
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleModalClose}
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
                    {
                        (icon === iconType.Warning)
                        ?
                        <MdWarning size={50} color="#f44336" style={{ marginBottom: "16px" }} /> 
                        :
                        <TiInfo size={50} color="#0288d1" style={{ marginBottom: "16px" }} />
                    }
                    <Typography variant="h6" component="h2" gutterBottom>
                        {heading? heading : 'Heading'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {subheading ? subheading : 'Subheading'}
                    </Typography>
                    <Button
                        disabled={loading}
                        variant="contained"
                        color="error"
                        onClick={handleClose}
                        sx={{ mt: 2, mr: 1 }}
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={loading}
                        variant="contained"
                        color="primary"
                        onClick={() => { performAction() }}
                        sx={{ mt: 2 }}
                    >
                        Proceed
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default ConfirmationModal;
