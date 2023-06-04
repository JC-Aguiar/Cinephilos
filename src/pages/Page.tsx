import { IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, ScrollDetail, useIonViewDidEnter } from '@ionic/react';
import { useParams } from 'react-router';
import GaleriaFilmes from '../components/GaleriaFilmes';
import Duração from '../components/Duração';
import './Page.css';
import FilmeModel, { ClassificaçãoEnum, EpocaEnum, EsteticaEnum, GenerosEnum, RoteiroEnum } from '../components/FilmeModel';
import { useState } from 'react';
import { filterCircle, filterOutline, filterSharp, menuOutline } from 'ionicons/icons';

// import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// import { Grid, Pagination } from "swiper";
// import "swiper/swiper.min.css";
// import "swiper/modules/autoplay/autoplay.min.css";
// import "swiper/modules/keyboard/keyboard.min.css";
// import "swiper/modules/pagination/pagination.min.css";
// import "swiper/modules/grid/grid.min.css";
// import "swiper/modules/scrollbar/scrollbar.min.css";
// import "swiper/modules/zoom/zoom.min.css";
// import "@ionic/react/css/ionic-swiper.css";
// import axios from 'axios';

const Page = (props: any) => {
    const { name } = useParams<{ name: string }>();
    const page = props.page === "" ? "Todos" : props.page;
    const itemCard = [{ x: Number, y: Number, w: Number, h: Number }];
    const [cards, setCards] = useState(itemCard);
    const [altura, setAltura] = useState(0);
    const [scroll, setScroll] = useState(0);
    const filmeExemplo: FilmeModel = {
        id: 1,
        titulo: "TIARE - PERFUME BOTÂNICO 50ML",
        sinopse:
            "Uma garota incrível aceita um oferta de emprego inesperada para uma aventura na metrópole misteriosa.",
        generos: [
            "Fada Marinha",
        ],
        dataLancamento: new Date(2022, 1, 19),
        diretores: ["Kubric"],
        produtores: ["Shopping Cidade Jardim Filmes"],
        atores: ["Gabrielle de Mello", "João Costal Aguiar"],
        classificação: ClassificaçãoEnum.LIVRE,
        logo: "logo.png",
        capas: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/903/584/products/tiare1-2558c1f1c5d165b4cf16690434176256-640-0.webp"],
        font: 'Futura',
        posiçao: "center center",
        fit: "cover",
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
        // const content = document.getElementsByTagName("ion-content").item;
        // const paginaAltura = content.getScrollElement();
        console.log(`ScrollY: ${scroll}`);
        setScroll(e.detail.currentY);
        //callback aos cards de filmes para verificar se eles estão no centor e alterar css
    };

    useIonViewDidEnter(() => {
        // preloadImagens();
    });

    // Dividir o array em grupos de tamanho específico
    // const chunkArray = (array: FilmeModel[], size: number) => {
    //     const chunks: FilmeModel[][] = [];
    //     for(let i = 0; i < array.length; i += size) {
    //         chunks.push(array.slice(i, i + size));
    //     }
    //     return chunks;
    // };

    // Dividindo o array de cards em grupos de 4
    // const cardGroups: FilmeModel[][] = chunkArray(filmes, 4);

    return (
        <IonPage>
            
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start" autoHide={true}></IonMenuButton>
                </IonToolbar>
            </IonHeader>

            <IonContent
                fullscreen={true}
                scrollEvents={true}
                onIonScroll={(e) => scrollHandler(e)}
            >
                <IonFab className='filtro' vertical="top" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={filterOutline}/>
                    </IonFabButton>
                </IonFab>
                <div className='pagina'>
                    <div id="mini-logo" />
                    <h1>
                        <div id="pagina-titulo-reflexo">{page}</div>
                        <div id="pagina-titulo">{page}</div>
                    </h1>
                    <IonGrid className='galeria ion-padding'>
                            <IonRow className="ion-align-items-stretch">
                                {filmes.map((card, colIndex) => (
                                    <IonCol key={colIndex} size='12' sizeMd='6' sizeLg='4' class="ion-align-self-center">
                                        <GaleriaFilmes conteudo={card} num={colIndex} />
                                    </IonCol>
                                ))}
                            </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page;


/*
            <Swiper
                id="galeria-filmes"
                grid={{ rows: 2, }}
                pagination={{ clickable: true, }}
                spaceBetween={9}
                slidesPerView={4}
                // modules={[Grid, Pagination]}
                loop={false}
                // autoplay={false}
                // direction='horizontal'
                // touchStartPreventDefault={false}
                // threshold={100}
                // preloadImages={true}
            >
                {filmes.map((filme, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <GaleriaFilmes conteudo={filme} num={index} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
*/