import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const MultilineTextFields = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Bill amount"
          multiline
          maxRows={4}
          variant="standard"
        />
      </div>
    </Box>
  );
};
