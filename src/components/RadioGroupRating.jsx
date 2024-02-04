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
    icon: <SentimentVeryDissatisfiedIcon color="error" size="large" />,
    label: "0",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "0.14",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "0.18",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "0.2",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "0.22",
  },
  6: {
    icon: null,
    label: null,
  },
};

console.log(customIcons[2].label);

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RadioGroupRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={6}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
      onClick={(e) => {
        return e.getLabelText;
      }}
    />
  );
}
