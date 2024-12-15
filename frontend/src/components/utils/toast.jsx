import React from "react";
import { Snackbar, Alert } from "@mui/material";

export default function ErrorToast({ msg , open,setOpen }) {


    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // Correct placement
        >
            <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
               {msg}
            </Alert>
        </Snackbar>
    );
}
