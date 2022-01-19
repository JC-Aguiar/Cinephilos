import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React, { useState } from "react";

enum GenerosEnum {
    DRAMA,
    TRAGÉDIA,
    HUMOR,
    COMEDIA,
    CASO_REAL,
    DOCUMENÁRIO,
    AÇÃO,
    INESTIGAÇÃO,
    FICÇÃO,
    FANTASIA,
    BIBLICO,
    MUSICAL,
    TERROR,
    CLASSICO,
    CULT,
    //MAKING_OFF
    //REALITY_SHOW
}

enum RoteiroEnum {
    ADAPTAÇÃO,
    ORIGINAL,
}

enum EsteticaEnum {
    PB,
    NORMAL,
    ESTILIZADO,
    SATURADO,
    STOP_MOTION,
    ANIMAÇÃO,
    COMPUTACAO_GRAFICA,
}

enum EpocaEnum {
    PRE_HISTÓRICO,
    ERA_ANTIGA,
    MEDIEVAL,
    FEUDAL,
    RENASCENÇA,
    ANOS40,
    ANOS50,
    ANOS60,
    ANOS70,
    ANOS80,
    ANOS90,
    ANOS2000,
    ANOS2010,
    ATUAL,
    FUTURISTA,
}

enum ClassificaçãoEnum {
    LIVRE,
    MAIORES_10,
    MAIORES_12,
    MAIORES_14,
    MAIORES_16,
    MAIORES_18,
}

interface FilmeInterface {
    readonly id: number;
    readonly titulo: string;
    readonly sinopse: string;
    readonly generos: GenerosEnum[];
    readonly dataLancamento: Date;
    readonly diretores: string[];
    readonly produtores: string[];
    readonly atores: string[];
    readonly classificação: ClassificaçãoEnum;
    readonly logo: ImageBitmap;
    readonly capas: ImageBitmap[];
    readonly epoca: EpocaEnum[];
    readonly roteiro: RoteiroEnum;
    readonly estetica: EsteticaEnum[];
    readonly vizualizações: number;
    readonly votos: number;
    readonly avaliação: number;
    readonly duração: number;
    tempoAtual: number;
    readonly filme: File;
}

class FilmeModel implements FilmeInterface {
    tempoAtual!: number;

    constructor(
        readonly id: number,
        readonly titulo: string,
        readonly sinopse: string,
        readonly generos: GenerosEnum[],
        readonly dataLancamento: Date,
        readonly diretores: string[],
        readonly produtores: string[],
        readonly atores: string[],
        readonly classificação: ClassificaçãoEnum,
        readonly logo: ImageBitmap,
        readonly capas: ImageBitmap[],
        readonly epoca: EpocaEnum[],
        readonly roteiro: RoteiroEnum,
        readonly estetica: EsteticaEnum[],
        readonly vizualizações: number,
        readonly votos: number,
        readonly avaliação: number,
        readonly duração: number,
        tempoAtual: number,
        readonly filme: File,
    )
    {
        this.tempoAtual = tempoAtual;
    }
}

const CardFilme = (props: any) => {
    const filme = new FilmeModel(
        props.id,
        props.titulo,
        props.sinopse,
        props.generos,
        props.dataLancamento,
        props.diretores,
        props.produtores,
        props.atores,
        props.classificação,
        props.logo,
        props.capas,
        props.epoca,
        props.roteiro,
        props.estetica,
        props.vizualizações,
        props.votos,
        props.avaliação,
        props.duração,
        props.tempoAtual,
        props.filme,
    );
    const [capaSlide, setCapaSlide] = useState(filme.capas[0]);

    return(
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{filme.titulo}</IonCardTitle>
                <IonCardSubtitle>
                    {filme.generos.map((String, index) => {
                        return index + " ";
                    })}
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                {capaSlide}
            </IonCardContent>
        </IonCard>
    );

}

export default CardFilme;
