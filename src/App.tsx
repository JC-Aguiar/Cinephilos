import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

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

setupIonicReact();

export interface UserInterface {
    email: string;
    name: string;
    picture: string;
    profile: UserProfileEnum;
}

export enum UserProfileEnum {
    Visitante,
    Usuário,
    Convidado,
    Criança,
}

// const user: UserInterface = {
//     email: "jcostalaguiar@gmail.com",
//     name: "JC Aguiar",
//     picture: "https://avatars.githubusercontent.com/u/78619372?v=4",
//     profile: UserProfileEnum.Usuário,
// };

const user: UserInterface = {
    email: "",
    name: "",
    picture: "",
    profile: UserProfileEnum.Visitante,
};

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
