import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css'; 
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase';
import 'firebase/auth';


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={"Loading..."}> 
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);




