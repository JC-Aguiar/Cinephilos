import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonThumbnail } from "@ionic/react";
import { useState } from "react";
import FilmeModel from "./FilmeModel";

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
        <IonCard>
            <IonImg id="filme-imagem" src={capaSlide} onIonImgDidLoad={(e) => exibirImagem(e.target as HTMLIonImgElement)} />
            {/*ALTERAR O MÉTODO: FADES DEVEM SER FEITOS NO SWIPER  e  providenciar -> onIonError */}
            <IonCardHeader id="filme-texto">
                <IonCardTitle id="filme-title" style={{ fontFamily: filme.font }}>
                    {filme.titulo}
                </IonCardTitle>
                <IonCardSubtitle>
                    {filme.generos.map((genero, index) => {
                        return genero + "\u00A0\u00A0\u00A0";
                    })}
                </IonCardSubtitle>
            </IonCardHeader>
        </IonCard>
    );
};

export default GaleriaFilmes;

{/* <IonImg
id="filme-capa"
src={capaSlide}
onIonImgDidLoad={(e) =>
    exibirImagem(e.target as HTMLIonImgElement)
}
/>
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
</IonCardHeader> */}
