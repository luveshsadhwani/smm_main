import { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
} from "@ionic/react";
import { pencil, checkmark } from "ionicons/icons";
import ExploreContainer from "../../components/ExploreContainer";
import "./Inventory.css";
import { AppHeader, InventoryItem, InventoryItemEdit } from "../../components";

const data = [
  {
    id: 1,
    itemName: "Item A",
    quantity: 5,
  },
  {
    id: 2,
    itemName: "Item B",
    quantity: 5,
  },
  {
    id: 3,
    itemName: "Item C",
    quantity: 5,
  },
];

const InventoryListPage: React.FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleEdit = () => {
    setEditMode((prevState) => !prevState);
    console.log("Editting");
  };

  const handleSave = () => {
    setEditMode((prevState) => !prevState);
    console.log("Saving");
  };

  const titleIcon = editMode ? checkmark : pencil;
  const titleIconHandleClick = editMode ? handleSave : handleEdit;

  const renderItem = (item: {
    id: number;
    itemName: string;
    quantity: number;
  }) =>
    editMode ? (
      <InventoryItemEdit key={item.id} item={item} />
    ) : (
      <InventoryItem key={item.id} item={item} />
    );

  return (
    <IonPage>
      <AppHeader
        title="Inventory"
        endIcon={titleIcon}
        endIconHandler={titleIconHandleClick}
      />
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inventory</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer>Inventory List Page </ExploreContainer>
        <IonList>{data.map(renderItem)}</IonList>
      </IonContent>
    </IonPage>
  );
};

export default InventoryListPage;
