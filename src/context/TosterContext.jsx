import { createContext, useContext, useState, useCallback } from "react";
import { Snackbar, Alert } from "@mui/material";
const ToasterContext = createContext();

export const useToaster = () => {
    return useContext(ToasterContext);
};

export const ToasterProvider = ({ children }) => {
    const [toast, setToast] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    // Show Toast
    const showToast = useCallback((message, severity = "success") => {
        setToast({ open: true, message, severity });
    }, []);

    // Close Toast
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setToast((prev) => ({ ...prev, open: false }));
    };

    return (
        <ToasterContext.Provider value={{ showToast }}>
            {children}
            <Snackbar
                open={toast.open}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                sx={{ maxWidth: "45vw", overflow: "hidden" }}
            >
                <Alert
                    onClose={handleClose}
                    severity={toast.severity}
                    variant="filled"
                    sx={{
                        width: "100%",
                        maxWidth: "45vw",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        bgcolor:
                            toast.severity === "success"
                                ? "#5fc363"
                                : toast.severity === "info"
                                    ? "#2196f3"
                                    : toast.severity === "error"
                                        ? "#f44336"
                                        : toast.severity === "warning"
                                            ? "#ff9800"
                                            : undefined,
                    }}
                > 
                    {toast.message}
                </Alert>
            </Snackbar>
        </ToasterContext.Provider>
    );
};
