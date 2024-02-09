import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export const MultilineTextFields = ({ tips }) => {
  const [total, setTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [billAmount, setBillAmount] = useState(0);

  function handleBillAmount(e) {
    setBillAmount(parseFloat(e.target.value));
  }

  React.useEffect(() => {
    const calculateTip = +(billAmount * tips).toFixed(2);
    setTipAmount(calculateTip || "None");
    const calculateTotal = +(calculateTip + billAmount).toFixed(2);
    setTotal(calculateTotal || "None");
  }, [billAmount, tips]);

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
          onChange={handleBillAmount}
          label="Bill amount"
          multiline
          maxRows={4}
          variant="standard"
        />
      </div>
      <p className="total">Tip amount: {tipAmount} </p>
      <p className="total">Total: {total} </p>
    </Box>
  );
};
