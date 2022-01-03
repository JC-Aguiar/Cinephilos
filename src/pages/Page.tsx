import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

function Page(props: any) {

  const { name } = useParams<{ name: string; }>();
  const page: string = props.page;

  return (
        <IonContent >
              <p>Página: {page}</p>
        </IonContent>
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
