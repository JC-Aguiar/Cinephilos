import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { useState } from "react";
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

    return (
        <IonCard id="card-filme" target="_self">
            <IonCardHeader>
                <IonCardTitle>[{props.num}] {filme.titulo}</IonCardTitle>
                <IonCardSubtitle>
                    {filme.generos.map((genero, index) => {
                        return genero + "\u00A0\u00A0\u00A0";
                    })}
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{capaSlide}</IonCardContent>
        </IonCard>
    );
};

export default GaleriaFilmes;
