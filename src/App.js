import Layout from './Layout';
import Home from './Home';
import NewSession from './NewSession';
import SessionPage from './SessionPage';

import { Route, Routes } from 'react-router-dom';
import Missing from './Missing';
import PlayerPage from './PlayerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new-session/" element={<NewSession />} />
          <Route path="session/:id" element={<SessionPage />} />
          <Route path='player/:id' element={<PlayerPage />} />
          <Route path="*" element={<Missing />} />
      </Route>
  </Routes>
  );
}

export default App;