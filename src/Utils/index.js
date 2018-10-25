class Utils {
  sort(arr, name, obj, desc = true) {
    if (obj) {
      arr.sort((a, b) => {
        let aLikes = 0;
        let bLikes = 0;
        if (a[obj] && a[obj][name]) {
          aLikes = a[obj][name]
        }
        if (b[obj] && b[obj][name]) {
          bLikes = b[obj][name]
        }
        if (desc) {
          return bLikes - aLikes;
        }
        else {
          return aLikes - bLikes;
        }
        
      });

    }
    else {
      arr.sort((a, b) => {
        let aLikes = 0;
        let bLikes = 0;
        if (a[name]) {
          aLikes = a[name]
        }
        if (b[name]) {
          bLikes = b[name]
        }
        if (desc) {
          return bLikes - aLikes;
        }
        else {
          return aLikes - bLikes;
        }
        
      });

    }
 
  }

  getThemeTemplate(palette, type = "light") {
    const result = {
      typography: {
        fontFamily: "\"Titillium Web\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
      }, 
      palette: {
        type: type,
        /**
         * to be decided
         */
        background: {
          default: palette.background,
          paper: palette.background
        },
  
        primary: {
          light: palette.primaryLight,
          main: palette.primaryMain,
          dark: palette.primaryDark
          // contrastDefaultColor: 'dark',
          // contrastText: '#fff',
        },
        secondary: {
          light: palette.secondaryLight,
          main: palette.secondaryMain,
          dark: palette.secondaryDark
          // contrastText: '#000',
        }
      },
  
      overrides: {
        MuiButton: {
          // Name of the styleSheet
          root: {
            // Name of the rule
            background: palette.primaryMain,
            color: palette.textPrimary
          }
        },
        /**
         * avatar has no "color" option
         */
        MuiAvatar: {
          // Name of the styleSheet
          colorDefault: {
            // Name of the rule
            backgroundColor: palette.secondaryMain
          }
        },
        /**
         * no need since we specified background already
         */
        // MuiPaper: {
        //   root: {
        //     backgroundColor: palette.primaryDark
        //   }
        // },
        /**
         * we need to set this,  child element who uses inherit
         * will get this color.
         * Let's set this to secondary light to allow child who uses
         * inherit to get a different color.
         */
        MuiList: {
          root: {
            backgroundColor: palette.primaryLight,
            color: palette.textPrimary
          }
        },
        /**
         * root will be applied if color is "default"
         * "inherit" will simply get the colors from whatever the
         * background is, in our case, it's the List component
         * lets make the default the same as the list item
         * temporarily commented out
         * Subheader has no background color, it depends on its parent List
         * let's just change List to secondary
         * If it's default then the text will be a transparent one
         */
        MuiListSubheader: {
          // root: {
          //   backgroundColor: palette.primaryLight,
          //   color: palette.textPrimary
          // },
          colorPrimary: {
            backgroundColor: palette.primaryMain,
            color: palette.textPrimary
          }
        },
        MuiListItem: {
          root: {
            backgroundColor: palette.primaryLight
          }
        },
        MuiListItemText: {
          primary: {
            color: palette.textPrimary
          },
          secondary: {
            color: palette.textSecondary
          }
        },
        MuiIcon: {
          colorPrimary: {
            color: palette.secondaryMain
          }
        },
        MuiBottomNavigation: {
          root: {
            backgroundColor: palette.primaryMain
          }
        },
        MuiBottomNavigationAction: {
          root: {
            color: palette.textSecondary
          },
          selected: {
            color: palette.secondaryMain
          }
        },
        MuiSwitch: {
          icon: {
            color: palette.secondaryMain
          }
        },
        /**
         * unfortunately, Chip has no "color" property
         * so we are stuck to using one.
         */
        MuiChip: {
          root: {
            backgroundColor: palette.primaryMain,
            // backgroundColor: "rgba(0, 0, 0, 0.1)"
            // color: palette.textPrimary
          },
          avatar: {
            color: palette.textPrimary
          }
        },
        MuiInput: {
          root: {
            // backgroundColor: palette.third,
            color: palette.textPrimary
          }
        },
        MuiFormLabel: {
          root: {
            // backgroundColor: palette.third,
            color: palette.textSecondary
          }
        },
        MuiFormHelperText: {
          root: {
            // backgroundColor: palette.third,
            color: palette.textSecondary
          }
        },
        /**
         * we are not going to set default colors for this,
         * since some text needs to be black, lets allow
         * child components to use it.
         * child components should explicitly choose "primary"
         * if they want a different color
         */
        MuiTypography: {
          // body1: {
          //   color: palette.textPrimary
          // },
          // // display1: {
          //   color: palette.textPrimary
          // },
          colorPrimary: {
            color: palette.textPrimary
          },
          colorSecondary: {
            color: palette.textSecondary
          }
        }
      }
    }
    return result;

  }

  
createTheme(palette, type = "light") {
  const result = createMuiTheme({
    typography: {
      fontFamily: "\"Titillium Web\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    }, 
    palette: {
      type: type,
      /**
       * to be decided
       */
      background: {
        default: palette.background,
        paper: palette.background
      },

      primary: {
        light: palette.primaryLight,
        main: palette.primaryMain,
        dark: palette.primaryDark
        // contrastDefaultColor: 'dark',
        // contrastText: '#fff',
      },
      secondary: {
        light: palette.secondaryLight,
        main: palette.secondaryMain,
        dark: palette.secondaryDark
        // contrastText: '#000',
      }
    },

    overrides: {
      MuiButton: {
        // Name of the styleSheet
        root: {
          // Name of the rule
          background: palette.primaryMain,
          color: palette.textPrimary
        }
      },
      /**
       * avatar has no "color" option
       */
      MuiAvatar: {
        // Name of the styleSheet
        colorDefault: {
          // Name of the rule
          backgroundColor: palette.secondaryMain
        }
      },
      /**
       * no need since we specified background already
       */
      // MuiPaper: {
      //   root: {
      //     backgroundColor: palette.primaryDark
      //   }
      // },
      /**
       * we need to set this,  child element who uses inherit
       * will get this color.
       * Let's set this to secondary light to allow child who uses
       * inherit to get a different color.
       */
      MuiList: {
        root: {
          backgroundColor: palette.primaryLight,
          color: palette.textPrimary
        }
      },
      /**
       * root will be applied if color is "default"
       * "inherit" will simply get the colors from whatever the
       * background is, in our case, it's the List component
       * lets make the default the same as the list item
       * temporarily commented out
       * Subheader has no background color, it depends on its parent List
       * let's just change List to secondary
       * If it's default then the text will be a transparent one
       */
      MuiListSubheader: {
        // root: {
        //   backgroundColor: palette.primaryLight,
        //   color: palette.textPrimary
        // },
        colorPrimary: {
          backgroundColor: palette.primaryMain,
          color: palette.textPrimary
        }
      },
      MuiListItem: {
        root: {
          backgroundColor: palette.primaryLight
        }
      },
      MuiListItemText: {
        primary: {
          color: palette.textPrimary
        },
        secondary: {
          color: palette.textSecondary
        }
      },
      MuiIcon: {
        colorPrimary: {
          color: palette.secondaryMain
        }
      },
      MuiBottomNavigation: {
        root: {
          backgroundColor: palette.primaryMain
        }
      },
      MuiBottomNavigationAction: {
        root: {
          color: palette.textSecondary
        },
        selected: {
          color: palette.secondaryMain
        }
      },
      MuiSwitch: {
        icon: {
          color: palette.secondaryMain
        }
      },
      /**
       * unfortunately, Chip has no "color" property
       * so we are stuck to using one.
       */
      MuiChip: {
        root: {
          backgroundColor: palette.primaryMain,
          // backgroundColor: "rgba(0, 0, 0, 0.1)"
          // color: palette.textPrimary
        },
        avatar: {
          color: palette.textPrimary
        }
      },
      MuiInput: {
        root: {
          // backgroundColor: palette.third,
          color: palette.textPrimary
        }
      },
      MuiFormLabel: {
        root: {
          // backgroundColor: palette.third,
          color: palette.textSecondary
        }
      },
      MuiFormHelperText: {
        root: {
          // backgroundColor: palette.third,
          color: palette.textSecondary
        }
      },
      /**
       * we are not going to set default colors for this,
       * since some text needs to be black, lets allow
       * child components to use it.
       * child components should explicitly choose "primary"
       * if they want a different color
       */
      MuiTypography: {
        // body1: {
        //   color: palette.textPrimary
        // },
        // // display1: {
        //   color: palette.textPrimary
        // },
        colorPrimary: {
          color: palette.textPrimary
        },
        colorSecondary: {
          color: palette.textSecondary
        }
      }
    }
  });
  return result;
}


}


const utils = new Utils();
export default utils;
