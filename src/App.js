import './App.css';
import {   Route, Routes} from 'react-router-dom';
import ServiceListpage from './ServiceListpage';
import BookingsPage from './BookingsPage';
import ServiceDetailsPage from './ServiceDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/"  element={<ServiceListpage />} />
          <Route path="/services/:id"  exact element={<ServiceDetailsPage />} />
          <Route path="/bookings" exact  element={<BookingsPage />} />
      </Routes>
 
    
      
    </div>
  );
}

export default App;
