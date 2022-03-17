import React, { useRef, useState } from "react";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
} from "@ionic/react";
import { logInOutline, scan } from "ionicons/icons";
import ExploreContainer from "../../components/ExploreContainer";
import "./Login.css";
import { useHistory } from "react-router";
import { Alert } from "../../components";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [error, setError] = useState<string>("");

  const history = useHistory();

  const usernameRef = useRef<HTMLIonInputElement>(null); // specify what type of html element it will point to
  const passwordRef = useRef<HTMLIonInputElement>(null);

  const handleLogin = (e: any) => {
    e.preventDefault();
    const isInputValid = validateInput();

    if (isInputValid) {
      history.push("/dashboard");
    } else {
      setError("Please enter valid username/password!");
    }
  };

  const validateInput = () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      return false;
    }

    return true;
  };

  return (
    <IonPage>
      <Alert
        errorMessage={error}
        setErrorMessage={setError}
        header={"Invalid"}
      />

      <IonContent fullscreen>
        <ExploreContainer>
          <div
            className="ion-text-left ion-padding"
            style={{ display: "flex" }}
          >
            <IonIcon className="ion-padding" icon={scan} size="large" />
            <IonText>
              <h1>SMM</h1>
            </IonText>
          </div>

          <IonItem className="ion-padding">
            <IonLabel position="stacked">Username</IonLabel>
            <IonInput ref={usernameRef} />
          </IonItem>

          <IonItem className="ion-padding">
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" ref={passwordRef} />
          </IonItem>

          <div className="ion-text-right ion-padding-end">
            <IonText>
              <p>Forgotten Password?</p>
            </IonText>
          </div>

          <div className="ion-text-left ion-padding-start ion-margin-top">
            <IonButton
              onClick={handleLogin}
              routerDirection="forward"
              size="large"
            >
              <IonIcon slot="start" icon={logInOutline} />
              LOGIN
            </IonButton>
            <IonText>
              <h6>
                Or <Link to="/register">REGISTER</Link>
              </h6>
            </IonText>
          </div>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Login;
