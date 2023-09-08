import Grid from "@mui/material/Unstable_Grid2";
import { Proprenderexpand } from "../Interfaces/Props";
import {
  Header,
  Header1,
  StyledButton,
  StyledGrid,
  Item,
  StyledIconButton,
  HeaderTop,
} from "../MuiStyled/MuiExpandstyled";  
import { Box } from "@mui/material";
import { Option1, Option2, Option3, Option4 } from "../Icons/OptionIcons";
export default function Renderexpandmenu(probs: Proprenderexpand) {
  return (
    <StyledGrid container  sx={{justifyContent:"center"}}   spacing={{ xs: 2, sm: 2,md:2}}  columns={{ xs: 2, sm: 6, md: 8 }}  >
      {probs.obj.map((item) => (
        <Grid xs={2} sm={2} md={2} lg={2}>
          <Item sx={{position:"relative"}}>  
          <Box sx={{paddingTop:"10px", boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",positon:"absolute",height:"225px",width:"100%",backgroundColor: item.contentBackgroundColor }}>
            <HeaderTop>{item.guideSubject}</HeaderTop>
            <StyledIconButton disableRipple>
              {item.title === "menu.wfao.title" ? (
                <Option1 />
              ) : item.title === "menu.cef.title" ? (
                <Option2 />
              ) : item.title === "menu.postsecondary.title" ? (
                <Option3 />
              ) : item.title === "menu.ppToS.title" ? (
                <Option4 />
              ) : (
                <></>
              )}
            </StyledIconButton>
            <Header>{item.guideSubject}</Header>
            <Header1>{item.guideSubTitle}</Header1>
            <StyledButton
              sx={{
                backgroundColor: item.guideButtonBg,
                ":hover": {
                  backgroundColor: item.guideButtonBg,
                },
              }}
            >
              {item.guideButtonText}
            </StyledButton>    
            </Box>
          </Item>
        </Grid>
      ))}
    </StyledGrid>
  );
}
