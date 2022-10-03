import {Box, styled} from "@mui/material";

// Values taken from: https://mui.com/material-ui/customization/default-theme/
// Idea source: https://stackoverflow.com/questions/67331031/how-can-i-make-my-layout-adapt-to-the-material-ui-toolbar-height
const PageContentBox = styled(Box)(({theme}) => ({
    height: "calc(100vh - 56px)",
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
        height: "calc(100vh - 48px)"
    },
    [theme.breakpoints.up("sm")]: {
        height: "calc(100vh - 64px)"
    }
}));

export default PageContentBox;

export const PageContentBoxMinHeight = styled(Box)(({theme}) => ({
    minHeight: "calc(100vh - 56px)",
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
        minHeight: "calc(100vh - 48px)"
    },
    [theme.breakpoints.up("sm")]: {
        minHeight: "calc(100vh - 64px)"
    }
}));