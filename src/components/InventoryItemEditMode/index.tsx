import { useState } from "react";
import { IonItem, IonLabel, IonIcon, IonBadge, IonInput } from "@ionic/react";
import { addCircleSharp, removeCircleSharp } from "ionicons/icons";
import "./InventoryItemEditMode.css";
import { IInventoryItem } from "../../types";

const InventoryItemEditMode: React.FC<{
  item: IInventoryItem;
  idx: number;
  setQty: (index: number, quantity: number) => void;
}> = ({ item, idx, setQty }) => {
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
    <IonItem lines="full" color="light">
      <IonLabel className="ion-padding-vertical">{item.itemName}</IonLabel>
      <IonItem color="light">
        <IonIcon
          size="large"
          icon={addCircleSharp}
          className="ion-padding-end"
          onClick={() => {
            incrementItemQty();
          }}
        />
        <IonBadge className="ion-padding-horizontal" color="medium">
          <IonInput
            inputMode="numeric"
            min={0}
            size={1}
            value={itemQty}
            onIonChange={(e: CustomEvent) => setItemQty(e.detail.value)}
            onIonBlur={() => setQty(idx, itemQty)}
          ></IonInput>
        </IonBadge>
        <IonIcon
          size="large"
          icon={removeCircleSharp}
          className="ion-padding-start"
          onClick={() => decrementItemQty()}
        />
      </IonItem>
    </IonItem>
  );
};

export default InventoryItemEditMode;
