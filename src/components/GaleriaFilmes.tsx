import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonImg, IonLabel, IonRow, IonThumbnail, useIonViewDidEnter } from "@ionic/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FilmeModel from "./FilmeModel";
import "./GaleriaFilmes.css";

const GaleriaFilmes = (props: any) => {
    const filme = new FilmeModel(
        props.conteudo.id,
        props.conteudo.titulo,
        props.conteudo.sinopse,
        props.conteudo.generos,
        props.conteudo.dataLancamento,
        props.conteudo.diretores,
        props.conteudo.produtores,
        props.conteudo.atores,
        props.conteudo.classificação,
        props.conteudo.logo,
        props.conteudo.capas,
        props.conteudo.font,
        props.conteudo.posição,
        props.conteudo.fit,
        props.conteudo.epoca,
        props.conteudo.roteiro,
        props.conteudo.estetica,
        props.conteudo.vizualizações,
        props.conteudo.votos,
        props.conteudo.avaliação,
        props.conteudo.duração,
        props.conteudo.tempoAtual,
        props.conteudo.filme
    );
    const [capaSlide, setCapaSlide] = useState(filme.capas[0]);

    const exibirImagem = (e: HTMLIonImgElement) => {
        // e.style.opacity = "100";
        e.style.animation = "exibirCapa 1s forwards";
    }

    return (
        <IonCard id="card-filme" target="_self">
            <IonCardHeader id="filme-texto">
                <IonCardTitle
                    id="filme-title"
                    style={{ fontFamily: filme.font }}
                >
                    {filme.titulo}
                </IonCardTitle>
                <IonCardSubtitle>
                    {filme.generos.map((genero, index) => {
                        return genero + "\u00A0\u00A0\u00A0";
                    })}
                </IonCardSubtitle>
            </IonCardHeader>
            <IonThumbnail>
                <IonImg
                    id="filme-capa"
                    src={capaSlide}
                    onIonImgDidLoad={(e) =>
                        exibirImagem(e.target as HTMLIonImgElement)
                    }
                    // ALTERAR O MÉTODO: FADES DEVEM SER FEITOS NO SWIPER
                />
                {/* providenciar -> onIonError */}
            </IonThumbnail>
        </IonCard>
    );
};

export default GaleriaFilmes;
