import {
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonChip,
} from "@ionic/react";

const InventoryItem: React.FC<{
  item: { itemName: string; quantity: number };
}> = ({ item }) => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonLabel>{item.itemName}</IonLabel>
        <IonItem>
          <IonChip outline color="primary">
            <IonLabel>{item.quantity}</IonLabel>
          </IonChip>
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
