import PageContentBox from "../../components/PageContentBox";
import {
    Box,
    Button,
    Grid, Link,
    Paper,
    SpeedDial,
    SpeedDialAction,
    Stack,
    Typography, useTheme
} from "@mui/material";
import React, {useRef} from "react";
import {useTranslation} from "react-i18next";
import {
    UnfoldMore as SpeedDialIcon,
    School as UniIcon,
    AutoStories as BookIcon,
    Description as DescriptionIcon,
} from "@mui/icons-material"
import StudyCourses from "./StudyCourses";
import Publications from "./Publications";

const scrollToElement = (element: Element | null) => {
    if (element === null) window.scroll({top: 0, left: 0, behavior: "smooth"});
    else element.scrollIntoView({behavior: "smooth"});
};

export default function UniversityPage() {
    const {t} = useTranslation();
    const theme = useTheme();

    const publicationsRef = useRef<Element | null>(null);
    const coursesRef = useRef<Element | null>(null);

    const speedDialActions = [
        {
            icon: <BookIcon/>,
            name: t("studyCourses").charAt(0).toUpperCase() + t("studyCourses").slice(1),
            onclick: () => scrollToElement(coursesRef.current)
        },
        {
            icon: <DescriptionIcon/>,
            name: t("publications").charAt(0).toUpperCase() + t("publications").slice(1),
            onclick: () => scrollToElement(publicationsRef.current)
        },
        {
            icon: <UniIcon/>,
            name: t("University"),
            onclick: () => scrollToElement(null)
        }
    ];

    return (
        <>
            <PageContentBox sx={{paddingTop: "3vh", backgroundColor: theme.palette.mode === "dark" ? "white" : "rgb(25,25,50)"}}>
                <Grid container
                      columns={20}
                      justifyContent="center"
                      alignItems="flex-start"
                >
                    <Grid item xs={18}>
                        <Paper elevation={2} sx={{maxHeight: "85vh", padding: "2vh", overflowY: "auto"}}>
                            <Typography variant="h3"
                                        sx={{textAlign: "center", marginBottom: "10px"}}>{t("tum")}</Typography>
                            <Box sx={{marginBottom: "10px"}}>
                                <Box sx={{
                                    margin: "1vh 1vw",
                                    float: "right",
                                    height: "auto",
                                    width: {xs: "100%", md: "50%"}
                                }}>
                                    <Box
                                        component="img"
                                        alt="Computer Science department"
                                        src={process.env.PUBLIC_URL + "/images/TUMInformatik.jpg"}
                                        sx={{
                                            height: "auto",
                                            width: "100%"
                                        }}
                                    />
                                    <Typography variant="caption" sx={{color: theme.palette.text.secondary}}>{t("imageSource")}: </Typography>
                                    <Link
                                        href="https://commons.wikimedia.org/wiki/File:TUM-Mathe-Informatik_2016-08-15_1.jpg"
                                        sx={{
                                            textDecoration: "none",
                                            color: theme.palette.text.secondary,
                                            "&:link": {color: theme.palette.text.secondary},
                                            "&:hover": {color: theme.palette.primary.main}
                                        }}>
                                        <Typography variant="caption">Ghost writ0r, </Typography>
                                    </Link>
                                    <Link href="https://creativecommons.org/licenses/by/4.0"
                                          sx={{
                                              textDecoration: "none",
                                              color: theme.palette.text.secondary,
                                              "&:link": {color: theme.palette.text.secondary},
                                              "&:hover": {color: theme.palette.primary.main}
                                          }}>
                                        <Typography variant="caption">CC BY 4.0, </Typography>
                                    </Link>
                                    <Typography variant="caption" sx={{color: theme.palette.text.secondary}}>via
                                        Wikimedia Commons</Typography>
                                </Box>
                                {t("tumAbout").split("\n").map((line, index) => (
                                    <Typography key={index} variant="body1" paragraph>{line}</Typography>
                                ))}
                            </Box>
                            <Stack direction={{xs: "column", md: "row"}} spacing={2}>
                                <Button variant="outlined"
                                        onClick={() => scrollToElement(publicationsRef.current as Element)}
                                        sx={{textTransform: "none"}}>
                                    <Typography variant="h5">{t("publications")}</Typography>
                                </Button>
                                <Button variant="contained"
                                        onClick={() => scrollToElement(coursesRef.current as Element)}
                                        sx={{textTransform: "none"}}>
                                    <Typography
                                        variant="h5">{t("studyCourses").charAt(0).toUpperCase() + t("studyCourses").slice(1)}</Typography>
                                </Button>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </PageContentBox>
            <Publications ref={publicationsRef}/>
            <StudyCourses ref={coursesRef} />
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{position: 'fixed', bottom: 16, right: 16}}
                icon={<SpeedDialIcon/>}
            >
                {speedDialActions.map((action, index) => (
                    <SpeedDialAction
                        key={index}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.onclick}
                    />
                ))}
            </SpeedDial>
        </>
    );
}