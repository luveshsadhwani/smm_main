import { IonItem, IonLabel, IonIcon } from "@ionic/react";
import { addCircleSharp } from "ionicons/icons";
// import { IInventoryItem } from "../../types";

const InventoryAdd: React.FC<{
  setModalOpen: (arg0: boolean) => void;
}> = ({ setModalOpen }) => {
  return (
    <IonItem
      lines="full"
      color="dark"
      button
      onClick={() => setModalOpen(true)}
    >
      <IonIcon
        size="large"
        icon={addCircleSharp}
        className="ion-padding-start"
      />
      <IonLabel className="ion-padding-vertical">Add Item</IonLabel>
    </IonItem>
  );
};

export default InventoryAdd;
