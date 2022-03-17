import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonItem,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

const AppHeader: React.FC<{
  title: string;
  endIcon?: string;
  endIconHandler?: () => void;
}> = ({ title, endIcon, endIconHandler }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonItem>
            {title}
            <IonButton slot="end" fill="clear" onClick={endIconHandler}>
              <IonIcon icon={endIcon} />
            </IonButton>
          </IonItem>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
