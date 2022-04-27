import {
  IonItem,
  IonIcon,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonBadge,
  IonText,
} from "@ionic/react";
import { trashSharp } from "ionicons/icons";
import Alert from "../Alert";
import "./InventoryItem.css";
import { IInventoryItem } from "../../types";
import { useState } from "react";

const InventoryItem: React.FC<{
  item: IInventoryItem;
  idx: number;
}> = ({ item, idx }) => {
  const [error, setError] = useState<string>("");
  return (
    <IonItemSliding>
      <Alert
        type="delete"
        errorMessage={error}
        setErrorMessage={setError}
        header={"DELETE"}
      />
      <IonItem lines="full" color="light">
        <IonLabel className="ion-padding-vertical">{item.itemName}</IonLabel>
        <IonItem color="light">
          <IonBadge className="ion-padding-horizontal" color="medium">
            <IonText>
              <h6>{item.quantity}</h6>
            </IonText>
          </IonBadge>
        </IonItem>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={() => {}}>
          <IonIcon
            size="large"
            icon={trashSharp}
            onClick={() => {
              setError("Are you sure you want to delete this item?");
            }}
          />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default InventoryItem;
