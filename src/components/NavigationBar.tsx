import {Link} from "react-router-dom";
import * as React from "react";
import {
    AppBar, Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography, useTheme
} from "@mui/material";
import {Menu as MenuIcon, Translate as TranslateIcon} from "@mui/icons-material";
import styles from "./NavigationBar.module.scss";
import i18next from "i18next"
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {ColorModeContext} from "../config/DarkLightTheme";
import {pages, languages} from "../App"
import {useTranslation} from "react-i18next";

export default function NavigationBar() {
    const {t} = useTranslation();
    const [subMenuAnchor, setSubMenuAnchor] = React.useState<null | HTMLElement>(null);

    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    const [language, setLanguage] = React.useState("en");
    const [langAnchor, setLangAnchor] = React.useState<null | HTMLElement>(null);

    const handleLanguageChange = (newLanguage: string) => {
        if (newLanguage !== language) {
            i18next.changeLanguage(newLanguage).then(() => {
                setLanguage(newLanguage);
                setLangAnchor(null);
            });
        }
    };

    return (
        <>
            <AppBar position="static" enableColorOnDark sx={theme.palette.mode === "dark" ? {
                backgroundColor: "black",
                backgroundImage: 'unset'
            } : {
                backgroundColor: theme.palette.primary.main,
                backgroundImage: 'unset'
            }}>
                <Toolbar>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="main-sub-menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={(event) => setSubMenuAnchor(event.currentTarget)}
                            sx={{color: "white"}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={subMenuAnchor}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(subMenuAnchor)}
                            onClose={() => setSubMenuAnchor(null)}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages
                                .filter((page) => page.title !== undefined)
                                .map((page, index) => (
                                    <MenuItem key={index} onClick={() => setSubMenuAnchor(null)}>
                                        <Link key={index} to={page.url} style={{textDecoration: "none"}}>
                                            <Typography key={index} textAlign="center" sx={{
                                                textDecoration: "none",
                                                color: theme.palette.text.primary
                                            }}>
                                                {t(page.title as string)}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            {pages
                                .filter((page) => page.title !== undefined)
                                .map((page, index) => (
                                    <Link key={index} to={page.url}
                                          className={styles.link}>{t(page.title as string)}</Link>
                                ))}
                            <a href="https://www.in.tum.de/in/impressum/" className={styles.link}>{t("LegalDisclosure")}</a>
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="div">
                            <Link to={"/contact"}
                                  className={theme.palette.mode === 'dark' ? styles.contactButtonDark : styles.contactButtonLight}>{t("Contact")}</Link>
                        </Typography>
                    </Box>
                    <IconButton onClick={colorMode.toggleColorMode} sx={{color: "white"}}>
                        {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                    </IconButton>
                    <Button
                        startIcon={<TranslateIcon/>}
                        onClick={(event) => setLangAnchor(event.currentTarget)}
                        className={styles.languageButton}
                    >
                        {t("Language")}
                    </Button>
                    <Menu
                        id="language-submenu"
                        anchorEl={langAnchor}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(langAnchor)}
                        onClose={() => setLangAnchor(null)}
                    >
                        {languages.map((language, index) => (
                            <MenuItem key={index} onClick={() => handleLanguageChange(language.code)}>
                                {t(language.title)}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    );
}