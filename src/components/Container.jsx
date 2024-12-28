import { Grid2 as Grid } from "@mui/material";
import { useState } from "react";
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
        size={{xs: 6}}
        sx={{
          p: 5,
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
