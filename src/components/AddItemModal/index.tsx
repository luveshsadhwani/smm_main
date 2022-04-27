import { IonContent, IonModal } from "@ionic/react";
import { closeSharp } from "ionicons/icons";
import AppHeader from "../AppHeader";
// import { IInventoryItem } from "../../types";

const AddItemModal: React.FC<{
  isOpen: boolean;
  setOpen: (arg0: boolean) => void;
}> = ({ isOpen, setOpen }) => {
  return (
    <IonModal isOpen={isOpen}>
      <AppHeader
        title="Add Item"
        endIcon={closeSharp}
        endIconHandler={() => setOpen(false)}
      />
      <IonContent>Modal Content</IonContent>
    </IonModal>
  );
};

export default AddItemModal;
