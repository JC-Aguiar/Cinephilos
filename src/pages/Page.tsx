import { IonApp, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonPage, IonRow, IonText, IonThumbnail, ScrollDetail, useIonViewDidEnter, withIonLifeCycle } from '@ionic/react';
import { useParams } from 'react-router';
import GaleriaFilmes from '../components/GaleriaFilmes';
import Duração from '../components/Duração';
import './Page.css';
import FilmeModel, { ClassificaçãoEnum, EpocaEnum, EsteticaEnum, GenerosEnum, RoteiroEnum } from '../components/FilmeModel';
import { useState } from 'react';

const Page = (props: any) => {
    const { name } = useParams<{ name: string }>();
    const page = props.page === "" ? "Todos" : props.page;
    const [scroll, setScroll] = useState(0);
    const filmeExemplo: FilmeModel = {
        id: 1,
        titulo: "2001: uma odisséia no espaço",
        sinopse:
            "Uma garota incrível aceita um oferta de emprego inesperada para uma aventura na metrópole misteriosa.",
        generos: [
            GenerosEnum.CULT,
            GenerosEnum.CASO_REAL,
            GenerosEnum.HUMOR,
            GenerosEnum.ROMANCE,
        ],
        dataLancamento: new Date(2022, 1, 19),
        diretores: ["Kubric"],
        produtores: ["Shopping Cidade Jardim Filmes"],
        atores: ["Gabrielle de Mello", "João Costal Aguiar"],
        classificação: ClassificaçãoEnum.LIVRE,
        logo: "logo.png",
        capas: ["https://i.imgur.com/xBzRlb9.jpeg"],
        font: 'Futura',
        epoca: [EpocaEnum.ATUAL],
        roteiro: RoteiroEnum.ORIGINAL,
        estetica: [EsteticaEnum.PADRÃO],
        vizualizações: 548789,
        votos: 541248,
        avaliação: 5,
        duração: new Duração(2, 15, 30, 1252),
        tempoAtual: new Duração(0, 0, 0, 0),
        filme: "HTMLElement-filme",
    };

    const filmes: FilmeModel[] = [
        filmeExemplo,
        filmeExemplo,
        filmeExemplo,
        filmeExemplo,
        filmeExemplo,
        filmeExemplo,
        filmeExemplo,
        filmeExemplo,
    ];

    const scrollHandler = (e: CustomEvent<ScrollDetail>) => {
        console.log("Scrolled! currentY: " + scroll);
        setScroll(e.detail.currentY);

        //callback aos cards de filmes para verificar se eles estão no centor e alterar css
    }

    useIonViewDidEnter(() => {

    });

    return (
        <IonPage>
            <IonContent
                fullscreen={true}
                scrollEvents={true}
                onIonScroll={(e) => scrollHandler(e)}
            >
                <div id="mini-logo" />
                <h1>
                    <div id="pagina-titulo-reflexo">{page}</div>
                    <div id="pagina-titulo">{page}</div>
                </h1>
                <IonGrid id="galeria-filmes" className="ion-no-padding">
                    {filmes.map((filme, index) => {
                        return (
                            <IonRow key={index}>
                                <IonCol>
                                    <GaleriaFilmes
                                        conteudo={filme}
                                        num={index}
                                        scrollY={scroll}
                                    />
                                </IonCol>
                            </IonRow>
                        );
                    })}
                </IonGrid>
            </IonContent>
        </IonPage>
        /* <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name={name} />
            </IonContent> */
    );
};

export default Page;
