
import ReactDOM from 'react-dom/client'; // Note the `react-dom/client` import in React 18+
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);