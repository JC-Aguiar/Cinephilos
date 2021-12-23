import { IonItem } from "@ionic/react";
import React from "react";
import { UserInterface } from "../App";
import Login from "./Login";
import User from "./User";


function userAuth(user: UserInterface) {
    if(user.email === null || user.email === "") {
        return <Login />
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
