import { IonAlert } from "@ionic/react";

const Alert: React.FC<{
  type: "alert" | "delete";
  errorMessage: string;
  setErrorMessage: (state: string) => void;
  header: string;
  buttonAction?: () => void;
}> = ({ type, errorMessage, setErrorMessage, header, buttonAction }) => {
  const renderButtons = () => {
    let buttonArray: { text: string; id: string; handler: () => void }[] = [];

    if (type === "alert") {
      buttonArray = [
        {
          text: "OK",
          id: "cancel-button",
          handler: () => {
            setErrorMessage("");
          },
        },
      ];
    }

    if (type === "delete") {
      buttonArray = [
        {
          text: "YES",
          id: "delete-button",
          handler: () => {
            if (buttonAction) buttonAction();
          },
        },
        {
          text: "CANCEL",
          id: "cancel-button",
          handler: () => {
            setErrorMessage("");
          },
        },
      ];
    }

    return buttonArray;
  };

  return (
    <IonAlert
      isOpen={!!errorMessage}
      onDidDismiss={() => setErrorMessage("")}
      header={header}
      message={errorMessage}
      buttons={renderButtons()}
    />
  );
};

export default Alert;
