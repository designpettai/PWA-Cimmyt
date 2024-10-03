import React from "react";
import './Formar-detail.css';
import { useNavigate } from 'react-router-dom';

const FormarDetail = () => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/add-formar'); 
    };

    const handleListClick = () => {
        navigate('/formar-list'); 
    };
    return (
        <section className="formar-Detail">
            <div className="container">
                <div className="formar-detail-1">
                    <div className="formar-profile">
                        <i className="fas fa-user-circle fa-3x ash-icon"></i>
                    </div>
                    <div className="contact-info">
                        <h1>Sathyan</h1>
                        <p>Phone: +91 8790123111</p>
                        <p>Location: Chennai</p>
                    </div>
                </div>

                {/* Land Preparation Section */}
                <div className="land-Preparation">
                    <h2 className="container-head">Land Preparation</h2>
                    <div className="land-Preparation-do-does">
                        <div className="land-Preparation-do">
                            <div className="do">
                                <div className="do-heading">
                                    <h2>do</h2>
                                </div>
                                <div className="do-contenet">
                                    <div className="do-item">
                                        <p>Doubled-up legume rotation: Pigeon pea + soybean</p>
                                        <p>Doubled-up legume rotation: Pigeon pea + soybean</p>
                                        <p>Doubled-up legume rotation: Pigeon pea + soybean</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="land-Preparation-dont">
                            <div className="dont">
                                <div className="dont-heading">
                                    <h2>dont</h2>
                                </div>
                                <div className="dont-contenet">
                                    <div className="dont-item">
                                        <p>Planting Density: Low maize density</p>
                                        <p>Planting Density: Low maize density</p>
                                        <p>Planting Density: Low maize density</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Choice of Doubled-up Legume Rotation (DLR) Crops */}
                <div className="land-Preparation">
                    <h2 className="container-head">Choice of Doubled-up Legume Rotation (DLR) Crops</h2>
                    <div className="land-Preparation-do-does">
                        <div className="land-Preparation-do">
                            <div className="do">
                                <div className="do-heading">
                                    <h2>do</h2>
                                </div>
                                <div className="do-contenet">
                                    <div className="do-item">
                                        <p>Legume rotation: Pigeon pea + soybean</p>
                                        <p>Legume rotation: Pigeon pea + cowpea</p>
                                        <p>Legume rotation: Pigeon pea + groundnut</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="land-Preparation-dont">
                            <div className="dont">
                                <div className="dont-heading">
                                    <h2>dont</h2>
                                </div>
                                <div className="dont-contenet">
                                    <div className="dont-item">
                                        <p>Planting Density: Low maize density</p>
                                        <p>Planting Density: Low maize density</p>
                                        <p>Planting Density: Low maize density</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nutrient Management Section */}
                <div className="land-Preparation">
                    <h2 className="container-head">Nutrient Management</h2>
                    <div className="land-Preparation-do-does">
                        <div className="land-Preparation-do">
                            <div className="do">
                                <div className="do-heading">
                                    <h2>do</h2>
                                </div>
                                <div className="do-contenet">
                                    <div className="do-item">
                                        <p>Livestock Manure: High quality manure (poultry/pig)</p>
                                        <p>Combined Fertilizer: Low quality manure + N fertilizer</p>
                                        <p>Combined Fertilizer: High quality manure + N fertilizer</p>
                                        <p>Nutrient Management: Inorganic Fertilizer - NPK & Urea</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="land-Preparation-dont">
                            <div className="dont">
                                <div className="dont-heading">
                                    <h2>dont</h2>
                                </div>
                                <div className="dont-contenet">
                                    <div className="dont-item">
                                        <p>Planting Density: Low maize density</p>
                                        <p>Planting Density: Low maize density</p>
                                        <p>Planting Density: Low maize density</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Agroforestry Section */}
                <div className="land-Preparation">
                    <h2 className="container-head">Agroforestry</h2>
                    <div className="land-Preparation-do-does">
                        <div className="land-Preparation-do">
                            <div className="do">
                                <div className="do-heading">
                                    <h2>do</h2>
                                </div>
                                <div className="do-contenet">
                                    <div className="do-item">
                                        <p>Gliricidia-maize intercropping</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="land-Preparation-dont">
                            <div className="dont">
                                <div className="dont-heading">
                                    <h2>dont</h2>
                                </div>
                                <div className="dont-contenet">
                                    <div className="dont-item">
                                        <p>Biomass transfer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button-group">
                    <button type="button" className="primary" onClick={handleAddClick}>AddFormar</button>
                    <button type="button" className="secondary" onClick={handleListClick}>See Farmers List</button>
                </div>

            </div>
        </section>
    );
};

export default FormarDetail;

