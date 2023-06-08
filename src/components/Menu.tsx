import { IonButton, IonButtons, IonCol, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonRow, IonSearchbar, IonTitle, IonToolbar, } from "@ionic/react";
import { useLocation } from "react-router-dom";
import { filmOutline, filmSharp, carSportOutline, carSportSharp, roseOutline, roseSharp, heartHalfOutline, heartHalfSharp, bookOutline, bookSharp, rocketOutline, rocketSharp, personOutline, person, } from "ionicons/icons";
import Account from "./Acount";

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}


const appPages: AppPage[] = [
    { title: "Novidades", url: "/news", iosIcon: filmOutline, mdIcon: filmSharp },
    { title: "Perfumes", url: "/perfumes", iosIcon: carSportOutline, mdIcon: carSportSharp },
    { title: "Notas", url: "/notas", iosIcon: roseOutline, mdIcon: roseSharp },
    { title: "Forum", url: "/forum", iosIcon: bookOutline, mdIcon: bookSharp },
    { title: "Sobre", url: "/sobre", iosIcon: rocketOutline, mdIcon: rocketSharp },
];


const Menu = (props: any) => {
    const location = useLocation();
    // const loadMovie = () => endpoint(28);

    function pageSelection(title: string) {
        const callBack = props.callBack;
        callBack(title);
    }

    return (
        <IonHeader>
            <div className="cut-lines"></div>
            <IonTitle id="titulo">Flores que Perfumam</IonTitle>
            <IonToolbar color="tertiary">
                <div id="menu-principal">
                    <IonSearchbar animated placeholder="Pesquisar" spellCheck enterkeyhint="enter" class="ion-hide-sm-down"/>   
                    <IonGrid class="ion-hide-sm-down">
                        <IonRow className="ion-justify-content-center">
                            <IonButtons>
                                {appPages.map((appPage, index) => {
                                    return (
                                        <IonCol>
                                            <IonButton
                                                size="small"
                                                fill="clear"
                                                className={location.pathname === appPage.url ? "selected" : ""}
                                                routerLink={appPage.url}
                                                routerDirection="none"
                                                onClick={() => pageSelection(appPage.title)}
                                                expand="block"
                                            >
                                                <IonIcon
                                                    slot="start"
                                                    ios={appPage.iosIcon}
                                                    md={appPage.mdIcon}
                                                    color="dark"
                                                    className="ion-padding-start"
                                                />
                                                <IonLabel>{appPage.title}</IonLabel>
                                            </IonButton>
                                        </IonCol>
                                    );
                                })}
                                <IonCol>
                                    <IonButton expand="block">
                                        <IonIcon slot="start" icon={person} color="dark" />
                                        <IonLabel>Perfil</IonLabel>
                                        {/* <Account /> */}
                                    </IonButton>
                                </IonCol>
                            </IonButtons>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonToolbar>
        </IonHeader>
    );
};

export default Menu;
