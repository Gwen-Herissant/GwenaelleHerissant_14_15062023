import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import EmployeeList from './pages/EmployeeList';

/**
 * Generates routes for react-router
 * @returns site's routes
 */

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
