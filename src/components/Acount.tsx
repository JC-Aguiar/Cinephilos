import { IonItem } from "@ionic/react";
import React from "react";
import Login from "./Login";
import User from "./User";
import { UsuarioInterface } from "./UsuarioModel";


function userAuth(user: UsuarioInterface) {
    if (user === null ||user.email === null || user.email === "") {
        return <Login />;
    }
    return <User userLogin={user} />;
}

function Acount(props: any) {
    return(
        <IonItem color="#" lines="none">
            {userAuth(props.userLogin)}
        </IonItem>
    );
}

export default Acount;
