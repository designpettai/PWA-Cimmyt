// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './compounds/Header/Header';
// import HomePage from './compounds/HomePage/HomePage';
// import AddFormar from './compounds/AddFormar/AddFormar';
// import FormarDetail from './compounds/Formar-Detail/Formar-Detail';
// import FormarList from './compounds/FormarList/Formarlist';

// const App = () => { 
//     return (
//         <Router basename="/PWA-CIMMYT">
//             <div>
//                 <Header />
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/add-formar" element={<AddFormar />} />
//                     <Route path="/formar-detail" element={<FormarDetail />} />
//                     <Route path="/formar-list" element={<FormarList />} /> 
//                     <Route path="*" element={<HomePage />} /> {/* Redirect to home for unknown routes */}
//                 </Routes>
//             </div>
//         </Router>
//     );
// };
// export default App;

import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './compounds/Header/Header';
import HomePage from './compounds/HomePage/HomePage';
import AddFormar from './compounds/AddFormar/AddFormar';
import FormarDetail from './compounds/Formar-Detail/Formar-Detail';
import FormarList from './compounds/FormarList/Formarlist';

const App = () => {
    const [farmers, setFarmers] = useState([]);

    const handleAddFarmer = (farmerData) => {
        setFarmers((prevFarmers) => [...prevFarmers, farmerData]);
    };

    return (
        <Router basename="/PWA-CIMMYT">
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add-formar" element={<AddFormar onAddFarmer={handleAddFarmer} />} />
                    <Route path="/formar-detail" element={<FormarDetail farmers={farmers} />} />
                    <Route path="/formar-list" element={<FormarList farmers={farmers} />} />
                    <Route path="*" element={<HomePage />} /> 
                </Routes>
            </div>
        </Router>
    );
};

export default App;
