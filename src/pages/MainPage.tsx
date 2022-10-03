import {useTranslation} from "react-i18next";
import {Box, Grid, useMediaQuery, useTheme} from "@mui/material";
import styles from "./MainPage.module.scss"
import PageContentBox from "../components/PageContentBox";

export default function MainPage() {
    const {t} = useTranslation();
    const theme = useTheme();
    const minWidth900px = useMediaQuery("(min-width: 900px)");

    return (
        <PageContentBox
            sx={theme.palette.mode === "dark" ?
                {background: `linear-gradient(to bottom, black 35%, rgb(25,25,50) 65%)`}
                :
                {background: `linear-gradient(to bottom, ${theme.palette.primary.main} 35%, white 65%)`}
            }
        >
            <Grid container
                  spacing={0}
                  direction="row"
                  justifyContent="center"
                  alignItems={minWidth900px ? "center" : "flex-start"}
                  sx={minWidth900px ? {height: "100%"} : {}}>
                <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
                    <Box
                        sx={{marginTop: "2vh", marginBottom: "2vh"}}
                        className={theme.palette.mode === "dark" ? styles.marcoImageBoxDark : styles.marcoImageBoxLight}/>
                </Grid>
                <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
                    <Box className={styles.marcoTextBox}>
                        Marco Grasso<br/>
                        Game &amp; Web developer
                    </Box>
                    <Box className={styles.marcoTextBoxSmall} sx={{color: theme.palette.text.secondary}}>
                        {t("masterDegree")}
                    </Box>
                </Grid>
            </Grid>
        </PageContentBox>
    );
}