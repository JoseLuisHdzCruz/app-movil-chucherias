import { IonContent, IonHeader, IonMenu, IonMenuToggle, IonToolbar, IonTitle, IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonCol, IonRow, IonImg } from '@ionic/react';
import { home, list, informationCircle, person } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';

const MainLayout: React.FC = () => {
  return (
    <>
      {/* IonMenu - Menú lateral */}
      <IonMenu side="start" contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonRow>
                <IonCol size='8'>
                    <IonTitle>Usuario</IonTitle>
                </IonCol>
                <IonCol size='4'>
                    <IonImg src="/assets/Images/user.jpg" alt="Usuario logo" />

                </IonCol>
            </IonRow>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonMenuToggle>
            <IonLabel>Menú de opciones</IonLabel>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>

      {/* Contenido principal (con Tabs) */}
      <IonPage id="main">
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1" component={Tab1} />
            <Route exact path="/tab2" component={Tab2} />
            <Route exact path="/tab3" component={Tab3} />
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>

          {/* Barra de pestañas */}
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={home} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={list} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={informationCircle} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </>
  );
};

export default MainLayout;
