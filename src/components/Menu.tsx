import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonAccordionGroup,
    IonAccordion,
    IonButton,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
    filmOutline,
    filmSharp,
    carSportOutline,
    carSportSharp,
    roseOutline,
    roseSharp,
    heartHalfOutline,
    heartHalfSharp,
    happyOutline,
    happySharp,
    bookOutline,
    bookSharp,
    rocketOutline,
    rocketSharp,
    timeOutline,
    timeSharp,
    personCircleOutline,
    personCircleSharp,
} from "ionicons/icons";
import "./Menu.css";
import React, { useRef, useState } from "react";
import { endpoint } from "../TMDB";
import Acount from "./Acount";

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

interface MovieSumary {
    id: number;
    name: string;
    icon: string;
    genre: number[];
}

const appPages: AppPage[] = [
    {
        title: "Navegação Livre",
        url: "/movies/all",
        iosIcon: filmOutline,
        mdIcon: filmSharp,
    },
    {
        title: "Ação",
        url: "/movies/action",
        iosIcon: carSportOutline,
        mdIcon: carSportSharp,
    },
    {
        title: "Romance",
        url: "/movies/romance",
        iosIcon: roseOutline,
        mdIcon: roseSharp,
    },
    {
        title: "Drama",
        url: "/movies/drama",
        iosIcon: heartHalfOutline,
        mdIcon: heartHalfSharp,
    },
    {
        title: "Comédia",
        url: "/movies/comedy",
        iosIcon: happyOutline,
        mdIcon: happySharp,
    },
    {
        title: "Documentário",
        url: "/movies/documentary",
        iosIcon: bookOutline,
        mdIcon: bookSharp,
    },
    {
        title: "Fantasia",
        url: "/movies/fantasy",
        iosIcon: rocketOutline,
        mdIcon: rocketSharp,
    },
];

const userRecents: MovieSumary[] = [
    {
        id: 550,
        name: "Fight Club",
        icon: "Fight Club",
        genre: [28],
    }
];

function Menu(props: any) {

    const location = useLocation();

    const loadMovie = () => endpoint(28);

    return (
        <IonMenu contentId="main" type="overlay" id="menu">
            <IonContent>
                <Acount userLogin={props.userLogin} />
                {appPages.map((appPage, index) => {
                    return (
                        <IonMenuToggle
                            key={index}
                            autoHide={false}
                            className="menu-panel"
                        >
                            <IonItem
                                className={
                                    location.pathname === appPage.url
                                        ? "selected"
                                        : ""
                                }
                                routerLink={appPage.url}
                                routerDirection="none"
                                lines="none"
                                detail={false}
                            >
                                <IonIcon
                                    slot="start"
                                    ios={appPage.iosIcon}
                                    md={appPage.mdIcon}
                                    color="#"
                                    className="ion-padding-start"
                                />
                                <IonLabel>{appPage.title}</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    );
                })}
                <IonAccordionGroup>
                    <IonAccordion value="recents" className="menu-panel" toggleIcon="none">
                        <IonItem slot="header">
                            <IonIcon
                                slot="start"
                                ios={timeSharp}
                                md={timeOutline}
                                color="#"
                                className="ion-padding-start"
                            />
                            <IonLabel>Recentes</IonLabel>
                        </IonItem>
                        <IonList slot="content" lines="none">
                            {userRecents.map((movieSumary, index) => {
                                return (
                                    <IonItem key={index}>
                                        <IonButton fill="clear" color="warning" className="recent-item">
                                            {movieSumary.name}
                                        </IonButton>
                                    </IonItem>
                                );
                            })}
                        </IonList>
                    </IonAccordion>
                </IonAccordionGroup>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
