import React, { useState } from 'react';
import '../FormarList/Formar-list.css';
import { useNavigate } from 'react-router-dom';

const FarmerList = ({ farmers }) => {
    const navigate = useNavigate();

    const [locationSearch, setLocationSearch] = useState('');
    const [mobileSearch, setMobileSearch] = useState('');

    const handleAddClick = () => {
        navigate('/add-farmer');
    };

    const handleBack = () => {
        navigate(-1);
    };

    const colorMapping = {};
    'ABCDEFG'.split('').forEach(letter => colorMapping[letter] = '#009688');
    'HJKLMN'.split('').forEach(letter => colorMapping[letter] = '#FF5722');
    'OPQR'.split('').forEach(letter => colorMapping[letter] = '#3F51B5');
    'STUVWXYZ'.split('').forEach(letter => colorMapping[letter] = '#E91E63');



    const getColorForFirstLetter = (letter) => {
        return colorMapping[letter] || '#CCCCCC'; // Default color if not found
    };

    // Filtering farmers based on search input
    const filteredFarmers = farmers.filter(farmer => {
        const farmerMobile = farmer['farmer-mobile'] || '';
        const farmerLocation = farmer['farmer-location'] || '';

        const matchesLocation = locationSearch === '' || farmerLocation.toLowerCase().includes(locationSearch.toLowerCase());
        const matchesMobile = mobileSearch === '' || farmerMobile.includes(mobileSearch);

        return matchesLocation && matchesMobile;
    });

    return (
        <section className="farmer-detail">
            <div className="container">
                <h2 className="container-head">
                    <i className="fas fa-angle-left arrow-icon" onClick={handleBack} style={{ cursor: 'pointer' }}></i>
                    List of Farmers
                </h2>
                <div className="search-engine">
                    <div className="input-with-icon input-with-icon-right">
                        <input
                            type="text"
                            placeholder="Location"
                            value={locationSearch}
                            onChange={(e) => setLocationSearch(e.target.value)}
                        />
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="input-with-icon input-with-icon-left">
                        <i className="fas fa-search"></i>
                        <input
                            className="search"
                            type="text"
                            placeholder="Search Mobile Number"
                            value={mobileSearch}
                            onChange={(e) => setMobileSearch(e.target.value)}
                        />
                    </div>
                </div>
                <ul>
                    {filteredFarmers.length > 0 ? (
                        filteredFarmers.map((farmer, index) => {
                            const farmerName = farmer['farmer-name'] || 'Unnamed Farmer';
                            const farmerMobile = farmer['farmer-mobile'] || 'No Mobile';
                            const farmerLocation = farmer['farmer-location'] || 'Chennai';
                            const firstLetter = farmerName.charAt(0).toUpperCase();
                            const bgColor = getColorForFirstLetter(firstLetter); // Get color based on first letter

                            return (
                                <li key={index}>
                                    <div className="contact">
                                        <div className="avatar" style={{ backgroundColor: bgColor }}>
                                            {firstLetter}
                                        </div>
                                        <div className="info">
                                            <div className="name">
                                                <h2>{farmerName}</h2>
                                            </div>
                                            <div className="number">
                                                <h4>{farmerMobile}</h4>
                                            </div>
                                        </div>
                                        <div className="location">
                                            <span>{farmerLocation}</span>
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    ) : (
                        <div className="no-farmers">
                            <div className="no-farmer-content">
                                <div className="danger-icon">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </div>
                                <h4>No Farmers Found</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    )}
                </ul>
                <div className="button-group">
                    <button type="button" className="primary" onClick={handleAddClick}>Add Farmer</button>
                </div>
            </div>
        </section>
    );
};

export default FarmerList;
