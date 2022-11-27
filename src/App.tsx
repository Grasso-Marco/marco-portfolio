import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import LegalDisclosurePage from "./pages/legalDisclosure/LegalDisclosurePage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import NavigationBar from "./components/NavigationBar";
import {ReactElement} from "react";
import i18next, {Resource} from "i18next";
import {initReactI18next} from 'react-i18next';
import UniversityPage from "./pages/university/UniversityPage";

// Translation files
import english from './languages/English.json';
import german from './languages/German.json';
import englishProjects from './languages/EnglishProjects.json';
import germanProjects from './languages/GermanProjects.json';

export interface Page {
    url: string,
    title?: string,
    component: ReactElement
}

export const pages: Page[] = [
    {url: "/", title: "Main", component: <MainPage/>},
    {url: "/university", title: "University", component: <UniversityPage/>},
    {url: "/skills", title: "Skills", component: <SkillsPage/>},
    {url: "/projects", title: "Projects", component: <ProjectsPage/>},
    {url: "/legal", component: <LegalDisclosurePage/>},
    {url: "/contact", component: <ContactPage/>},
    {url: "*", component: <ErrorPage/>}
];

export interface Language {
    code: string,
    title: string
}

export const languages: Language[] = [
    {code: "en", title: "English"},
    {code: "de", title: "German"}
];

const i18nextResources: Resource = {
    en: {
        translation: english,
        projects: englishProjects
    },
    de: {
        translation: german,
        projects: germanProjects
    }
};

i18next
    .use(initReactI18next)
    .init({
        resources: i18nextResources,
        defaultNS: "translation",
        lng: "en",
        fallbackLng: "en",
        interpolation: {escapeValue: false}
    });

export default function App() {
    return (
        <>
            <NavigationBar/>
            <Routes>
                {pages.map((page, index) => (
                    <Route key={index} path={page.url} element={page.component}/>
                ))}
            </Routes>
        </>
    );
}
