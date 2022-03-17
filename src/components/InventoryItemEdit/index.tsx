import {
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonChip,
  IonIcon,
} from "@ionic/react";
import { addCircleSharp, removeCircleSharp } from "ionicons/icons";

const InventoryItemEdit: React.FC<{
  item: { itemName: string; quantity: number };
}> = ({ item }) => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonLabel>{item.itemName}</IonLabel>
        <IonItem>
          <IonIcon icon={addCircleSharp} />
          <IonChip outline color="primary">
            <IonLabel>{item.quantity}</IonLabel>
          </IonChip>
          <IonIcon icon={removeCircleSharp} />
        </IonItem>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={() => {}}>Edit</IonItemOption>
        <IonItemOption onClick={() => {}}>Delete</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default InventoryItemEdit;
