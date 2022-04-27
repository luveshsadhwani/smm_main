import { useState, useEffect } from "react";
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
import {
  AddItemModal,
  AppHeader,
  InventoryAdd,
  InventoryItem,
  InventoryItemEditMode,
} from "../../components";
import { inventoryData } from "./inventoryData";
import { IInventoryItem } from "../../types";

const InventoryListPage: React.FC = () => {
  const [addMode, setAddMode] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [items, setItems] = useState<IInventoryItem[]>([
    { id: 0, itemName: "", quantity: 0 },
  ]);

  useEffect(() => {
    setItems([...inventoryData]);
  }, []);

  const setItemQty = (selectedIndex: number, setQty: number) => {
    // map through items
    const updateItems = (items: Array<IInventoryItem>) =>
      items.map((item: IInventoryItem, idx: number) =>
        setItemQtyByIdx(item, idx)
      );

    // find correct item by matching index and update qty for that item
    const setItemQtyByIdx = (item: IInventoryItem, index: number) => {
      if (index === selectedIndex && setQty > 0) {
        return { ...item, quantity: +setQty };
      } else {
        return item;
      }
    };

    setItems((state) => updateItems(state));
  };

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

  const renderListItem = (item: IInventoryItem, idx: number) =>
    editMode ? (
      <InventoryItemEditMode
        key={item.id}
        idx={idx}
        item={item}
        setQty={setItemQty}
      />
    ) : (
      <InventoryItem key={item.id} idx={idx} item={item} />
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
        <AddItemModal isOpen={addMode} setOpen={setAddMode} />
        <ExploreContainer>Inventory List Page </ExploreContainer>
        <IonList lines="none" className="item-list">
          {items.map(renderListItem)}
          <InventoryAdd setModalOpen={setAddMode} />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default InventoryListPage;
