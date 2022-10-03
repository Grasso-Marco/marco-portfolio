import PageContentBox from "../components/PageContentBox";
import {Box, Grid} from "@mui/material";
import React from "react";
import IconFlipCard from "../components/IconFlipCard";

import {ReactComponent as ReactIcon} from "../icons/ReactIcon.svg";
import {ReactComponent as CsharpIcon} from "../icons/CsharpIcon.svg";
import {ReactComponent as TypescriptIcon} from "../icons/TypescriptIcon.svg";
import {ReactComponent as SassIcon} from "../icons/SassIcon.svg";
import {ReactComponent as UnityIcon} from "../icons/BsUnityIcon.svg";
import {ReactComponent as HTML5Icon} from "../icons/HTML5Icon.svg";
import {ReactComponent as CSS3Icon} from "../icons/CSS3Icon.svg";
import {ReactComponent as JavascriptIcon} from "../icons/JavascriptIcon.svg";
import {ReactComponent as MaterialUiIcon} from "../icons/MaterialUiIcon.svg";
import {ReactComponent as GitIcon} from "../icons/GitIcon.svg";
import {ReactComponent as i18nextIcon} from "../icons/i18nextIcon.svg";
import {ReactComponent as JavaIcon} from "../icons/JavaIcon.svg";

const skills = [
    {
        icon: UnityIcon,
        backContent: (
            <>
                <h1>Unity</h1>
                <p>1.Semester Bachelor</p>
                <p>2015</p>
            </>
        ),
        title: "Unity"
    },
    {
        icon: CsharpIcon,
        backContent: (
            <>
                <h1>C#</h1>
                <p>1.Semester Bachelor</p>
                <p>2015</p>
            </>
        ),
        title: "C#"
    },
    {
        icon: HTML5Icon,
        backContent: (
            <>
                <h1>HTML</h1>
                <p>5.Semester Bachelor</p>
                <p>2017</p>
            </>
        ),
        title: "HTML5"
    },
    {
        icon: CSS3Icon,
        backContent: (
            <>
                <h1>CSS</h1>
                <p>5.Semester Bachelor</p>
                <p>2017</p>
            </>
        ),
        title: "CSS3"
    },
    {
        icon: SassIcon,
        backContent: (
            <>
                <h1>SCSS</h1>
                <p>Self studied</p>
                <p>2022</p>
            </>
        ),
        title: "SCSS"
    },
    {
        icon: JavascriptIcon,
        backContent: (
            <>
                <h1>Javascript</h1>
                <p>5.Semester Bachelor</p>
                <p>2017</p>
            </>
        ),
        title: "Javascript"
    },
    {
        icon: TypescriptIcon,
        backContent: (
            <>
                <h1>Typescript</h1>
                <p>2.Semester Master</p>
                <p>2020</p>
            </>
        ),
        title: "Typescript"
    },
    {
        icon: ReactIcon,
        backContent: (
            <>
                <h1>React</h1>
                <p>2.Semester Master</p>
                <p>2020</p>
            </>
        ),
        title: "React"
    },
    {
        icon: MaterialUiIcon,
        backContent: (
            <>
                <h1>Material UI</h1>
                <p>Self studied</p>
                <p>2022</p>
            </>
        ),
        title: "Material UI"
    },
    {
        icon: i18nextIcon,
        backContent: (
            <>
                <h1>i18next</h1>
                <p>Self studied</p>
                <p>2022</p>
            </>
        ),
        title: "i18next"
    },
    {
        icon: JavaIcon,
        backContent: (
            <>
                <h1>Java</h1>
                <p>1.Semester Bachelor</p>
                <p>2015</p>
            </>
        ),
        title: "Java"
    },
    {
        icon: GitIcon,
        backContent: (
            <>
                <h1>Git / Sourcetree</h1>
                <p>Self studied</p>
                <p>2015</p>
            </>
        ),
        title: "Git / Sourcetree"
    }
];

export default function SkillsPage() {
    return (
        <PageContentBox sx={{marginTop: "2vh"}}>
            <Grid container
                  columns={18}
                  columnSpacing={2}
                  rowSpacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-start"
            >
                {skills.map((skill, index) => (
                    <Grid item key={index} xs={16} sm={8} md={5} lg={4}>
                        <IconFlipCard icon={skill.icon} backContent={skill.backContent} title={skill.title}
                                      height="400px" iconSize="250px"/>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{height: "2vh"}}/>
        </PageContentBox>
    );
}