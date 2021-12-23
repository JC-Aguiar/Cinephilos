import {
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/react";
import Avatar from "./Avatar";
import "./Login.css";
import LoginModal from "./LoginModal";

function Login(props: any) {

    return (
        <>
            <Avatar picture={null} />
            <IonGrid className="menu-login">
                <IonRow className="ion-text-start">
                    <IonCol className="welcome">
                        <IonLabel>Bem vindo visitante</IonLabel>
                    </IonCol>
                    <IonCol>
                        <LoginModal />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );

}

export default Login;
