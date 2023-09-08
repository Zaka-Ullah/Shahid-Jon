import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import MenuItems from "./Menuitems";
import SubMenuItems from "./SubMenuitems";
import { MenuItem } from "../Interfaces/Bigobj";
import { Propsrendercomponent } from "../Interfaces/Props"; 
import {
  StyledBox,
  StyledButton,
  StyledEndIcon,
  StyledStartIcon,
  Item
} from "../MuiStyled/MuiRenderComponentStyled"; 
import {Box,Typography} from "@mui/material"
import {
  Option1simple,
  Option2simple,
  Option3simple,
  Option4simple,
} from "../Icons/OptionIcons";
import Tips from "./Tips";        
let z = 1;
export default function Rendercomponent(probs: Propsrendercomponent) {
  let [cond, setcond] = useState<boolean>(false);
  function handleClick() {
    if (cond === true) {
      setcond(false);
    } else {
      setcond(true);
    }
    z++;
  }
  return (
    <Grid   xs={2} sm={2} md={2} lg={2} >
      <Item  sx={{overflow:"visible"}}>
        <StyledButton
          disableRipple
          sx={{
            backgroundColor: probs.obj.titleBackgroundColor,
            "&:hover": { backgroundColor: `${probs.obj.titleBackgroundColor}` },      
       
            
          }}
          onClick={handleClick}
          startIcon={
            <StyledStartIcon>
              {" "}
              {probs.obj.title === "menu.wfao.title" ? (
                <Option1simple />
              ) : probs.obj.title === "menu.cef.title" ? (
                <Option2simple />
              ) : probs.obj.title === "menu.postsecondary.title" ? (
                <Option3simple />
              ) : probs.obj.title === "menu.ppToS.title" ? (
                <Option4simple />
              ) : (
                <></>
              )}
            </StyledStartIcon>
          }
          endIcon={
            cond ? (
              <StyledEndIcon>
                <CloseIcon />
              </StyledEndIcon>
            ) : (
              <StyledEndIcon>
                <AddIcon />
              </StyledEndIcon>
            )
          }
        >
          <Typography>{probs.obj.title}</Typography>
        </StyledButton>
        {cond ? (  
          <Box  position="relative" sx={{overflow:"visible"}} >
          <StyledBox
            sx={{
              backgroundColor: `${probs.obj.contentBackgroundColor}`,
              zIndex: z,       
            
            }}
          >      
          <Tips obj={probs.obj.tips}/>
            {probs.obj.menuItems.map((item1: MenuItem) => (
              <>
                {!item1.subTitle ? (
                  <>
                    <SubMenuItems obj9={item1} />
                  </>
                ) : (
                  <MenuItems obj={item1} />
                )}
              </>
            ))}
          </StyledBox>   
          </Box>
        ) : (
          <></>
        )}
      </Item>
    </Grid>
  );
}
