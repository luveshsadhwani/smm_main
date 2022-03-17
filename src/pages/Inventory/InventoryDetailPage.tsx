import { RouteComponentProps } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Inventory.css";

interface InventoryDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const InventoryDetailPage: React.FC<InventoryDetailPageProps> = ({ match }) => {
  console.log(match);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inventory Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inventory Detail</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer>
          {`Inventory Detail ${match.params.id} Page`}
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default InventoryDetailPage;
