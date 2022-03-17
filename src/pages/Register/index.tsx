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
import { personAdd } from "ionicons/icons";
import ExploreContainer from "../../components/ExploreContainer";
import "./Register.css";
import { useHistory } from "react-router";
import { Alert } from "../../components";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [error, setError] = useState<string>("");

  const history = useHistory();

  const fullNameRef = useRef<HTMLIonInputElement>(null); // specify what type of html element it will point to
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const confirmPasswordRef = useRef<HTMLIonInputElement>(null);

  const handleRegister = (e: any) => {
    e.preventDefault();
    const isInputValid = validateInput();
    const isPasswordMatch = checkPasswordMatch();

    if (!isInputValid) {
      setError("Please fill in all fields!");
    } else if (!isPasswordMatch) {
      setError("Passwords do not match!");
    } else {
      history.push("/login");
    }
  };

  const validateInput = () => {
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (!fullName || !email || !password || !confirmPassword) {
      return false;
    }

    return true;
  };

  const checkPasswordMatch = () => {
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (password !== confirmPassword) {
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
          <div className="ion-text-left ion-padding-start">
            <IonText>
              <h1>REGISTER</h1>
            </IonText>
          </div>

          <IonItem className="ion-padding">
            <IonLabel position="stacked">Full Name</IonLabel>
            <IonInput ref={fullNameRef} />
          </IonItem>

          <IonItem className="ion-padding">
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput ref={emailRef} />
          </IonItem>

          <IonItem className="ion-padding">
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" ref={passwordRef} />
          </IonItem>

          <IonItem className="ion-padding">
            <IonLabel position="stacked">Confirm Password</IonLabel>
            <IonInput type="password" ref={confirmPasswordRef} />
          </IonItem>

          <div className="ion-text-left ion-padding-start ion-margin-top">
            <IonButton
              onClick={handleRegister}
              routerDirection="forward"
              size="large"
            >
              <IonIcon slot="start" icon={personAdd} />
              CREATE
            </IonButton>
            <IonText>
              <h6>
                Or <Link to="/login">SIGN IN</Link>
              </h6>
            </IonText>
          </div>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Register;
