import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import { IonPage, IonRouterOutlet } from "@ionic/react";
import "./Inventory.css";
import InventoryListPage from "./InventoryListPage";
import InventoryDetailPage from "./InventoryDetailPage";

const InventoryPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={match.url} component={InventoryListPage} />
        <Route path={`${match.url}/item/:id`} component={InventoryDetailPage} />
        <Route render={() => <Redirect to={match.url} />} />
      </IonRouterOutlet>
    </IonPage>
  );
};

export default InventoryPage;
