import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonButtons,
  IonBackButton,
  IonText,
} from "@ionic/react";

const AppHeader: React.FC<{
  title: string;
  endIcon?: string;
  endIconHandler?: () => void;
}> = ({ title, endIcon, endIconHandler }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle>
          <IonText>
            <strong>{title}</strong>
          </IonText>
        </IonTitle>
        <IonButton
          slot="end"
          onClick={endIconHandler}
          className="ion-padding-end"
        >
          <IonIcon icon={endIcon} />
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
