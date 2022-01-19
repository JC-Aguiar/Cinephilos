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
    useIonViewDidEnter(() => {
        console.log("[APP] useIonViewDidEnter!");
    });
    return (
        <IonApp>
            <IonReactRouter>
                <Route path="/" exact={true} component={Intro} />
                {/* <IonSplitPane contentId="main">
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
                </IonSplitPane> */}
            </IonReactRouter>
        </IonApp>
    );
};

export default App;

/*
    <IonSplitPane contentId="main">
        <Menu callBack={(newPage: string) => setPage(newPage)} />
        <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
                <Redirect to="/movies/all" />
            </Route>
            <Route path="/page/:name" exact={true}>
                <Page page={page} />
            </Route>
        </IonRouterOutlet>
    </IonSplitPane>
*/

/*
    <Route path="/intro"                exact={true} component={Intro} />
    <Route path="/"                     exact={true}><Page page={page}/></Route>
    <Route path="/index"                exact={true}><Page page={page}/></Route>
    <Route path="/home"                 exact={true}><Page page={page}/></Route>
    <Route path="/movies"               exact={true}><Page page={page}/></Route>
    <Route path="/movies/all"           exact={true}><Page page={page}/></Route>
    <Route path="/movies/action"        exact={true}><Page page={page}/></Route>
    <Route path="/movies/romance"       exact={true}><Page page={page}/></Route>
    <Route path="/movies/drama"         exact={true}><Page page={page}/></Route>
    <Route path="/movies/comedy"        exact={true}><Page page={page}/></Route>
    <Route path="/movies/documentary"   exact={true}><Page page={page}/></Route>
    <Route path="/movies/fantasy"       exact={true}><Page page={page}/></Route>
*/
