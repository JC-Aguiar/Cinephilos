import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonRow } from "@ionic/react";
import React, { useState } from "react";
import "./LoginModal.css";

function LoginModal(props: any) {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <IonGrid>
                <IonRow className="justify-content-center">
                    <IonCol>
                        <IonButton
                            className="session-buttons"
                            fill="clear"
                            color="secondary"
                            onClick={() => setShowModal(true)}
                        >
                            Login
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton
                            className="session-buttons"
                            fill="clear"
                            color="secondary"
                        >
                            Se Cadastre
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonModal
                id="modal-login"
                isOpen={showModal}
                onDidDismiss={() => setShowModal(false)}
                color="#"
            >
                <IonCard className="card-login">
                    <IonCardHeader className="ion-padding-bottom">
                        <IonCardTitle className="ion-text-center login-title">
                            <IonLabel color="medium">
                                <strong>INICIANDO SESSÃO</strong>
                            </IonLabel>
                        </IonCardTitle>
                        <IonFab edge={true} vertical="top" horizontal="end">
                            <IonFabButton
                                className="close-icon"
                                color="#"
                                onClick={() => setShowModal(false)}
                            >
                                <IonIcon name="close" color="#"></IonIcon>
                            </IonFabButton>
                        </IonFab>
                    </IonCardHeader>
                    <IonCardContent className="ion-padding-horizontal">
                        <IonGrid>
                            <IonRow className="ion-padding-horizontal">
                                <IonCol>
                                    <IonItem className="login-input">
                                        <IonLabel color="medium">
                                            E-mail
                                        </IonLabel>
                                        <h1>
                                            <IonInput
                                                className="login-input-field"
                                                autocomplete="email"
                                                color="primary"
                                                inputMode="email"
                                                name="email"
                                                pattern="email"
                                                required
                                            ></IonInput>
                                        </h1>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-padding-horizontal">
                                <IonCol>
                                    <IonItem className="login-input">
                                        <IonLabel color="medium">
                                            Senha
                                        </IonLabel>
                                        <h1>
                                            <IonInput
                                                className="login-input-field"
                                                autocomplete="current-password"
                                                type="password"
                                                color="primary"
                                                name="password"
                                                pattern="password"
                                                required
                                            ></IonInput>
                                        </h1>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-padding-horizontal ion-padding-top justify-content-center">
                                <IonCol>
                                    <IonButton
                                        color="primary"
                                        fill="outline"
                                        className="login-button"
                                    >
                                        ENTRAR
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton
                                        color="primary"
                                        fill="outline"
                                        className="login-button"
                                    >
                                        ESQUECI A SENHA
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
            </IonModal>
        </>
    );
}

export default LoginModal;
