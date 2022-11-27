import {BottomNavigation, BottomNavigationAction, Box, Grid, Modal} from "@mui/material";
import ProjectCard, {ProjectCardProps} from "../components/ProjectCard";
import {DateTime} from "luxon";
import {useTranslation} from "react-i18next";
import {PageContentBoxMinHeight} from "../components/PageContentBox";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {VideogameAsset as VideoGameIcon, Web as WebIcon} from "@mui/icons-material";

export default function ProjectsPage() {
    const {t, i18n} = useTranslation(["projects"]);
    const navigate = useNavigate();

    const [buttonNavValue, setButtonNavValue] = useState<number>(0);

    const [videoModal, setVideoModal] = React.useState<boolean>(false);
    const [currentVideo, setCurrentVideo] = React.useState<string>(process.env.PUBLIC_URL + "/videos/Destruction4Dummies.mp4");

    const gameProjectData: ProjectCardProps[] = [
        {
            title: "Rhythm Dungeon",
            image: "projects/RhythmDungeon.png",
            date: DateTime.local(2018, 7, 15).setLocale(i18n.language),
            content: t("RhythmDungeon"),
            technologyStack: ["Unity", "C#"],
            projectCardAction: () => {
                window.open("https://www.youtube.com/watch?v=m5GFUEb_Ots", '_blank');
            },
            gitHub: "https://github.com/MarcoTUM/RhythmDungeon",
            youtube: "https://www.youtube.com/watch?v=m5GFUEb_Ots"
        },
        {
            title: "Destruction 4 Dummies",
            image: "projects/D4D.png",
            date: DateTime.local(2020, 2, 9).setLocale(i18n.language),
            content: t("Destruction4Dummies"),
            technologyStack: ["Unity", "C#"],
            projectCardAction: () => {
                setCurrentVideo(process.env.PUBLIC_URL + "/videos/Destruction4Dummies.mp4");
                setVideoModal(true);
            },
            video: () => {
                setCurrentVideo(process.env.PUBLIC_URL + "/videos/Destruction4Dummies.mp4");
                setVideoModal(true);
            },
            gitHub: "https://github.com/MarcoTUM/Destruction4Dummies",
            pdf: {title: "Game design document", path: "Destruction4Dummies.pdf"},
            download: {title: "Download", path: "Destruction4Dummies.zip"}
        },
        {
            title: "Soaper Duck",
            image: "projects/SoaperDuck.png",
            date: DateTime.local(2021, 3, 9).setLocale(i18n.language),
            content: t("SoaperDuck"),
            technologyStack: ["Unity", "C#"],
            projectCardAction: () => {
                setCurrentVideo(process.env.PUBLIC_URL + "/videos/SoaperDuck.mp4");
                setVideoModal(true);
            },
            video: () => {
                setCurrentVideo(process.env.PUBLIC_URL + "/videos/SoaperDuck.mp4");
                setVideoModal(true);
            },
            pdf: {title: "Game design document", path: "SoaperDuck.pdf"},
            download: {title: "Download", path: "SoaperDuck.zip"}
        }
    ];

    const webProjectData: ProjectCardProps[] = [
        {
            title: t("ThisPortfolio"),
            image: "projects/MarcoPortfolioScreenshot.png",
            date: DateTime.local(2022, 9, 15).setLocale(i18n.language),
            content: t("MyWebsite"),
            technologyStack: ["HTML5", "SCSS", "Typescript", "React", "MaterialUI"],
            projectCardAction: () => {
                navigate("/");
            },
            gitHub: "https://github.com/Grasso-Marco/marco-portfolio.git"
        }
    ];

    const switchProjectData = (navValue: number) => {
        switch (navValue) {
            case 0:
                return gameProjectData;
            case 1:
                return webProjectData;
            default:
                return gameProjectData;
        }
    };

    const projectCards = (projectData: ProjectCardProps[]) => (
        <Box sx={{
            paddingTop: "2vh",
            paddingBottom: "2vh",
            display: {lg: "flex"},
            justifyContent: {lg: "center"},
            alignItems: {lg: "center"}
        }}>
            <Grid container
                  columns={{xs: 10, sm: 18, md: 18, lg: 18, xl: 18}}
                  direction="row"
                  columnSpacing={{xs: 2, md: 3}}
                  rowSpacing={{xs: 3, lg: 2}}
                  justifyContent="center"
                  alignItems="stretch"
            >
                {projectData.map((project, index) => (
                    <Grid key={index} item xs={8} sm={8} md={8} lg={4} xl={4}>
                        <ProjectCard
                            key={index}
                            title={project.title}
                            image={project.image}
                            date={project.date}
                            content={project.content}
                            technologyStack={project.technologyStack}
                            projectCardAction={project.projectCardAction}
                            video={project.video}
                            gitHub={project.gitHub}
                            youtube={project.youtube}
                            liveDemo={project.liveDemo}
                            pdf={project.pdf}
                            download={project.download}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );

    const gameWebSwitch =
        <>
            <BottomNavigation
                showLabels
                value={buttonNavValue}
                onChange={(event, newValue) => {
                    setButtonNavValue(newValue);
                }}
            >
                <BottomNavigationAction label={t("GameProjects")} icon={<VideoGameIcon/>}
                                        sx={{borderBottom: "1px solid"}}/>
                <BottomNavigationAction label={t("WebProjects")} icon={<WebIcon/>}
                                        sx={{borderBottom: "1px solid"}}/>
            </BottomNavigation>
            <Box sx={{
                display: {lg: "flex"},
                justifyContent: {lg: "center"},
                alignItems: {lg: "center"}
            }}>
                {t("freeTier")}
            </Box>
        </>;

    const videoBox =
        <Modal
            open={videoModal}
            onClose={() => setVideoModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
        >
            <Box sx={{
                width: "50%",
                height: {xs: "25vh", md: "50vh"},
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: "solid 2px white"
            }}>
                <video width="100%" height="100%" controls>
                    <source src={currentVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </Box>
        </Modal>;

    return (
        <>
            <PageContentBoxMinHeight>
                {gameWebSwitch}
                {projectCards(switchProjectData(buttonNavValue))}
                {videoBox}
            </PageContentBoxMinHeight>
        </>
    );
}