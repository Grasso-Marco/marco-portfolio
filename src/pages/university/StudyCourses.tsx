import {Box, Grid, List, ListItem, ListItemText, Paper, Typography, useTheme} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";

// Range function
type rangeFunction = (start: number, stop: number, step: number) => number[];
const range: rangeFunction = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, index) => start + (index * step));

const StudyCourses: Function = React.forwardRef((_, coursesRef) => {
 const {t} = useTranslation();
 const theme = useTheme();

 return (
     <Box ref={coursesRef} sx={{
      height: "100vh",
      paddingTop: "2vh",
      backgroundColor: theme.palette.mode === "dark" ? "white" : "rgb(25,25,50)"
     }}>
      <Grid container
            columns={20}
            columnSpacing={2}
            justifyContent="center"
            alignItems="flex-start"
      >
       <Grid item xs={18} md={9}>
        <Paper elevation={2} sx={{
         height: {xs: "calc(50vh - 4vh)", md: "calc(100vh - 4vh)"},
         marginBottom: {xs: "1vh", md: 0},
         overflowY: "scroll"
        }}>
         <Typography variant="h4" color="primary"
                     sx={{paddingLeft: "10px"}}>Master {t("studyCourses")}</Typography>
         <List>
          {range(1, 5, 1).map(n => (
              t(n.toString() + "master").split('\n').map((course, index) => (
                  <ListItem key={index}>
                   <ListItemText primary={course} secondary={n.toString() + ".Semester"}/>
                  </ListItem>
              ))
          ))}
         </List>
        </Paper>
       </Grid>
       <Grid item xs={18} md={9}>
        <Paper elevation={2}
               sx={{height: {xs: "calc(50vh - 4vh)", md: "calc(100vh - 4vh)"}, overflowY: "scroll"}}>
         <Typography variant="h4" color="primary"
                     sx={{paddingLeft: "10px"}}>Bachelor {t("studyCourses")}</Typography>
         <List>
          {range(1, 8, 1).map(n => (
              t(n.toString() + "bachelor").split('\n').map((course, index) => (
                  <ListItem key={index}>
                   <ListItemText primary={course} secondary={n.toString() + ".Semester"}/>
                  </ListItem>
              ))
          ))}
         </List>
        </Paper>
       </Grid>
      </Grid>
     </Box>
 );
});

export default StudyCourses;