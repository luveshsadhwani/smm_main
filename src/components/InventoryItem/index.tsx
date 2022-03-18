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
  editMode: boolean;
  setQty: (index: number, quantity: number) => void;
}> = ({ item, idx, editMode, setQty }) => {
  const [itemQty, setItemQty] = useState<number>(item.quantity);

  const incrementItemQty = () => {
    setItemQty((state) => +state + 1);
  };

  const decrementItemQty = () => {
    setItemQty((state) => {
      if (state <= 0) {
        return state;
      } else {
        return +state - 1;
      }
    });
  };

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
              onClick={() => {
                incrementItemQty();
              }}
            />
          )}
          <IonBadge className="ion-padding-horizontal" color="medium">
            {editMode ? (
              <IonInput
                inputMode="numeric"
                min={0}
                size={1}
                value={itemQty}
                onIonChange={(e: CustomEvent) => setItemQty(e.detail.value)}
                onIonBlur={() => setQty(idx, itemQty)}
              ></IonInput>
            ) : (
              <IonText>
                <h6>{itemQty}</h6>
              </IonText>
            )}
          </IonBadge>

          {editMode && (
            <IonIcon
              size="large"
              icon={removeCircleSharp}
              className="ion-padding-start"
              onClick={() => decrementItemQty()}
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
