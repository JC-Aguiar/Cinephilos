import { IonCol, IonContent, IonGrid, IonImg, IonLabel, IonPage, IonRow, IonText } from "@ionic/react";
import React from "react";
import "./Intro.css";

const logo = "../resources/logo cinephile title.png";

const Intro = (props: any) => {
    setTimeout(() => {
        console.log("redirect");
    }, 5000);
    return (
        <IonPage>
            <IonContent id="logo" />
            <IonContent id="intro-bg" />
        </IonPage>
    );
}

export default Intro;
