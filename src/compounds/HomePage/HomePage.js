import React from 'react';
import '../HomePage/HomePage.css';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/image.png';
import image2 from '../../assets/image-2.avif';
import image3 from '../../assets/image-3.avif';
import image4 from '../../assets/image-4.jpg';


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
                    <div className="image-gallery">
                        <img src={image1} alt="image-1" />
                        <img src={image2} alt="image-2" />
                        <img src={image3} alt="image-3" />
                        <img src={image4} alt="image-4" />
                    </div>

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
