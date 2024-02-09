import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export const MultilineTextFields = ({ tips }) => {
  console.log(`tips inside of multiline: ${tips}`);
  const [total, setTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [billAmount, setBillAmount] = useState(0);

  function handleBillAmount(e) {
    setBillAmount(parseInt(e.target.value));
  }

  React.useEffect(() => {
    const calculateTip = billAmount * tips;
    setTipAmount(parseInt(calculateTip));
    const calculateTotal = calculateTip + billAmount;
    setTotal(parseInt(calculateTotal));
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
