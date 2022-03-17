import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { AppHeader } from "../../components";
import ExploreContainer from "../../components/ExploreContainer";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <AppHeader title="Dashboard" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer>
          <IonCard routerLink="/inventory" routerDirection="forward">
            <IonCardHeader>
              <IonCardTitle>Inventory</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
