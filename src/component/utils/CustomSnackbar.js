import * as React from "react";
import Stack from "@mui/material/Stack";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars = (props) => {
  const { check } = props;
  const [open, setOpen] = React.useState(check);
  const [state, setState] = React.useState({
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal } = state;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Vui lòng nhập đầy đủ thông tin !
        </Alert>
      </Snackbar>
    </Stack>
  );
};
export default CustomizedSnackbars;
