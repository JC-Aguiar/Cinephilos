import { IonContent, IonIcon, IonItem, IonLabel, IonMenu, IonMenuToggle,} from "@ionic/react";
import { useLocation } from "react-router-dom";
import { filmOutline, filmSharp, carSportOutline, carSportSharp, roseOutline, roseSharp, heartHalfOutline, heartHalfSharp, happyOutline, happySharp, bookOutline, bookSharp, rocketOutline, rocketSharp, timeOutline, timeSharp,} from "ionicons/icons";
import "./Menu.css";
import { endpoint } from "../TMDB";
import Acount from "./Acount";

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}


const appPages: AppPage[] = [
    { title: "Novidades",   url: "/news",       iosIcon: filmOutline,       mdIcon: filmSharp       },
    { title: "Perfumes",    url: "/perfumes",   iosIcon: carSportOutline,   mdIcon: carSportSharp   },
    { title: "Notas",       url: "/notas",      iosIcon: roseOutline,       mdIcon: roseSharp       },
    { title: "Perfumistas", url: "/perfumistas",iosIcon: heartHalfOutline,  mdIcon: heartHalfSharp  },
    { title: "Forum",       url: "/forum",      iosIcon: bookOutline,       mdIcon: bookSharp       },
    { title: "Sobre",       url: "/sobre",      iosIcon: rocketOutline,     mdIcon: rocketSharp     },
];


const Menu = (props: any) => {
    const location = useLocation();
    // const loadMovie = () => endpoint(28);

    function pageSelection(title: string) {
        const callBack = props.callBack;
        callBack(title);
    }

    return (
        <IonMenu contentId="main" type="overlay" id="menu">
            <IonContent>
                <Acount />
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
                                onClick={() => pageSelection(appPage.title)}
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
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
