import {
    Button, Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    Stack,
    Typography
} from "@mui/material";
import {ReactComponent as ReactIcon} from "../icons/ReactIcon.svg";
import {ReactComponent as ReduxIcon} from "../icons/ReduxIcon.svg";
import {ReactComponent as CsharpIcon} from "../icons/CsharpIcon.svg";
import {ReactComponent as TypescriptIcon} from "../icons/TypescriptIcon.svg";
import {ReactComponent as SpringIcon} from "../icons/SpringIcon.svg";
import {ReactComponent as MongoDbIcon} from "../icons/MongoDbIcon.svg";
import {ReactComponent as SassIcon} from "../icons/SassIcon.svg";
import {ReactComponent as BsUnityIcon} from "../icons/BsUnityIcon.svg";
import {ReactComponent as HTML5Icon} from "../icons/HTML5Icon.svg";
import {ReactComponent as CSS3Icon} from "../icons/CSS3Icon.svg";
import {ReactComponent as JavascriptIcon} from "../icons/JavascriptIcon.svg";
import {ReactComponent as MaterialUiIcon} from "../icons/MaterialUiIcon.svg";
import {ReactComponent as AndroidStudioIcon} from "../icons/AndroidStudioIcon.svg";
import {ReactComponent as JavaIcon} from "../icons/JavaIcon.svg";
import {ReactComponent as NodeJsIcon} from "../icons/NodeJsIcon.svg";
import {ReactComponent as ExpressIcon} from "../icons/ExpressIcon.svg";
import {ReactComponent as PythonIcon} from "../icons/PythonIcon.svg";
import {ReactComponent as NextIcon} from "../icons/NextJsIcon.svg";
import {DateTime} from "luxon";
import {ReactElement} from "react";
import {
    GitHub as GitHubIcon,
    Videocam as VideoIcon,
    Description as PdfIcon,
    Download as DownloadIcon
} from "@mui/icons-material";

export interface PublicationProps {
    image: string,
    title: string,
    date: DateTime,
    content: string,
    technologyStack: string[],
    projectCardAction: Function,
    gitHub?: string | { frontend: string, backend: string }
    video?: Function,
    pdf?: {title: string, path: string},
    presentation?: {title: string, path: string},
    download?: {title: string, path: string}
}

Publication.defaultProps = {
    image: "",
    title: "",
    date: DateTime.now(),
    content: "",
    technologyTack: [],
    projectCardAction: () => {
    }
}

interface Technology {
    icon: ReactElement,
    title: string,
    link?: string
}

const technologies: Technology[] = [
    {icon: <BsUnityIcon/>, title: "Unity", link: "https://unity.com"},
    {icon: <CsharpIcon/>, title: "C#"},
    {icon: <HTML5Icon/>, title: "HTML5"},
    {icon: <CSS3Icon/>, title: "CSS3"},
    {icon: <SassIcon/>, title: "SCSS", link: "https://sass-lang.com"},
    {icon: <JavascriptIcon/>, title: "Javascript"},
    {icon: <TypescriptIcon/>, title: "Typescript", link: "https://www.typescriptlang.org"},
    {icon: <ReactIcon/>, title: "React", link: "https://reactjs.org"},
    {icon: <ReduxIcon/>, title: "Redux", link: "https://redux.js.org"},
    {icon: <MaterialUiIcon/>, title: "MaterialUI", link: "https://mui.com"},
    {icon: <SpringIcon/>, title: "Spring", link: "https://spring.io"},
    {icon: <SpringIcon/>, title: "Spring Boot", link: "https://spring.io"},
    {icon: <MongoDbIcon/>, title: "MongoDB", link: "https://www.mongodb.com/"},
    {icon: <MongoDbIcon/>, title: "MongoDB Atlas", link: "https://www.mongodb.com/"},
    {icon: <AndroidStudioIcon/>, title: "Android Studio", link: "https://developer.android.com/"},
    {icon: <JavaIcon/>, title: "Java", link: "https://openjdk.org/"},
    {icon: <NodeJsIcon/>, title: "NodeJS", link: "https://nodejs.org"},
    {icon: <ExpressIcon/>, title: "Express", link: "https://expressjs.com"},
    {icon: <PythonIcon/>, title: "Python", link: "https://www.python.org/"},
    {icon: <NextIcon/>, title: "NextJS", link: "https://nextjs.org/"}
];

export default function Publication(props: PublicationProps) {
    return (
        <Card elevation={10}
              sx={{
                  height: "100%",
                  transition: "0.5s",
                  "&:hover": {
                      transform: "scale(1.02)"
                  }
              }}>
            <CardActionArea onClick={() => props.projectCardAction()}>
                <CardMedia
                    component="img"
                    alt={props.title}
                    height="200px"
                    image={process.env.PUBLIC_URL + "/images/" + props.image}
                />
                <CardHeader title={props.title} subheader={props.date.toLocal().toLocaleString(DateTime.DATE_FULL)}/>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardContent>
                {
                    technologies
                        .filter((tech) => props.technologyStack.includes(tech.title))
                        .map((tech, index) => (
                            tech.link === undefined ?
                                <Chip key={index} icon={tech.icon} label={tech.title} variant="outlined"
                                      sx={{padding: 1, marginLeft: "1px", marginRight: "1px"}}/>
                                :
                                <Chip key={index} icon={tech.icon} label={tech.title} variant="outlined"
                                      sx={{padding: 1, margin: "3px"}}
                                      onClick={(event) => {
                                          event.preventDefault();
                                          window.open(tech.link as string, "_blank");
                                      }}/>
                        ))
                }
            </CardContent>
            <CardActions>
                <Stack direction="column"
                       justifyContent="flex-start"
                       alignItems="flex-start"
                       spacing={1}>
                    {props.gitHub !== undefined && typeof props.gitHub === "string" ?
                        <Button size="large" startIcon={<GitHubIcon/>}
                                onClick={() => window.open(props.gitHub as string, '_blank')}>Open
                            Source</Button> : <></>}
                    {props.gitHub !== undefined &&
                    typeof props.gitHub === "object" &&
                    props.gitHub.frontend !== undefined &&
                    props.gitHub.backend !== undefined ?
                        <>
                            <Button size="large" startIcon={<GitHubIcon/>}
                                    onClick={() => window.open((props.gitHub as { frontend: string, backend: string }).frontend, '_blank')}>Frontend</Button>
                            <Button size="large" startIcon={<GitHubIcon/>}
                                    onClick={() => window.open((props.gitHub as { frontend: string, backend: string }).backend, '_blank')}>Backend</Button>
                        </>
                        : <></>
                    }
                    {props.video !== undefined ?
                        <Button size="large" startIcon={<VideoIcon/>}
                                onClick={() => {if (props.video !== undefined) props.video()}}>Video</Button> : <></>}
                    {props.pdf !== undefined ?
                        <Button size="large" startIcon={<PdfIcon/>}
                                onClick={() => window.open(process.env.PUBLIC_URL + "/pdf/" + props.pdf?.path, '_blank')}>{props.pdf?.title}</Button> : <></>}
                    {props.presentation !== undefined ?
                        <Button size="large" startIcon={<PdfIcon/>}
                                onClick={() => window.open(process.env.PUBLIC_URL + "/pdf/" + props.presentation?.path, '_blank')}>{props.presentation?.title}</Button> : <></>}
                    {props.download !== undefined ?
                        <Button size="large" startIcon={<DownloadIcon/>}
                                onClick={() => window.open(process.env.PUBLIC_URL + "/games/" + props.download?.path, '_blank')}>{props.download?.title}</Button> : <></>}
                </Stack>
            </CardActions>
        </Card>
    );
}