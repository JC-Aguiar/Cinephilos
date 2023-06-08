import { IonButton, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRow, IonTitle, IonToolbar, ScrollDetail, useIonViewDidEnter } from '@ionic/react';
import { useLocation, useParams } from 'react-router';
import GaleriaFilmes from '../components/GaleriaFilmes';
import Duração from '../components/Duração';
import FilmeModel, { ClassificaçãoEnum, EpocaEnum, EsteticaEnum, GenerosEnum, RoteiroEnum } from '../components/FilmeModel';
import { useState } from 'react';
import { bookOutline, bookSharp, carSportOutline, carSportSharp, filmOutline, filmSharp, filterCircle, filterOutline, filterSharp, heartHalfOutline, heartHalfSharp, menuOutline, rocketOutline, rocketSharp, roseOutline, roseSharp } from 'ionicons/icons';
import Acount from '../components/Acount';
import Menu from '../components/Menu';

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

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}


const appPages: AppPage[] = [
    { title: "Novidades", url: "/news", iosIcon: filmOutline, mdIcon: filmSharp },
    { title: "Perfumes", url: "/perfumes", iosIcon: carSportOutline, mdIcon: carSportSharp },
    { title: "Notas", url: "/notas", iosIcon: roseOutline, mdIcon: roseSharp },
    { title: "Perfumistas", url: "/perfumistas", iosIcon: heartHalfOutline, mdIcon: heartHalfSharp },
    { title: "Forum", url: "/forum", iosIcon: bookOutline, mdIcon: bookSharp },
    { title: "Sobre", url: "/sobre", iosIcon: rocketOutline, mdIcon: rocketSharp },
];

const Page = (props: any) => {
    const { name } = useParams<{ name: string }>();
    const page = props.page === "" ? "Novidades" : props.page; // TODO: trocar "Novidades" pela referência ao objeto/valor 
    const itemCard = [{ x: Number, y: Number, w: Number, h: Number }];
    const [cards, setCards] = useState(itemCard);
    const [altura, setAltura] = useState(0);
    const [scroll, setScroll] = useState(0);

    const location = useLocation();
    // const loadMovie = () => endpoint(28);

    function pageSelection(title: string) {
        const callBack = props.callBack;
        callBack(title);
    }


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

    return (
        <IonPage>
            <IonContent
                color='light'
                fullscreen={true}
                scrollEvents={true}
                onIonScroll={(e) => scrollHandler(e)}
            >
                <div className='pagina'>
                    <div id="mini-logo" />
                    <IonGrid>
                        <IonRow className="ion-align-items-stretch">
                            <IonCol >
                                <h1>{page}</h1>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-stretch">
                            {filmes.map((card, colIndex) => (
                                <IonCol key={colIndex} size='12' sizeMd='4' sizeLg='3' class="ion-align-self-center">
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