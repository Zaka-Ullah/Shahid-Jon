import {
  StyledBox,
  StyledBox2,
  StyledTypographyCount,
  StyledTypographyCountValue,
  StyledTypographyBalanceValue,
  StyledCircularProgress,
  StyledButtonTop,
  StyledTypographyBalance,
  StyledBox1,
} from "../MuiStyled/MuiMainStyled";
import { CEFBalance } from "../Interfaces/CEFBalance";
import { Button, Typography,Box } from "@mui/material"; 
let CEFBalanceObject: CEFBalance = {
  accountBalance: 25000,
  count: 3,
  maximumEntitlement: 25000,
};         
export default function MainLayer4() {        
 
  let value: number =
    (CEFBalanceObject.accountBalance / CEFBalanceObject.maximumEntitlement) *
    80;      
  return (    
    <>
    <StyledBox>
      <StyledButtonTop disableRipple disableElevation variant="contained">Continuing Education</StyledButtonTop>   
      
      <StyledBox1>      
      <StyledCircularProgress
          variant="determinate"
          value={80}
          style={{
            width: "270px",
            height: "auto",  
            marginTop:"45px",    
        position:"absolute",      
        color:"#6ED6E4",  
        opacity:".2",
        left:"0px",   
        zIndex:"0",
            transform: "rotate(-90deg) ",
          }}    
       
     
        />
        <StyledCircularProgress
          variant="determinate"
          value={value}
          style={{
            width: "270px",
            height: "auto",     
            marginTop:"45px",    
            color:"#6ED6E4",
            transform: "rotate(-90deg) ",
          }}
        />
             
        <StyledTypographyBalance>Account Balance</StyledTypographyBalance>
        <StyledTypographyBalanceValue>
          HK$ {CEFBalanceObject.accountBalance}
        </StyledTypographyBalanceValue>
        <StyledTypographyCount>Count</StyledTypographyCount>
        <StyledTypographyCountValue>
          {CEFBalanceObject.count}
        </StyledTypographyCountValue>
      </StyledBox1>
      <StyledBox2>
        <Typography
          sx={{
            textAlign: "center",
            lineHeight: "32px",     
            fontFamily:"Roboto",     
  
            [`@media (max-width: 1085px)`]: {
              lineHeight: "normal",     
            },
          }}
        >
          Maximum Entitlement
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            lineHeight: "32px",    
            fontFamily:"Roboto",     
  
            [`@media (max-width: 1085px)`]: {
              lineHeight: "25px",
            },
          }}
        >
          HK$ {CEFBalanceObject.maximumEntitlement}
        </Typography>
        <Button    
             disableRipple disableElevation variant="contained"
          sx={{
            textAlign: "center",
            width: "100%", 
            fontFamily:"Roboto",    
            backgroundColor:"#428FA0",       
            marginTop:"12px",
            "&:hover":{ 
                backgroundColor:"#428FA0",   
            },
            [`@media (max-width: 1085px)`]: {
             
              marginTop:"26px"
            },   
       
          }}
        >
          Course Finder
        </Button>
      </StyledBox2>
    </StyledBox>       
    <Box sx={{width:"50%",height:"395px",position:"absolute",marginTop:"-397px",marginLeft:"50%"}}></Box>    
    </> 
  );
}
