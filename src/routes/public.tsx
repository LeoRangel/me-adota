import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default PublicRouter;
