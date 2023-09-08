import { experimentalStyled as styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
const StyledButton = styled(Button)(({ theme }) => ({
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  borderBottomLeftRadius: "0px",
  borderBottomRightRadius: "0px",
  padding: "12px",
  paddingLeft: "22px",
  paddingRight: "22px",
  position: "fixed",
  marginTop: "34px",
  top: "1px",
  right: "19px",
  color: "white",
  zIndex: 999,
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    marginLeft: "15%",
  },
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    marginLeft: "unset",
    transform: "unset",
  },
}));
const StyledButton1 = styled(Button)(({ theme }) => ({
  zIndex: 999,
  border: "none",
  position: "fixed",
  marginTop: "34px",
  padding: "12px",
  paddingLeft: "22px",
  paddingRight: "22px",
  top: "1px",
  left: "19px",
  color: "white",
}));
export { StyledButton, StyledButton1, StyledGrid };
