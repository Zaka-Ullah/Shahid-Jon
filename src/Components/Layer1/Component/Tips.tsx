import { StyledButton,StyledMenuItem, StyledMenuList ,StyledBox,StyledLinked} from "../MuiStyled/MuiTipsstyled"; 
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';    
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';    
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';   
import {Proptips} from "../Interfaces/Props" 
import {useState} from "react"   
export default function Tips(probs:Proptips) {
  let [state,setit]=useState<boolean>(false)
  
  function handleClick(){ 
    if(state === true){ 
        setit(false)
    }  
    else{ 
        setit(true)
    }
  }
    return (<StyledBox>
           <StyledButton startIcon={<TipsAndUpdatesIcon/> } endIcon={state?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>} onClick={handleClick}>{probs.obj.title}</StyledButton>   
            { state ? <StyledMenuList dense>
           {      
                   
                (probs.obj.menuItems).map(item=>(
                        <StyledMenuItem ><StyledLinked href={item.url} underline="none" >{item.title}</StyledLinked></StyledMenuItem>   
                ))
           }      
           </StyledMenuList>  :<></> 
}
           </StyledBox>
    );

}