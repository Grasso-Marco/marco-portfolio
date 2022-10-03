import {Box, Grid, Modal} from "@mui/material";
import {DateTime} from "luxon";
import React from "react";
import {useTranslation} from "react-i18next";
import Publication, {PublicationProps} from "../../components/Publication";

const Publications = React.forwardRef((_, thesisRef) => {
    const {t, i18n} = useTranslation(["projects"]);

    const [videoModal, setVideoModal] = React.useState<boolean>(false);
    const [currentVideo, setCurrentVideo] = React.useState<string>(process.env.PUBLIC_URL + "/videos/MasterThesis.mp4");

    // Group project data
    const publicationsData: PublicationProps[] = [
        {
            title: t("BachelorThesis"),
            image: "projects/BachelorThesis.png",
            date: DateTime.local(2019, 3, 13).setLocale(i18n.language),
            content: t("BachelorThesisContent"),
            technologyStack: ["Unity", "C#"],
            projectCardAction: () => {
                setCurrentVideo(process.env.PUBLIC_URL + "/videos/BachelorThesis.mp4");
                setVideoModal(true);
            },
            video: () => {
                setCurrentVideo(process.env.PUBLIC_URL + "/videos/BachelorThesis.mp4");
                setVideoModal(true);
            },
            pdf: {title: t("BachelorThesis"), path: "BachelorThesisMarcoGrasso.pdf"},
            presentation: {title: t("BachelorPresentation"), path: "BachelorThesisPresentationMarcoGrasso.pdf"}
        },
        {
            title: t("MasterThesis"),
            image: "projects/MasterThesis.png",
            date: DateTime.local(2022, 5, 14).setLocale(i18n.language),
            content: t("MasterThesisContent"),
            technologyStack: ["Unity", "C#"],
            projectCardAction: () => {
                setCurrentVideo(process.env.PUBLIC_URL + "/videos/MasterThesis.mp4");
                setVideoModal(true);
            },
            video: () => {
                setCurrentVideo(process.env.PUBLIC_URL + "/videos/MasterGameplay.mp4");
                setVideoModal(true);
            },
            pdf: {title: t("MasterThesis"), path: "MasterThesisMarcoGrasso.pdf"},
            presentation: {title: t("MasterPresentation"), path: "MasterThesisPresentationMarcoGrasso.pdf"},
            download: {title: "Download", path: "DragonTale2022.zip"}
        },
        {
            title: "Mutation Testing",
            image: "projects/MutationTesting.png",
            date: DateTime.local(2021, 7, 26).setLocale(i18n.language),
            content: t("MutationTesting"),
            technologyStack: ["Java", "C#", "Python"],
            projectCardAction: () => {
                window.open(process.env.PUBLIC_URL + "/pdf/MutationTestingSeminarPaperMarcoGrasso.pdf", '_blank')
            },
            pdf: {title: t("SeminarPaper"), path: "MutationTestingSeminarPaperMarcoGrasso.pdf"},
            presentation: {title: t("SeminarPresentation"), path: "MutationTestingPresentationMarcoGrasso.pdf"}
        },
        {
            title: t("PythonForJavaDevelopers"),
            image: "projects/PythonForJavaDevelopers.png",
            date: DateTime.local(2021, 4, 14).setLocale(i18n.language),
            content: t("PythonForJavaDevelopersContent"),
            technologyStack: ["Java", "Python"],
            projectCardAction: () => {
                window.open(process.env.PUBLIC_URL + "/pdf/PythonForJavaDevelopersMarcoGrasso.pdf", '_blank')
            },
            pdf: {title: t("LectureSlides"), path: "PythonForJavaDevelopersMarcoGrasso.pdf"}
        },
        {
            title: t("PGdPSlides"),
            image: "projects/PGdP.png",
            date: DateTime.local(2022, 1, 29).setLocale(i18n.language),
            content: t("PGdPContent"),
            technologyStack: ["Java"],
            projectCardAction: () => {
                window.open(process.env.PUBLIC_URL + "/pdf/PGdP_All_Slides_by_Marco_Grasso_WiSe_2021_2022.pdf", '_blank')
            },
            pdf: {title: t("LectureSlides"), path: "PGdP_All_Slides_by_Marco_Grasso_WiSe_2021_2022.pdf"}
        },
        {
            title: t("SocialGamingTutorial"),
            image: "projects/SocialGamingTutorial.png",
            date: DateTime.local(2022, 5, 25).setLocale(i18n.language),
            content: t("SocialGamingTutorialContent"),
            technologyStack: ["Android Studio", "Java", "Spring Boot", "MongoDB"],
            projectCardAction: () => {
                setCurrentVideo(process.env.PUBLIC_URL + "/videos/SocialGaming2022.mp4");
                setVideoModal(true);
            },
            pdf: {title: t("LectureSlides"), path: "SocialGamingTutorial2022.pdf"},
            gitHub: {frontend: "https://github.com/MarcoTUM/SocialGaming2022_Frontend", backend: "https://github.com/MarcoTUM/SocialGaming2022_Backend"}
        }
    ];

    return (
        <Box ref={thesisRef} sx={{
            minHeight: "100vh",
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
                {publicationsData.map((project, index) => (
                    <Grid key={index} item xs={8} sm={16} md={16} lg={5} xl={5}>
                        <Publication
                            key={index}
                            title={project.title}
                            image={project.image}
                            date={project.date}
                            content={project.content}
                            technologyStack={project.technologyStack}
                            projectCardAction={project.projectCardAction}
                            video={project.video}
                            gitHub={project.gitHub}
                            pdf={project.pdf}
                            presentation={project.presentation}
                            download={project.download}
                        />
                    </Grid>
                ))}
            </Grid>
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
            </Modal>
        </Box>
    )
});

export default Publications;