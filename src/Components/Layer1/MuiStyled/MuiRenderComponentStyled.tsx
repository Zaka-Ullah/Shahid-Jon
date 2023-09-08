import { experimentalStyled as styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import { Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",       
  width:"100%",  
  paddingTop:"35px",
  height:"445px",  
  overflowY:"auto"   ,          
  boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    "&::-webkit-scrollbar":{ 
      width:"8px"
    }
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,

  color: theme.palette.text.secondary,
  borderTopLeftRadius: "11px",
  borderTopRightRadius: "11px",
  overflow: "hidden",
  boxSizing: "border-box",    
  height:"100%"     
}));
const StyledButton = styled(Button)(({ theme }) => ({
  borderTopLeftRadius: "11px",
  borderTopRightRadius: "11px",
  borderBottomLeftRadius: "0px",
  borderBottomRightRadius: "0px",
  padding: "15px",
  color: "black",  
  width:"100%",   
  height:"inherit",
  '& .MuiTypography-root': {
      width:"70%",   
      marginLeft:"3%",
       wordBreak:"break-all"
  },

}));
const StyledStartIcon = styled("span")({
  width: "35px",
  position: "absolute",
  Height: "35px",
  boxSizing: "border-box",

  left: "11px",
  justifyContent: "center",
  paddingLeft: "4px",
  borderRadius: "35px",
  color: "white",     
  top:"55%", 
  transform:"translate(0%,-50%)"
});

const StyledEndIcon = styled("span")({
  position: "absolute",
  right: "9px",
  
  top:"55%", 
  transform:"translate(0%,-50%)"
});
export { StyledBox, StyledButton, StyledEndIcon, StyledStartIcon, Item };
