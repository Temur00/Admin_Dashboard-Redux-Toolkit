const { Box } = require("@mui/material");
const { styled } = require("@mui/system");
// const { default: styled } = require("@emotion/styled");

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
