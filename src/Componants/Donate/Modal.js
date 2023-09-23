import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
//   border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open,onClose}) {
//   const handleOpen = () => setOpen(true);
  // const onClose = () => setOpen(false);
//   console.log(open)

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thanks for your donation
          </Typography>
          {/* <Button sx={{mt:4,alignItems:'right'}} variant='contained' onClick={()=>onClose}>Okay</Button> */}

        </Box>
      </Modal>
    </div>
  );
}