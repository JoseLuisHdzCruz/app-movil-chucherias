import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListaProductos from '../components/ListaProductos';
import { IonSearchbar } from '@ionic/react';
import { searchCircle } from 'ionicons/icons';
import CustomMenu from '../components/CustomMenu';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <CustomMenu />
      <IonContent>
        <ListaProductos />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
