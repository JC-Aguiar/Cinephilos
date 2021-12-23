import { IonCol, IonGrid, IonLabel, IonListHeader, IonNote, IonRow } from "@ionic/react";
import React from "react";
import { UserInterface } from "../App";
import Avatar from "./Avatar";

function User(props: any) {
    const user: UserInterface = {
        email: props.userLogin.email,
        name: props.userLogin.name,
        picture: props.userLogin.picture,
        profile: props.userLogin.profile,
    };
    return (
        <>
            <Avatar picture={user.picture} />
            <IonGrid>
                <IonRow className="ion-padding-start">
                    <IonCol>
                        <IonLabel>
                            <IonListHeader className="user-name">{user.name}</IonListHeader>
                            <IonNote>{user.email}</IonNote>
                        </IonLabel>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
}

export default User;


