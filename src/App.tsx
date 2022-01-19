import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact, useIonViewDidEnter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Intro from './pages/Intro';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useState } from 'react';

setupIonicReact();

export enum UserProfileEnum {
    Visitante,
    Usuário,
    Convidado,
    Criança,
}

const App: React.FC = () => {
    const [page, setPage] = useState<string>("");
    const [boasVindas, setBoasVindas] = useState(false);

    useIonViewDidEnter(() => {
        console.log("[APP] useIonViewDidEnter!");
    });

    function rotasDeAcesso() {
        if(boasVindas) {
            return(
                <IonSplitPane contentId="main">
                    <Menu callBack={(newPage: string) => setPage(newPage)} />
                    <IonRouterOutlet id="main">
                        <Route path="/movies/all"           exact={true}><Page page={page}/></Route>
                        <Route path="/movies/action"        exact={true}><Page page={page}/></Route>
                        <Route path="/movies/romance"       exact={true}><Page page={page}/></Route>
                        <Route path="/movies/drama"         exact={true}><Page page={page}/></Route>
                        <Route path="/movies/comedy"        exact={true}><Page page={page}/></Route>
                        <Route path="/movies/documentary"   exact={true}><Page page={page}/></Route>
                        <Route path="/movies/fantasy"       exact={true}><Page page={page}/></Route>
                        <Route><Redirect to="/movies/all" /></Route>
                    </IonRouterOutlet>
                </IonSplitPane>
            );
        }
        else {
            return(<>
                {/* <Route component={Intro} /> */}
                <Route path="/intro" component={Intro} exact={true} />
                <Route><Redirect to="/intro" /></Route>
            </>);
        }
    }

    return (
        <IonApp>
            <IonReactRouter>
                {rotasDeAcesso()}
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
