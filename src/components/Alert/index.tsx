import { IonAlert } from "@ionic/react";

const Alert: React.FC<{
  errorMessage: string;
  setErrorMessage: (state: string) => void;
  header: string;
}> = ({ errorMessage, setErrorMessage, header }) => {
  return (
    <IonAlert
      isOpen={!!errorMessage}
      onDidDismiss={() => setErrorMessage("")}
      header={header}
      message={errorMessage}
      buttons={[
        {
          text: "OK",
          id: "cancel-button",
          handler: () => {
            setErrorMessage("");
          },
        },
      ]}
    />
  );
};

export default Alert;
