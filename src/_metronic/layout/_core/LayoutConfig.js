import { toAbsoluteUrl } from "../../_helpers";
export function getInitLayoutConfig() {
  return {
    demo: "demo3",
    // Javascript Settings

    "js": {
      "breakpoints": {
        "sm": 576,
        "md": 768,
        "lg": 992,
        "xl": 1200,
        "xxl": 1200
      },
      "colors": {
        "theme": {
          "base": {
            "white": "#ffffff",
            "primary": "#1BC5BD",
            "secondary": "#E5EAEE",
            "success": "#1BC5BD",
            "info": "#6993FF",
            "warning": "#FFA800",
            "danger": "#F64E60",
            "light": "#F3F6F9",
            "dark": "#212121"
          },
          "light": {
            "white": "#ffffff",
            "primary": "#1BC5BD",
            "secondary": "#ECF0F3",
            "success": "#C9F7F5",
            "info": "#E1E9FF",
            "warning": "#FFF4DE",
            "danger": "#FFE2E5",
            "light": "#F3F6F9",
            "dark": "#D6D6E0"
          },
          "inverse": {
            "white": "#ffffff",
            "primary": "#ffffff",
            "secondary": "#212121",
            "success": "#ffffff",
            "info": "#ffffff",
            "warning": "#ffffff",
            "danger": "#ffffff",
            "light": "#464E5F",
            "dark": "#ffffff"
          }
        },
        "gray": {
          "gray100": "#F3F6F9",
          "gray200": "#ECF0F3",
          "gray300": "#E5EAEE",
          "gray400": "#D6D6E0",
          "gray500": "#B5B5C3",
          "gray600": "#80808F",
          "gray700": "#464E5F",
          "gray800": "#1B283F",
          "gray900": "#212121"
        }
      },
      "fontFamily": "Poppins"
    },
    "self": {
      "layout": "default",
      "body": {}
    },
    "loader": {
      "enabled": true,
      "type": "",
      "logo": "/media/logos/logo-dark-sm.png",
      "message": "Please wait..."
    },
    "header": {
      "self": {
        "fixed": {
          "mobile": false
        }
      }
    },
    "subheader": {
      "display": true,
      "displayDesc": false,
      "displayDaterangepicker": true,
      "breadcrumb": {
        "display": true
      },
      "layout": "subheader-v6",
      "fixed": false,
      "width": "fluid",
      "clear": false,
      "style": "solid"
    },
    "content": {
      "width": "fluid"
    },
    "aside": {
      "self": {
        "display": true,
        "fixed": true,
        "minimize": {
          "toggle": false,
          "default": false
        }
      },
      "secondary": {
        "display": true
      },
      "menu": {
        "dropdown": false,
        "scroll": false,
        "icon-style": "duotone",
        "submenu": {
          "accordion": true
        }
      }
    },
    "footer": {
      "width": "fluid",
      "fixed": false
    },
    "extras": {
      "search": {
        "display": false,
        "layout": "offcanvas",
        "offcanvas": {
          "direction": "right"
        }
      },
      "notifications": {
        "display": false,
        "layout": "offcanvas",
        "dropdown": {
          "style": "dark"
        },
        "offcanvas": {
          "direction": "right"
        }
      },
      "quick-actions": {
        "display": true,
        "layout": "offcanvas",
        "dropdown": {
          "style": "dark"
        },
        "offcanvas": {
          "direction": "left"
        }
      },
      "cart": {
        "display": true,
        "layout": "dropdown",
        "offcanvas": {
          "direction": "dark"
        }
      },
      "chat": {
        "display": true
      },
      "user": {
        "display": true,
        "layout": "offcanvas",
        "dropdown": {
          "style": "light"
        },
        "offcanvas": {
          "direction": "left"
        }
      },
      "languages": {
        "display": true
      },
      "quick-panel": {
        "display": true,
        "offcanvas": {
          "direction": "left"
        }
      },
      "toolbar": {
        "display": true
      },
      "scrolltop": {
        "display": true
      }
    }
  }
}
