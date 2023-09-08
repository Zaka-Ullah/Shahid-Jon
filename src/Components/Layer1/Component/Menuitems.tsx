import {
  Header,
  Header1,
  IconWrapper,
  StyledListItemText,
  LinkStyled,
  IconWrapperheader2,StyledMenuItem1
} from "../MuiStyled/MuiMenuSubMenustyled";           
import EmailIcon from "@mui/icons-material/Email";
import MenuList from "@mui/material/MenuList";
import { SubMenuItem } from "../Interfaces/Bigobj";
import { Propsmenuitems } from "../Interfaces/Props";     
import MenuFavouriteHandle from "./MenuFavouriteHandle";
      
export default function MenuItems(probs: Propsmenuitems) {       

  return (
    <>
      <Header >
        <IconWrapper>
          {" "}
          <EmailIcon sx={{fontSize:"16px"}}/>
        </IconWrapper>
        {probs.obj.title}
      </Header>
      <Header1>
        <IconWrapperheader2 >
          {" "}
          <EmailIcon sx={{fontSize:"14px"}}/>
        </IconWrapperheader2>
        {probs.obj.subTitle}
      </Header1>
      <MenuList dense sx={{marginBottom:"0px",paddingTop:"0px",paddingBottom:"0px"}}>
        {probs.obj.menuItems.map((item: SubMenuItem) => (
          <StyledMenuItem1 disableRipple >
            <StyledListItemText>
              <LinkStyled href={item.url} underline="none">
                {item.title}
              </LinkStyled>
              {"isFavourite" in item ? 
              <MenuFavouriteHandle item={{...item}}/> : 
                undefined
              }
            </StyledListItemText>
          </StyledMenuItem1>
        ))}
      </MenuList>
    </>
  );
}
