import {
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/react";
import Avatar from "./Avatar";
import LoginModal from "./LoginModal";
import { UsuarioInterface } from "./UsuarioModel";

const Login = (props: any) => {

    const callBack = props.callBack;

    async function loginCallBack(novoUser: UsuarioInterface) {
        // console.log(`[Login] user: ${novoUser}`);
        callBack(novoUser);
    }

    return (
        <>
        <IonLabel className="menu-login">
                {/* <IonCol className="welcome">
                    <IonLabel>Bem Vindo</IonLabel>
                </IonCol> */}
            <LoginModal dataCallBack={loginCallBack} />
        </IonLabel>
        </>
    );

}

export default Login;
