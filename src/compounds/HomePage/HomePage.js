import React from 'react';
import '../HomePage/HomePage.css';
import { useNavigate } from 'react-router-dom'; 
import Image from '../../assets/Online-world.png';

const HomePage = () => {
    const navigate = useNavigate(); 

    const handleAddFarmerClick = () => {
        navigate('/add-formar'); 
    };

    const handleListClick = () => {
        navigate('/formar-list'); 
    };

    return (
        <div className="home-page">
            <div className="home-btm">
                <div className="container">
                    <div className="home-btm-2">
                        <div className="home-btm-cnt">
                            <h2>
                                Discover sustainable intensification technologies tailored to enhance soil health right in your location.
                            </h2>
                        </div>
                        <div className="home-btm-btn">
                            <div className="button-group">
                                <button className='primary' onClick={handleAddFarmerClick}>Add Farmer</button>
                                <button className='secondary' onClick={handleListClick}>List of Farmers</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
