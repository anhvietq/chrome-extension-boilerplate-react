import React from 'react';
import '../../assets/img/Metaintro.jpeg';
import './Popup.css';
import NavBar from './Navbar';
import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import WalletScreen from './Screens/WalletScreen';
import RequestScreen from './Screens/RequestScreen';
import JobsScreen from './Screens/JobsScreen';
import JobMatch from './Screens/JobMatch';
import BadgeRequest from './Screens/BadgeRequest';
import SearchBar from './Screens/SearchBar';
import UserForm from './Screens/UserForm';


const Popup = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomeScreen />} />
          <Route path="Wallet" element={<WalletScreen />} />
          <Route path="Request" element={<RequestScreen />} />
          <Route path="Jobs" element={<JobsScreen />} />
          <Route path="Job Match" element={<JobMatch />} />
          <Route path='Search Bar' element={<SearchBar />} />
          <Route path="Badge Request" element={<BadgeRequest />} />
          <Route path="UserForm" element={<UserForm />} />
          <Route path="*" element={<Navigate to={`/`} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Popup;







