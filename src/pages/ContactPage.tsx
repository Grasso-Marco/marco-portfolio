import PageContentBox from "../components/PageContentBox";
import {Box, Button, FormLabel, Grid, Paper, Stack, TextField} from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

export default function ContactPage() {
    const {t} = useTranslation();

    const [formName, setFormName] = useState<string>("");
    const [formEMail, setFormEMail] = useState<string>("");
    const [formMessage, setFormMessage] = useState<string>("");

    return (
        <PageContentBox sx={{paddingTop: "4vh"}}>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-start"
            >
                <Grid item xs={10} md={8}>
                    <Paper elevation={2} sx={{padding: "2vh 2vw"}}>
                        <h2>{t("Contact")}</h2>
                        <form action="https://formspree.io/f/xpznpyqg" method="POST">
                            <Stack spacing={3}>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <TextField id="name" name="name" label="Please enter your name."
                                           value={formName} onChange={(event) => setFormName(event.target.value)}/>
                                <FormLabel htmlFor="email">E-mail address</FormLabel>
                                <TextField id="email" name="email" label="Please enter your e-mail address."
                                           value={formEMail}
                                           onChange={(event) => setFormEMail(event.target.value)}/>
                                <FormLabel htmlFor="message">Message</FormLabel>
                                <TextField id="message" name="message" label="Please enter your message."
                                           value={formMessage}
                                           onChange={(event) => setFormMessage(event.target.value)}
                                           multiline rows={5}/>
                                <Button type="submit" color="primary" variant="contained">Submit</Button>
                            </Stack>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
            <Box sx={{height: "4vh"}}/>
        </PageContentBox>
    );
}