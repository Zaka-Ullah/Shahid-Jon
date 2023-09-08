import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Rendercomponent from "./Rendercomponent";
import { BigObject } from "../Interfaces/Bigobj";  
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";    
import AirplayIcon from '@mui/icons-material/Airplay';
import Renderexpandmenu from "./Renderexpandmenu";
import { StyledButton, StyledButton1,StyledGrid } from "../MuiStyled/MuiHomestyled";
import { StyledButtonClose } from "../MuiStyled/MuiExpandstyled";
export default function Home() {
  let [expand, setexpand] = useState<boolean>(false);
  function expandme() {
    if (expand) {
      setexpand(false);
    } else {
      setexpand(true);
    }
  }
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          boxSizing: "border-box",
         
          marginTop: "95px",
        }}
      >
        <StyledButton onClick={expandme} variant="contained">
          Expand
        </StyledButton>
        <StyledButton1 variant="contained" startIcon={<AirplayIcon/>}>Title</StyledButton1>
        <StyledGrid
          container
          spacing={{ xs: 2, sm: 2,md:2}}
          columns={{ xs: 2, sm: 6, md: 8 }}      
          sx={{justifyContent:"center"}}
        >
          {bigobj.map((item: BigObject) => (
            <Rendercomponent obj={item} />
          ))}
        </StyledGrid>
      </Box>
      {expand ? (
        <Box
          sx={{
            marginTop: "85px",
            flexGrow: 1,
            boxSizing: "border-box",
         

          }}
        >
          <StyledButtonClose sx={{marginTop:"-65px"}} onClick={expandme} disableFocusRipple endIcon={<CloseIcon sx={{position:"absolute",top:"7px"}}/>}>
            Close
          </StyledButtonClose>
          <Renderexpandmenu obj={bigobj} />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
let bigobj: BigObject[] = [
  {
    "id": 1,
    "guideSubject": "guide.workingPeople.subject",
    "guideTitle": "guide.workingPeople.title",
    "guideIcon": "wfao",
    "guideButtonBg": "#B65543",
    "guideButtonText": "button.learnMore",
    "title": "menu.wfao.title",
    "titleBackgroundColor": "#FBC1AD",
    "contentBackgroundColor": "#FBEDE8",
    "icon": "wfao",
    "tips": {
      "id": 2,
      "title": "menu.wfao.tips.title",
      "menuItems": [
        {
          "id": 3,
          "title": "menu.wfao.tips.usefulVideo",
          "url": "www.google.com"
        },
        {
          "id": 4,
          "title": "menu.wfao.tips.instruction",
          "url": "www.google.com"
        },
        {
          "id": 5,
          "title": "menu.wfao.tips.calculator",
          "url": "www.google.com"
        }
      ]
    },
    "menuItems": [
      {
        "id": 6,
        "title": "menu.wfao.beforeApply",
        "icon": "beforeApply",
        "menuItems": [
          {
            "id": 7,
            "title": "menu.wfao.applicationDocList",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 8,
        "title": "menu.wfao.application",
        "icon": "apply",
        "menuItems": [
          {
            "id": 9,
            "title": "menu.wfao.newOrContinueApplication",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 10,
            "title": "menu.wfao.supplementaryDocs",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 11,
            "title": "menu.wfao.withdrawApplication",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 12,
            "title": "menu.wfao.reviewApplication",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 13,
        "title": "menu.wfao.calculator",
        "icon": "calculator",
        "menuItems": [
          {
            "id": 14,
            "title": "menu.wfao.calculator",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      }
    ]
  },
  {
    "id": 15,
    "guideSubject": "guide.adult.subject",
    "guideTitle": "guide.adult.title",
    "guideIcon": "cef",
    "title": "menu.cef.title",
    "guideButtonBg": "#447293",
    "guideButtonText": "button.learnMore",
    "titleBackgroundColor": "#CFE6EB",
    "contentBackgroundColor": "#E4F2F5",
    "icon": "cef",
    "tips": {
      "id": 16,
      "title": "menu.cef.tips.title",
      "menuItems": [
        {
          "id": 17,
          "title": "menu.cef.tips.usefulVideo",
          "url": "www.google.com"
        },
        {
          "id": 18,
          "title": "menu.cef.tips.instruction",
          "url": "www.google.com"
        },
        {
          "id": 19,
          "title": "menu.cef.tips.calculator",
          "url": "www.google.com"
        }
      ]
    },
    "menuItems": [
      {
        "id": 20,
        "title": "menu.cef.beforeApply",
        "icon": "beforeApply",
        "menuItems": [
          {
            "id": 21,
            "title": "menu.cef.list",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 22,
        "title": "menu.cef.application",
        "icon": "apply",
        "menuItems": [
          {
            "id": 23,
            "title": "menu.cef.newOrContinueApplication",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 24,
            "title": "menu.cef.loadOrDeleteDraft",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 25,
            "title": "menu.cef.submittedApplication",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 26,
        "title": "menu.cef.supplementaryDocs",
        "icon": "supplementaryDoc",
        "menuItems": [
          {
            "id": 27,
            "title": "menu.cef.supplementaryPlatform",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 28,
        "title": "menu.cef.calculator",
        "icon": "calculator",
        "menuItems": [
          {
            "id": 29,
            "title": "menu.cef.cefCalculator",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 30,
        "title": "menu.cef.others",
        "icon": "other",
        "menuItems": [
          {
            "id": 31,
            "title": "menu.cef.changePersonalParticulars",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 32,
            "title": "menu.cef.courseSearchEngine",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      }
    ]
  },
  {
    "id": 33,
    "guideSubject": "guide.postsecondary.subject",
    "guideTitle": "guide.postsecondary.title",
    "guideIcon": "postsecondary",
    "guideButtonBg": "#14525A",
    "guideButtonText": "button.learnMore",
    "title": "menu.postsecondary.title",
    "titleBackgroundColor": "#A3CEBD",
    "contentBackgroundColor": "#D8E9E3",
    "icon": "postsecondary",
    "tips": {
      "id": 34,
      "title": "menu.postsecondary.tips.title",
      "menuItems": [
        {
          "id": 35,
          "title": "menu.postsecondary.tips.usefulVideo",
          "url": "www.google.com"
        },
        {
          "id": 36,
          "title": "menu.postsecondary.tips.instruction",
          "url": "www.google.com"
        },
        {
          "id": 37,
          "title": "menu.postsecondary.tips.calculator",
          "url": "www.google.com"
        }
      ]
    },
    "menuItems": [
      {
        "id": 38,
        "title": "menu.postsecondary.beforeApply",
        "icon": "beforeApply",
        "menuItems": [
          {
            "id": 39,
            "title": "menu.postsecondary.docs.title",
            "menuItems": [
              {
                "id": 40,
                "title": "menu.postsecondary.docs.tsfs",
                "url": "www.google.com",
                "isFavourite": false
              },
              {
                "id": 41,
                "title": "menu.postsecondary.docs.fasp",
                "url": "www.google.com",
                "isFavourite": false
              },
              {
                "id": 42,
                "title": "menu.postsecondary.docs.nlsft",
                "url": "www.google.com",
                "isFavourite": false
              },
              {
                "id": 43,
                "title": "menu.postsecondary.docs.nlsps",
                "url": "www.google.com",
                "isFavourite": false
              },
              {
                "id": 44,
                "title": "menu.postsecondary.docs.enls",
                "url": "www.google.com",
                "isFavourite": false
              }
            ]
          }
        ]
      },
      {
        "id": 45,
        "title": "menu.postsecondary.application.title",
        "icon": "apply",
        "menuItems": [
          {
            "id": 46,
            "title": "menu.postsecondary.application.tsfs",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 47,
            "title": "menu.postsecondary.application.fasp",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 48,
            "title": "menu.postsecondary.application.nlsft",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 49,
            "title": "menu.postsecondary.application.nlsps",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 50,
            "title": "menu.postsecondary.application.enls",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 51,
            "title": "menu.postsecondary.loadOrDeleteDraft",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 52,
            "title": "menu.postsecondary.submittedApplication",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 53,
        "title": "menu.postsecondary.supplementaryDocs.title",
        "icon": "supplementaryDoc",
        "menuItems": [
          {
            "id": 54,
            "title": "menu.postsecondary.supplementaryDocs.others",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 55,
            "title": "menu.postsecondary.supplementaryDocs.enls",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 56,
        "title": "menu.postsecondary.appointment.title",
        "icon": "appointment",
        "menuItems": [
          {
            "id": 57,
            "title": "menu.postsecondary.appointment.loans",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 58,
            "title": "menu.postsecondary.appointment.cheque",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 59,
        "title": "menu.postsecondary.calculator.title",
        "icon": "calculator",
        "menuItems": [
          {
            "id": 60,
            "title": "menu.postsecondary.calculator.postsecondary",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 61,
            "title": "menu.postsecondary.calculator.newApplicants",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 62,
            "title": "menu.postsecondary.calculator.mybills",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 63,
        "title": "menu.postsecondary.other",
        "icon": "other",
        "menuItems": [
          {
            "id": 64,
            "title": "menu.postsecondary.undertaking",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 65,
            "title": "menu.postsecondary.deedOfIndemnity",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 66,
            "title": "menu.postsecondary.review",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 67,
            "title": "menu.postsecondary.reviewRejected",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      }
    ]
  },
  {
    "id": 68,
    "guideSubject": "guide.parent.subject",
    "guideTitle": "guide.parent.title",
    "guideSubTitle": "guide.parent.subTitle",
    "guideIcon": "ppToS",
    "guideButtonBg": "#699E5C",
    "guideButtonText": "button.learnMore",
    "title": "menu.ppToS.title",
    "titleBackgroundColor": "#B3F0A4",
    "contentBackgroundColor": "#DEF6D8",
    "icon": "ppToS",
    "tips": {
      "id": 69,
      "title": "menu.ppToS.tips.title",
      "menuItems": [
        {
          "id": 70,
          "title": "menu.ppToS.tips.usefulVideo",
          "url": "www.google.com"
        },
        {
          "id": 71,
          "title": "menu.ppToS.tips.instruction",
          "url": "www.google.com"
        },
        {
          "id": 72,
          "title": "menu.ppToS.tips.calculator",
          "url": "www.google.com"
        }
      ]
    },
    "menuItems": [
      {
        "id": 73,
        "title": "menu.ppToS.beforeApply",
        "icon": "beforeApply",
        "menuItems": [
          {
            "id": 74,
            "title": "menu.ppToS.list",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 75,
        "title": "menu.ppToS.application",
        "subTitle": "menu.ppToS.comprehensiveApplication",
        "icon": "apply",
        "menuItems": [
          {
            "id": 76,
            "title": "menu.ppToS.newApplication",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 77,
            "title": "menu.ppToS.prefill",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 78,
            "title": "menu.ppToS.editDraft",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 79,
            "title": "menu.ppToS.submittedApplication",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 80,
        "title": "menu.ppToS.supplementaryDocs",
        "icon": "supplementaryDoc",
        "menuItems": [
          {
            "id": 81,
            "title": "menu.ppToS.supplementaryPlatform",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 82,
        "title": "menu.ppToS.calculator.title",
        "icon": "calculator",
        "menuItems": [
          {
            "id": 83,
            "title": "menu.ppToS.calculator.preprimary",
            "url": "www.google.com",
            "isFavourite": true
          },
          {
            "id": 84,
            "title": "menu.ppToS.calculator.primaryOrSecondary",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      },
      {
        "id": 85,
        "title": "menu.ppToS.others",
        "icon": "other",
        "menuItems": [
          {
            "id": 86,
            "title": "menu.ppToS.changePersonalParticulars",
            "url": "www.google.com",
            "isFavourite": false
          },
          {
            "id": 87,
            "title": "menu.ppToS.withdrawApplication",
            "url": "www.google.com",
            "isFavourite": true
          },
          {
            "id": 88,
            "title": "menu.ppToS.reviewApplication",
            "url": "www.google.com",
            "isFavourite": false
          }
        ]
      }
    ]
  }
];
