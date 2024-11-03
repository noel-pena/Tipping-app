/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {Box, TextField, Typography} from "@mui/material";

export const MultilineTextFields = ({ tips }) => {
  const [total, setTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [billAmount, setBillAmount] = useState(0);

  const handleBillAmount = (e) => {
    setBillAmount(parseFloat(e.target.value));
  };

  useEffect(() => {
    const calculateTip = +(billAmount * tips).toFixed(2);
    setTipAmount(calculateTip || "None");
    const calculateTotal = +(calculateTip + billAmount).toFixed(2);
    setTotal(calculateTotal || "");
  }, [billAmount, tips]);

  return (
    <Box
      component="form"
      p={5}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="standard-multiline-flexible"
          onChange={handleBillAmount}
          label="Bill amount"
          multiline
          maxRows={4}
          variant="standard"
        />
      <Typography p={1} className="total">Tip amount: {tipAmount} </Typography>
      <Typography p={1} className="total">Total: {total} </Typography>
    </Box>
  );
};
