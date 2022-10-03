import {Copyright as CopyrightIcon} from "@mui/icons-material";
import {Alert, AlertTitle, Box} from "@mui/material";
import {useTranslation} from "react-i18next";
import PageContentBox from "../../components/PageContentBox";
import PrivacyPolicyEnglish from "./PrivacyPolicyEnglish";
import PrivacyPolicyGerman from "./PrivacyPolicyGerman";

export default function LegalDisclosurePage() {
    const {t, i18n} = useTranslation();

    const eMail = "Marco-Website@magenta.de";
    const name = "Marco Grasso";
    const address = <>c/o Grosch Postflex #Vertrags-ID<br/>Emsdettener Str. 10</>;
    const www = "https://www.marcograsso.eu";

    return (
        <PageContentBox sx={{padding: "2vh 2vw"}}>
            <h1>{t("LegalDisclosure")}</h1>
            <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                {t("legalDisclosureInfo")}
            </Alert>
            <br/>
            <Alert severity="warning" icon={<CopyrightIcon/>}>
                <AlertTitle>Copyright {new Date().getFullYear()} Marco Grasso</AlertTitle>
                {t("copyright")}
            </Alert>
            <br/>
            <h2>{t("5tmg")}</h2>
            <p>{name}<br/>{address}</p>
            <h2>{t("Contact")}</h2>
            <p>E-Mail: {eMail}</p>
            <p>{t("source")}: <a
                href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
            </p>
            <Box>{i18n.language === "en" ?
                <PrivacyPolicyEnglish eMail={eMail} www={www}/> :
                <PrivacyPolicyGerman eMail={eMail} name={name} address={address}/>}</Box>
        </PageContentBox>
    );
}