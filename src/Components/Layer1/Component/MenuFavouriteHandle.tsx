import { useState } from "react";
import { Propsmenuitem } from "../Interfaces/Props";  
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconWrapper1 } from "../MuiStyled/MuiMenuSubMenustyled";
export default function MenuFavouriteHandle(probs:Propsmenuitem){     

  
    let [favourite,setfavourite]=useState<boolean>(probs.item.isFavourite ?? false )     
     function handlefavourite(){   
       if(probs.item.isFavourite === true){ 
        probs.item.isFavourite=false   
        setfavourite(false)
       } 
       else{ 
        probs.item.isFavourite=true   
        setfavourite(true)
       }   
   
     }
    return ( 
        <IconWrapper1 >
                   { !(favourite) ?<FavoriteBorderIcon   onClick={handlefavourite}/> : <FavoriteIcon sx={{fill:"black"}} onClick={handlefavourite}/>}
                </IconWrapper1>
    )
}