import { IonItem } from "@ionic/react";
import React, { useState } from "react";
import Login from "./Login";
import User from "./User";
import UsuarioModel, { UsuarioInterface } from "./UsuarioModel";


function Acount(props: any) {
    const [user, setUser] = useState<UsuarioInterface>();
    async function loginCallBack(novoUser: UsuarioInterface) {
        console.log(`[Acount] user: ${novoUser}`);
        setUser(novoUser);
        console.log(`[Final] user: ${user}`);
    }
    function userAuth() {
        if (user == null || user.email == null || user.email === "") {
            return <Login userLogin={user} callBack={loginCallBack} />;
        }
        return <User userLogin={user} />;
    }
    return (
        <IonItem color="#" lines="none">
            {userAuth()}
        </IonItem>
    );
}

export default Acount;
