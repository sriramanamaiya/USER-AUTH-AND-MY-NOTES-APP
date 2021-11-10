import React from 'react'
import { useSelector } from 'react-redux';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CircularProgress } from '@mui/material';

const ViewNote = (props) => {
    const { show, handleShowClose } = props

    const singleNote = useSelector((state) => {
        return state.notes
    })

    const { isLoading, note } = singleNote

    return (
        <>
            <Dialog
                fullWidth={true}
                open={show}
                onClose={handleShowClose}
            >
                { isLoading ? (
                    <DialogContent className="spinner">
                        <CircularProgress />
                    </DialogContent>
                ) : (
                    <>
                    <DialogTitle>{note.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                           { note.body && note.body  }
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleShowClose}>Close</Button>
                    </DialogActions>
                </>
                ) }
            </Dialog>
        </>
    )
}

export default ViewNote