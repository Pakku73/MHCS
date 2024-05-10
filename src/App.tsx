import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';
import { Layout } from './layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
