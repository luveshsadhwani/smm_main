import { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonBadge,
  IonText,
  IonInput,
} from "@ionic/react";
import { addCircleSharp, removeCircleSharp } from "ionicons/icons";
import "./InventoryItem.css";
import { IInventoryItem } from "../../types";

const InventoryItem: React.FC<{
  item: IInventoryItem;
  idx: number;
}> = ({ item, idx }) => {
  return (
    <IonItemSliding>
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
