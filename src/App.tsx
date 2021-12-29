import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import axios from '../node_modules/axios';

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
import UsuarioModel, { UsuarioInterface } from './components/UsuarioModel';
import { TokenInterface, TokenModel } from './components/TokenModel';

setupIonicReact();

export enum UserProfileEnum {
    Visitante,
    Usuário,
    Convidado,
    Criança,
}

let user: UsuarioInterface | null = null;

function responseCheck(response: Response) {
    if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
    }
}

function statusCheck(status: number) {
    if (status < 200 || status >= 300) {
        throw new Error(`Status ${status}`);
    }
}

export async function login() {
    try {
        const response: TokenInterface = await axios
            .post(
                "http://localhost:8010/login",
                {
                    email: "jcostalaguiar@gmail.com",
                    senha: "Cebola21",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:8010/*",
                        "Access-Control-Allow-Methods": "POST, GET",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Max-Age": "60000",
                    },
                }
            )
            .then((response) => {
                statusCheck(response.status);
                alert(`Status ${response.status}`);
                return response.data;
            });
        const token = new TokenModel(response);
        user = new UsuarioModel(token.usuario);
    } catch(error) {
        console.error(error);
    }

    // return user;
}

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu userLogin={user} />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/movies/all" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
