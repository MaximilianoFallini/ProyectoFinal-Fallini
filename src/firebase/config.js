import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzLVMQn_vM0v6a4k0SPcNcfy8CGI7QpX8",
  authDomain: "shoppingpoint-c7143.firebaseapp.com",
  projectId: "shoppingpoint-c7143",
  storageBucket: "shoppingpoint-c7143.firebasestorage.app",
  messagingSenderId: "300319896373",
  appId: "1:300319896373:web:5c34b71f614e55dfc7927c"
};

const app = initializeApp(firebaseConfig);

export { app };