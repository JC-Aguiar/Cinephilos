import { IonApp, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonRow, IonText, IonThumbnail } from '@ionic/react';
import { useParams } from 'react-router';
import GaleriaFilmes from '../components/GaleriaFilmes';
import Duração from '../components/Duração';
import './Page.css';
import FilmeModel, { ClassificaçãoEnum, EpocaEnum, EsteticaEnum, GenerosEnum, RoteiroEnum } from '../components/FilmeModel';

const Page = (props: any) => {
    const { name } = useParams<{ name: string }>();
    const page: string = props.page;
    const filmeExemplo: FilmeModel = {
        id: 1,
        titulo: "Gabrielle de Mello Almeida",
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
        capas: ["capa01.jpg", "capa02.jpg", "capa03.jpg"],
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

    return (
        <IonApp>
            <IonContent>
                <div id='mini-logo' />
                <IonText id="pagina-titulo">{page}</IonText>
                <IonGrid id='galeria-filmes' className='ion-no-padding'>
                    {filmes.map((filme, index) => {
                        return (
                            <IonRow>
                                <IonCol>
                                    <GaleriaFilmes conteudo={filme} key={index} num={index} />
                                </IonCol>
                            </IonRow>
                        );
                    })}
                </IonGrid>
            </IonContent>

        </IonApp>
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
