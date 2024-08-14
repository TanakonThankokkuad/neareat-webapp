import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import PlaceList from "./pages/PlaceList"
import PlaceDetail from './pages/PlaceDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

function App() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <BrowserRouter>
    {!isMobile && (
      <Dashboard/>
    )}
       <Navbar/>
       <Routes>
        <Route path="/" element={<PlaceList/>} />
        <Route path="/place/:id" element={<PlaceDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
