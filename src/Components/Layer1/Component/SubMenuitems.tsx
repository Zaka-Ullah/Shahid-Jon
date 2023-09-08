import MenuList from "@mui/material/MenuList";
import EmailIcon from "@mui/icons-material/Email";   
import MenuFavouriteHandle from "./MenuFavouriteHandle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SubMenuItem } from "../Interfaces/Bigobj";
import { Propssubmenuitems } from "../Interfaces/Props";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Header1,
  Header,
  StyledListItemText,
  StyledMenuItem,
  IconWrapper,
  LinkStyled,
  IconWrapper2,
  IconWrapperheader2,
} from "../MuiStyled/MuiMenuSubMenustyled";
export default function SubMenuItems(probs: Propssubmenuitems) {
  let [open, setopen] = useState<boolean>(false);

  return (
    <>
      <Header>
        <IconWrapper>
          {" "}
          <EmailIcon sx={{ fontSize: "16px" }} />
        </IconWrapper>
        {probs.obj9.title}
      </Header>
      {probs.obj9.menuItems.map((item: SubMenuItem) => (
        <>
          <Header1>
            <IconWrapperheader2>
              {" "}
              <EmailIcon sx={{ fontSize: "14px" }} />
            </IconWrapperheader2>
            <LinkStyled href={item.url} underline="none">
              {item.title}
            </LinkStyled>
            {"isFavourite" in item ?   
               <MenuFavouriteHandle item={{...item}}/> 
             : undefined}
            {item.menuItems ? (
              <IconWrapper2>
                {open ? (
                  <CloseIcon
                    sx={{ fontSize: "16px" }}
                    onClick={() => {
                      if (open) {
                        setopen(false);
                      } else {
                        setopen(true);
                      }
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{ fontSize: "16px" }}
                    onClick={() => {
                      if (open) {
                        setopen(false);
                      } else {
                        setopen(true);
                      }
                    }}
                  />
                )}
              </IconWrapper2>
            ) : undefined}
          </Header1>
          {item.menuItems ? (
            <>
              {open ? (
                <MenuList dense>
                  {item.menuItems.map((item: SubMenuItem) => (
                    <StyledMenuItem disableRipple>
                      <StyledListItemText>
                        <LinkStyled href={item.url} underline="none">
                          {item.title}
                        </LinkStyled>
                        {"isFavourite" in item ? 
                                 <MenuFavouriteHandle item={{...item}}/> 
                                 : undefined
                          }
                      </StyledListItemText>
                    </StyledMenuItem>
                  ))}
                </MenuList>
              ) : undefined}
            </>
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
}
