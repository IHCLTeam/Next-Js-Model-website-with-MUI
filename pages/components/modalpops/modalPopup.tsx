import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginPage from "../Login/Loginpage";
import React from "react";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   outerHeight: 400,
//   bgcolor: "background.paper",
//   boxShadow: 24,
// };

export default function BasicModal() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      
      {/* <Button className="booksign" onClick={handleOpen}> */}

      <Button>
        Login
      </Button>



      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <LoginPage />
          </Typography>
        </Box>
      </Modal> */}


    </div>
  );
}
