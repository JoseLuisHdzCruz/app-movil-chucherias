import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';
import { Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* Aquí renderizamos el layout */}
      <Route path="/" component={MainLayout} />
    </IonReactRouter>
  </IonApp>
);

export default App;
