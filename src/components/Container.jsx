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
