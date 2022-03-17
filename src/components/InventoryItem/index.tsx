import {
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonBadge,
  IonText,
} from "@ionic/react";
import { addCircleSharp, removeCircleSharp } from "ionicons/icons";
import "./InventoryItem.css";

const InventoryItem: React.FC<{
  item: { itemName: string; quantity: number };
  editMode: boolean;
}> = ({ item, editMode }) => {
  return (
    <IonItemSliding>
      <IonItem lines="full" color="light">
        <IonLabel className="ion-padding-vertical">{item.itemName}</IonLabel>
        <IonItem color="light">
          {editMode && (
            <IonIcon
              size="large"
              icon={addCircleSharp}
              className="ion-padding-end"
            />
          )}
          <IonBadge className="ion-padding-horizontal" color="medium">
            <IonText>
              <h6>{item.quantity}</h6>
            </IonText>
          </IonBadge>

          {editMode && (
            <IonIcon
              size="large"
              icon={removeCircleSharp}
              className="ion-padding-start"
            />
          )}
        </IonItem>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={() => {}}>Edit</IonItemOption>
        <IonItemOption onClick={() => {}}>Delete</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default InventoryItem;
