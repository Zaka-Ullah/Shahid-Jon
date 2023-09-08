import ListItemText from "@mui/material/ListItemText";
import { Link, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { experimentalStyled as styled } from "@mui/material/styles";
const LinkStyled = styled(Link)(({ theme }) => ({
  color: "inherit",
}));
const IconWrapper1 = styled("span")(({ theme }) => ({
  // Add spacing between icon and text
  position: "absolute",      
height:"24px",
  right: "8px",color:"grey",cursor:"pointer" , 

}));
let Header = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  marginLeft: "12%",  
  wordBreak:"break-all",  
  marginTop: "11px",
  color: "orangered",   
  letterSpacing:"0px",
  fontWeight:"normal" , 
  whiteSpace: "break-spaces",     
  width:"70%",
 justifyContent:"center",  
 position:"relative"

}));
let Header1 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  marginLeft: "15%",
  marginTop: "11px",    
  wordBreak:"break-all",
  color: "black",         
  letterSpacing:"0px",
  fontWeight:"normal", 
  whiteSpace: "break-spaces",     
   width:"70%",
  justifyContent:"center",  
  position:"relative"
}));
let StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  ":hover": {
    backgroundColor: "unset",
  },
  ":focus": {
    backgroundColor: "unset",
  },
  padding: "1px",
  
  marginTop: "5px",
  whiteSpace: "break-spaces",
  justifyContent:"center",  
width:"70%",
marginLeft:"50%", 
transform:"translate(-43%)"
}));   
let StyledMenuItem1 = styled(MenuItem)(({ theme }) => ({
  ":hover": {
    backgroundColor: "unset",
  },
  ":focus": {
    backgroundColor: "unset",
  },
  padding: "1px",
    
  color:"black",
  marginTop: "5px",     
  width:"70%",
  whiteSpace: "break-spaces",
justifyContent:"center",
marginLeft:"50%", 
transform:"translate(-43%)"
   
}));
const IconWrapper = styled("span")(({ theme }) => ({
  marginLeft: "-27px", // Add spacing between icon and text
  fontSize: "14px", // Adjust the icon's font size
    height:"100%",
  position: "absolute",
  color: "orangered",        
   marginTop:"3.5px", 
   top: "50%",
   transform: "translate(0%,-50%)",
   paddingTop: "2.9px"
}));      
const IconWrapperheader2=styled("span")(({ theme }) => ({
  marginLeft: "-20px", // Add spacing between icon and text
  fontSize: "14px", // Adjust the icon's font size

  position: "absolute",
  color: "",     
  marginTop:"2px", 
  top: "50%",
  transform: "translate(0%,-50%)",
  paddingTop: "1.9px"
}));   
const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  /* Your styles for ListItem here */
  fontSize: "11px",
  wordBreak: "break-all",  
}));               
const IconWrapper2 = styled("span")(({ theme }) => ({
     position:"absolute",  
     cursor:"pointer",    
     fontSize:"11px",   
     marginTop:"2.5px",marginLeft:"5px"
}));
export {
  Header1,
  Header,
  StyledListItemText,
  StyledMenuItem,
  IconWrapper,
  IconWrapper1,
  LinkStyled,
  IconWrapper2,IconWrapperheader2,StyledMenuItem1
};
