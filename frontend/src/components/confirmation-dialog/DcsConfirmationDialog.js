import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
const DcsConfirmationDialog = ( {
    open,
    onClose,
    onConfirm,
    title = "Confirm Action",
    content = "Are you sure you want to proceed with this action?",
    type = "warning"
} ) =>
{
    const renderIcon = () =>
    {
        if ( type === 'info' )
        {
            return <InfoIcon color='primary' />;
        } else if ( type === 'error' )
        {
            return <ErrorIcon color='red' />;
        }
        return <WarningIcon color='warning' />;
    };
    return (
        <Dialog open={ open } onClose={ onClose }>
            <DialogTitle>
                { title }
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <IconButton edge="start" color="inherit" >
                        { renderIcon() }
                    </IconButton>
                    { content }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={ onClose }  >
                    Cancel
                </Button>
                <Button onClick={ onConfirm } >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default DcsConfirmationDialog;