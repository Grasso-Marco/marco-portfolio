import {Box, Paper, SvgIcon, Typography} from "@mui/material";
import React, {ElementType, ReactElement} from "react";
import styles from "./IconFlipCard.module.scss"

interface IconFlipCardProps {
    title: string,
    icon: ElementType,
    backContent: ReactElement,
    height: string
    iconSize: string
}

export default function IconFlipCard(props: IconFlipCardProps) {
    return (
        <Box className={styles.iconFlipCard} sx={{height: props.height}}>
            <Paper className={styles.iconFlipCardInner}>
                <Box className={styles.iconFlipCardFront}>
                    <SvgIcon component={props.icon} inheritViewBox
                             sx={{
                                 height: props.iconSize,
                                 width: props.iconSize,
                                 position: "relative",
                                 top: "40%",
                                 left: "0%",
                                 transform: "translate(0%, -50%)"
                             }}/>
                    <Typography variant="h4" sx={{
                        position: "relative",
                        top: "20%",
                        left: "0%",
                        transform: "translate(0%, -50%)"
                    }}>{props.title}</Typography>
                </Box>
                <Box className={styles.iconFlipCardBack}>
                    {props.backContent}
                </Box>
            </Paper>
        </Box>
    );
}