import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navigation from './Components/Constants/Navigation/Navigation';
import HomePage from './Components/Pages/HomePage/HomePage';
import Signup from './Components/Pages/Authentication/Signup';
import Login from './Components/Pages/Authentication/Login';
import Profile from './Components/Pages/Profile/Profile';
import BuyPass from './Components/Pages/BusPass/BuyPass';
import ViewPass from './Components/Pages/BusPass/ViewPass';
import TicketSection from './Components/Pages/TicketSection/TicketSection';
import Footer from './Components/Pages/HomePage/Footer/Footer';
import Purchase from './Components/Pages/TicketSection/Purchase';
import TicketHistory from './Components/Pages/TicketSection/TicketHistory';
import Booking from './Components/Pages/TicketSection/Booking';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/buy-pass' element={<BuyPass/>}/>
          <Route exact path='/view-pass' element={<ViewPass/>}/>
          <Route exact path='/ticket-counter' element={<TicketSection/>}/>
          <Route exact path='/purchase-ticket' element={<Purchase/>}/>
          <Route exact path='/bookings' element={<Booking/>}/>
          <Route exact path='/ticket-history' element={<TicketHistory/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
