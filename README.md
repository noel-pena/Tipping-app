# Tipping Calculator App

A simple tipping calculator app built with Vite and React, allowing users to calculate tips based on the service rating.

## Demo

https://noel-pena.github.io/Tipping-app/

## Features

- Calculates tip amount and total bill based on user input.
- User can rate the service, which affects the tip percentage.
- Uses Material-UI components for a modern and responsive UI.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/noel-pena/Tipping-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000` to see the app in action.

## Usage

1. Enter the bill amount in the provided text field.
2. Select the service rating using the icons.
3. The app will automatically calculate and display the tip amount and total bill.

## Code Overview

### Container Component

The main container that houses the app's layout.

```javascript
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { RadioGroupRating } from "./RadioGroupRating";
import { MultilineTextFields } from "./MultilineTextFields";

export const Container = () => {
  const [tips, setTips] = useState(0);

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Grid
        className="container"
        item
        xs={6}
        p={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p>Service rating:</p>
        <RadioGroupRating setTips={setTips} />
        <MultilineTextFields tips={tips} />
      </Grid>
    </Grid>
  );
};
```

### MultilineTextFields Component

Handles the user input for the bill amount and displays the tip amount and total.

```javascript
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
    setTotal(calculateTotal || "");
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
```

### RadioGroupRating Component

```javascript
import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "50px",
  },
}));

const customIcons = {
  1: {
    id: 1,
    icon: <SentimentVeryDissatisfiedIcon color="error" size="large" />,
    label: "0",
  },
  2: {
    id: 2,
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "0.14",
  },
  3: {
    id: 3,
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "0.18",
  },
  4: {
    id: 4,
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "0.2",
  },
  5: {
    id: 5,
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "0.22",
  },
  6: {
    id: 6,
    icon: null,
    label: null,
  },
};

export const RadioGroupRating = ({ setTips }) => {
  const iconProps = {
    cursor: "pointer",
    style: { pointerEvents: "auto" },
  };

  function IconContainer(props) {
    const { value, ...other } = props;

    return (
      <span
        {...other}
        {...iconProps}
        onClick={() => setTips(customIcons[value].label)}
      >
        {customIcons[value].icon}
      </span>
    );
  }

  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={6}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
};
```
