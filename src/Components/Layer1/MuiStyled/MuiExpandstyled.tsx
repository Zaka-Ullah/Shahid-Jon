import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Typography, Paper, IconButton } from "@mui/material";
const StyledGrid = styled(Grid)(({ theme }) => ({
  /*"--Grid-columnSpacing": "0px",
    
  marginTop: "-48px",        
  width: "100%", 
 */    
  
  [theme.breakpoints.down('sm')]: {
    width:"70%",   
    marginLeft:"50%",
    transform:"translate(-50%)"
  },      
  [theme.breakpoints.down('xs')]: {
    width:"100%",   
    marginLeft:"unset",
    transform:"unset"
  },  

}));
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: "95px",
  height: "95px",
  position: "absolute",
  top: "74px",
  opacity: ".4",
  left: "11%",
  transform: "translate(-20%)",
}));
const Item = styled(Paper)(({ theme }) => ({
 
}));
let Header = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  marginLeft: "35%",
  marginTop: "75px",
  color: "orangered",
  textAlign: "center",
  fontFamily: "Roboto",
}));
let HeaderTop = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  position: "absolute",
  marginTop: "24px",
  color: "black",
  marginLeft: "4%",
}));
let Header1 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",          
  marginLeft: "50%",   
  marginTop: "11px",      
  position:"absolute",
  color: "black",
  textAlign: "center",
  fontFamily: "Roboto",
}));
const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "13px",
  marginLeft: "70%",     
  transform: "translate(-50%)",
  marginTop: "55px",
  color: "white",
  textAlign: "center",
  fontFamily: "Roboto",
  padding: "5px",
  paddingLeft: "11px",
  paddingRight: "11px",
  borderRadius: "5px",
  marginBottom: "18px",
}));
const StyledButtonClose = styled(Button)(({ theme }) => ({
  position: "absolute",
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  color: "white",
  backgroundColor: "orangered",
  padding:"5px",
  paddingLeft: "9px",
  paddingRight: "28px",    
  transform:"unset",
  right: "16px",
  ":hover": {
    backgroundColor: "orangered",
  },     
  [`@media (max-width: 900px)`]: {
        right:"15%",    
        transform:"translate(-17%)"
  },
  [`@media (max-width: 550px)`]: {        
       right:"17px",
       transform:"unset"
    }, 
}));
export {
  Header,
  Header1,
  StyledButton,
  Item,
  StyledGrid,
  StyledIconButton,
  HeaderTop,
  StyledButtonClose,
};
