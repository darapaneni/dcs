import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';

/**
 * DcsConfirmationDialog is a reusable confirmation dialog component
 * that displays a message and provides options to confirm or cancel
 * an action. The dialog can display different icons based on the
 * type of confirmation required (warning, info, error).
 *
 * @component
 *
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.open - Determines whether the dialog is open.
 * @param {function} props.onClose - Function to call when the dialog is closed.
 * @param {function} props.onConfirm - Function to call when the confirm button is clicked.
 * @param {string} [props.title="Confirm Action"] - The title of the dialog.
 * @param {string} [props.content="Are you sure you want to proceed with this action?"] - The content/message of the dialog.
 * @param {string} [props.type="warning"] - The type of confirmation, determines the icon displayed. Accepts "warning", "info", or "error".
 *
 * @returns {JSX.Element} The rendered confirmation dialog.
 *
 * @example
 * const handleConfirm = () => {
 *     console.log("Confirmed");
 * };
 *
 * const handleClose = () => {
 *     console.log("Dialog closed");
 * };
 *
 * <DcsConfirmationDialog
 *     open={true}
 *     onClose={handleClose}
 *     onConfirm={handleConfirm}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     type="error"
 * />
 */
const DcsConfirmationDialog = ( {
    open,
    onClose,
    onConfirm,
    title = "Confirm Action",
    content = "Are you sure you want to proceed with this action?",
    type = "warning"
} ) =>
{

/**
 * Renders the appropriate icon based on the type of confirmation.
 *
 * @returns {JSX.Element} The icon component corresponding to the dialog type.
 */
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