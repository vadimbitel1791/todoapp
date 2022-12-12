import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyAlHRrfArAQE8KbQniXmodFcBSnAO5wFOs',
    authDomain: 'todo-app-258c7.firebaseapp.com',
    projectId: 'todo-app-258c7',
    storageBucket: 'todo-app-258c7.appspot.com',
    messagingSenderId: '724580555610',
    appId: '1:724580555610:web:be7b95cecaef3536f93163',
    measurementId: 'G-MH9RQC0SM8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
