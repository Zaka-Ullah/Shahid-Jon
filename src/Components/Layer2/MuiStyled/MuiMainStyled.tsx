import { Box, Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { experimentalStyled as styled } from "@mui/material/styles";
const StyledBox = styled(Box)(({ theme }) => ({
  width: "50%",
  paddingBottom: "49px",
  marginTop: "55px",
  position: "relative",
  backgroundColor: "white",
  transition:"transform 250ms ease-in-out  ",
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  borderRadius: "5px",
  [theme.breakpoints.down("centercefsettlement")]: {
    width: "100%",   
    marginLeft:"50%",  
  transform:"translate(-50%)"
  },    
  height:"355px"
}));
const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({   

  "& svg": {
    transform: "rotate(216.11deg)",
    width: "inherit",
    position: "relative",
 
    "circle":{
      strokeLinecap:"round",
    }
  },  
 
}));
const StyledBox1 = styled(Box)(({ theme }) => ({
  width: "345px",
  marginTop: "-24px",
  marginBottom: "94px",
  [theme.breakpoints.down("CEF")] : {
    marginLeft: "55%",
    transform: "translate(-48%)",
  },
}));
const StyledButtonTop = styled(Button)(({ theme }) => ({      
    width:"100%",      
    backgroundColor:"#2CA9BF",   
    textAlign:"left",  
    padding:"11px",
   
    "&:hover":{ 
        backgroundColor:"#2CA9BF",   
    }
  }));
const StyledTypographyBalance = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginTop: "-187px",    
  fontFamily:"Roboto",   
  width:"275px",
  [theme.breakpoints.down("CEF")] : {
    lineHeight: "22px",        
  },
}));
const StyledTypographyBalanceValue = styled(Typography)(({ theme }) => ({
  textAlign: "center",       
  fontFamily:"Roboto",     
  width:"275px",
  lineHeight: "28px",
  [theme.breakpoints.down("CEF")] :{
    lineHeight: "22px", 
  },
}));
const StyledTypographyCount = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  lineHeight: "28px",   
  fontFamily:"Roboto",     
  width:"275px",   
  
  [theme.breakpoints.down("CEF")] : {
    lineHeight: "22px", 
  },
}));
const StyledTypographyCountValue = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  lineHeight: "28px",   
  fontFamily:"Roboto",     
  width:"275px",
  [theme.breakpoints.down("CEF")] : {
    lineHeight: "22px", 
  },
}));
const StyledBox2 = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "14px",
  top: "164px",   
  fontFamily:"Roboto",     
  transition:"transform 250ms ease-in-out  ",
  [theme.breakpoints.down("CEF")] : {
    width: "205px",
    left: "50%",
    transform: "translate(-55%)",
    top: "251px",
  },
}));
export {
  StyledBox,
  StyledBox1,
  StyledBox2,
  StyledTypographyCount,
  StyledTypographyCountValue,
  StyledCircularProgress,
  StyledButtonTop,
  StyledTypographyBalance,
  StyledTypographyBalanceValue,
};
