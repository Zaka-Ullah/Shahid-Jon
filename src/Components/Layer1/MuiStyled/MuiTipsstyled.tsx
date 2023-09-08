import {Button,MenuList ,MenuItem,Box,Link} from "@mui/material"  
import { experimentalStyled as styled } from "@mui/material/styles";
const StyledButton = styled(Button)(({ theme }) => ({
      color:"white",fontSize:"12px"
  }));    
  const StyledMenuList = styled(MenuList)(({ theme }) => ({
      
  }));    
  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    backgroundColor:"orange",
  }));    
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor:"orange", 
    position:"absolute",zIndex:"999",right:"0px", 
    borderBottomRightRadius:"5px", 
    borderBottomLeftRadius:"5px",     
    top:"10px",
    boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  }));      
  const StyledLinked = styled(Link)(({ theme }) => ({
  color:"unset"
  }));    
export {StyledButton,StyledMenuList,StyledMenuItem,StyledBox,StyledLinked}