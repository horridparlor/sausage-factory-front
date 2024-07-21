import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MetaTags from "./components/common/MetaTags";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MetaTags
            title="State Logic"
            description="Amazing productivity tool of the future"
            keywords="Spacial logic model, AI, Artificial intelligence, Productivity tool, B2B Solutions"
        />
        <App/>
    </React.StrictMode>
);

reportWebVitals();
