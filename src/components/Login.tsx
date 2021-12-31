import {
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/react";
import Avatar from "./Avatar";
import "./Login.css";
import LoginModal from "./LoginModal";
import { UsuarioInterface } from "./UsuarioModel";

function Login(props: any) {
    const callBack = props.callBack;
    async function loginCallBack(novoUser: UsuarioInterface, event) {
        console.log(`[Login] user: ${novoUser}`);
        callBack(novoUser);
    }
    return (
        <>
            <IonGrid className="menu-login">
                <IonRow className="ion-text-center">
                    <IonCol className="welcome">
                        <IonLabel>Bem vindo visitante</IonLabel>
                    </IonCol>
                    <IonCol>
                        <LoginModal dataCallBack={loginCallBack} />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );

}

export default Login;
