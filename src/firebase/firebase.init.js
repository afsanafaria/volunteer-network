import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthenthication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthenthication;