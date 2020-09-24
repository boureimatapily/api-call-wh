import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"; // redux provider
import { ReactReduxFirebaseProvider } from "react-redux-firebase"; // new update from react-redux-firebase v3
import firebase from "./Config/fbconfig"; // import firebase
import store from "./Redux/Store"; // import redux store
import { createFirestoreInstance } from "redux-firestore"; // allow to create firestore intance in our app


// creating react-redux-firebase Props from react-redux-firebase version 3
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {/* ADD BrowserRouter from react-router-dom */}
        <Router>
          {/* <AuthIsLoaded> */}
            <App />
          {/* </AuthIsLoaded> */}
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
