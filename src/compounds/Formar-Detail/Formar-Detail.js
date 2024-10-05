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
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <section className="formar-Detail">
            <div className="container">
                <h2 className="container-head">
                    <i className="fas fa-angle-left arrow-icon" onClick={handleBack} style={{ cursor: 'pointer' }}></i>
                    Formar Detail
                </h2>

                <div className="contact">
                    <div className="avatar">
                        S
                    </div>
                    <div className="info">
                        <div className="name">
                            <h2>Sathyan</h2>
                        </div>
                        <div className="number">
                            <h4>+91 8790123111</h4>
                        </div>
                    </div>
                    <div className="location">
                        <span>Chennai</span>
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                </div>


                {/* Land Preparation Section */}
                <div className="land-Preparation">
                    <h2 className="container-head">Land Preparation</h2>
                    <div className="land-Preparation-do-does">
                        <div className="land-Preparation-do">
                            <div className="do">
                                <div className="do-heading">
                                    <h2>
                                        <svg className="thumbs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g id="Thumb up">
                                                <g id="Icon">
                                                    <path d="M1.6001 8.4001C1.6001 7.73736 2.13736 7.2001 2.8001 7.2001C3.46284 7.2001 4.0001 7.73736 4.0001 8.4001V13.2001C4.0001 13.8628 3.46284 14.4001 2.8001 14.4001C2.13736 14.4001 1.6001 13.8628 1.6001 13.2001V8.4001Z" fill="white" />
                                                    <path d="M4.8001 8.26676V12.6112C4.8001 13.2173 5.1425 13.7713 5.68456 14.0423L5.72443 14.0623C6.16877 14.2844 6.65873 14.4001 7.15552 14.4001H11.4884C12.2511 14.4001 12.9078 13.8618 13.0573 13.1139L14.0173 8.31388C14.2154 7.32382 13.4581 6.4001 12.4484 6.4001H9.6001V3.2001C9.6001 2.31644 8.88375 1.6001 8.0001 1.6001C7.55827 1.6001 7.2001 1.95827 7.2001 2.4001V2.93343C7.2001 3.62582 6.97553 4.29952 6.5601 4.85343L5.4401 6.34676C5.02467 6.90067 4.8001 7.57438 4.8001 8.26676Z" fill="white" />
                                                </g>
                                            </g>
                                        </svg>
                                        do
                                    </h2>
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
                                    <h2>
                                        <svg className="thumbs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g id="Thumb down">
                                                <g id="Icon">
                                                    <path d="M14.4 7.6001C14.4 8.26284 13.8628 8.8001 13.2 8.8001C12.5373 8.8001 12 8.26284 12 7.6001V2.8001C12 2.13736 12.5373 1.6001 13.2 1.6001C13.8628 1.6001 14.4 2.13736 14.4 2.8001V7.6001Z" fill="white" />
                                                    <path d="M11.2 7.73343V3.38895C11.2 2.78292 10.8576 2.2289 10.3156 1.95787L10.2757 1.93793C9.83136 1.71576 9.3414 1.6001 8.84461 1.6001L4.51172 1.6001C3.74903 1.6001 3.09236 2.13843 2.94279 2.88631L1.98279 7.68631C1.78477 8.67638 2.54204 9.6001 3.55171 9.6001H6.40003V12.8001C6.40003 13.6838 7.11637 14.4001 8.00003 14.4001C8.44186 14.4001 8.80003 14.0419 8.80003 13.6001V13.0668C8.80003 12.3744 9.0246 11.7007 9.44003 11.1468L10.56 9.65343C10.9755 9.09952 11.2 8.42582 11.2 7.73343Z" fill="white" />
                                                </g>
                                            </g>
                                        </svg>dont
                                    </h2>

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
                                    <h2>
                                        <svg className="thumbs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g id="Thumb up">
                                                <g id="Icon">
                                                    <path d="M1.6001 8.4001C1.6001 7.73736 2.13736 7.2001 2.8001 7.2001C3.46284 7.2001 4.0001 7.73736 4.0001 8.4001V13.2001C4.0001 13.8628 3.46284 14.4001 2.8001 14.4001C2.13736 14.4001 1.6001 13.8628 1.6001 13.2001V8.4001Z" fill="white" />
                                                    <path d="M4.8001 8.26676V12.6112C4.8001 13.2173 5.1425 13.7713 5.68456 14.0423L5.72443 14.0623C6.16877 14.2844 6.65873 14.4001 7.15552 14.4001H11.4884C12.2511 14.4001 12.9078 13.8618 13.0573 13.1139L14.0173 8.31388C14.2154 7.32382 13.4581 6.4001 12.4484 6.4001H9.6001V3.2001C9.6001 2.31644 8.88375 1.6001 8.0001 1.6001C7.55827 1.6001 7.2001 1.95827 7.2001 2.4001V2.93343C7.2001 3.62582 6.97553 4.29952 6.5601 4.85343L5.4401 6.34676C5.02467 6.90067 4.8001 7.57438 4.8001 8.26676Z" fill="white" />
                                                </g>
                                            </g>
                                        </svg>
                                        do
                                    </h2>
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
                                    <h2>
                                        <svg className="thumbs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g id="Thumb down">
                                                <g id="Icon">
                                                    <path d="M14.4 7.6001C14.4 8.26284 13.8628 8.8001 13.2 8.8001C12.5373 8.8001 12 8.26284 12 7.6001V2.8001C12 2.13736 12.5373 1.6001 13.2 1.6001C13.8628 1.6001 14.4 2.13736 14.4 2.8001V7.6001Z" fill="white" />
                                                    <path d="M11.2 7.73343V3.38895C11.2 2.78292 10.8576 2.2289 10.3156 1.95787L10.2757 1.93793C9.83136 1.71576 9.3414 1.6001 8.84461 1.6001L4.51172 1.6001C3.74903 1.6001 3.09236 2.13843 2.94279 2.88631L1.98279 7.68631C1.78477 8.67638 2.54204 9.6001 3.55171 9.6001H6.40003V12.8001C6.40003 13.6838 7.11637 14.4001 8.00003 14.4001C8.44186 14.4001 8.80003 14.0419 8.80003 13.6001V13.0668C8.80003 12.3744 9.0246 11.7007 9.44003 11.1468L10.56 9.65343C10.9755 9.09952 11.2 8.42582 11.2 7.73343Z" fill="white" />
                                                </g>
                                            </g>
                                        </svg>dont
                                    </h2>
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
                            <div style={{ height: '300px' }} className="do">
                                <div className="do-heading">
                                    <h2>
                                        <svg className="thumbs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g id="Thumb up">
                                                <g id="Icon">
                                                    <path d="M1.6001 8.4001C1.6001 7.73736 2.13736 7.2001 2.8001 7.2001C3.46284 7.2001 4.0001 7.73736 4.0001 8.4001V13.2001C4.0001 13.8628 3.46284 14.4001 2.8001 14.4001C2.13736 14.4001 1.6001 13.8628 1.6001 13.2001V8.4001Z" fill="white" />
                                                    <path d="M4.8001 8.26676V12.6112C4.8001 13.2173 5.1425 13.7713 5.68456 14.0423L5.72443 14.0623C6.16877 14.2844 6.65873 14.4001 7.15552 14.4001H11.4884C12.2511 14.4001 12.9078 13.8618 13.0573 13.1139L14.0173 8.31388C14.2154 7.32382 13.4581 6.4001 12.4484 6.4001H9.6001V3.2001C9.6001 2.31644 8.88375 1.6001 8.0001 1.6001C7.55827 1.6001 7.2001 1.95827 7.2001 2.4001V2.93343C7.2001 3.62582 6.97553 4.29952 6.5601 4.85343L5.4401 6.34676C5.02467 6.90067 4.8001 7.57438 4.8001 8.26676Z" fill="white" />
                                                </g>
                                            </g>
                                        </svg>
                                        do
                                    </h2>
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
                            <div style={{ height: '300px' }} className="dont">
                                <div className="dont-heading">
                                    <h2>
                                        <svg className="thumbs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g id="Thumb down">
                                                <g id="Icon">
                                                    <path d="M14.4 7.6001C14.4 8.26284 13.8628 8.8001 13.2 8.8001C12.5373 8.8001 12 8.26284 12 7.6001V2.8001C12 2.13736 12.5373 1.6001 13.2 1.6001C13.8628 1.6001 14.4 2.13736 14.4 2.8001V7.6001Z" fill="white" />
                                                    <path d="M11.2 7.73343V3.38895C11.2 2.78292 10.8576 2.2289 10.3156 1.95787L10.2757 1.93793C9.83136 1.71576 9.3414 1.6001 8.84461 1.6001L4.51172 1.6001C3.74903 1.6001 3.09236 2.13843 2.94279 2.88631L1.98279 7.68631C1.78477 8.67638 2.54204 9.6001 3.55171 9.6001H6.40003V12.8001C6.40003 13.6838 7.11637 14.4001 8.00003 14.4001C8.44186 14.4001 8.80003 14.0419 8.80003 13.6001V13.0668C8.80003 12.3744 9.0246 11.7007 9.44003 11.1468L10.56 9.65343C10.9755 9.09952 11.2 8.42582 11.2 7.73343Z" fill="white" />
                                                </g>
                                            </g>
                                        </svg>dont
                                    </h2>
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
                                    <h2>
                                        <svg className="thumbs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g id="Thumb up">
                                                <g id="Icon">
                                                    <path d="M1.6001 8.4001C1.6001 7.73736 2.13736 7.2001 2.8001 7.2001C3.46284 7.2001 4.0001 7.73736 4.0001 8.4001V13.2001C4.0001 13.8628 3.46284 14.4001 2.8001 14.4001C2.13736 14.4001 1.6001 13.8628 1.6001 13.2001V8.4001Z" fill="white" />
                                                    <path d="M4.8001 8.26676V12.6112C4.8001 13.2173 5.1425 13.7713 5.68456 14.0423L5.72443 14.0623C6.16877 14.2844 6.65873 14.4001 7.15552 14.4001H11.4884C12.2511 14.4001 12.9078 13.8618 13.0573 13.1139L14.0173 8.31388C14.2154 7.32382 13.4581 6.4001 12.4484 6.4001H9.6001V3.2001C9.6001 2.31644 8.88375 1.6001 8.0001 1.6001C7.55827 1.6001 7.2001 1.95827 7.2001 2.4001V2.93343C7.2001 3.62582 6.97553 4.29952 6.5601 4.85343L5.4401 6.34676C5.02467 6.90067 4.8001 7.57438 4.8001 8.26676Z" fill="white" />
                                                </g>
                                            </g>
                                        </svg>
                                        do
                                    </h2>
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
                                    <h2>
                                        <svg className="thumbs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g id="Thumb down">
                                                <g id="Icon">
                                                    <path d="M14.4 7.6001C14.4 8.26284 13.8628 8.8001 13.2 8.8001C12.5373 8.8001 12 8.26284 12 7.6001V2.8001C12 2.13736 12.5373 1.6001 13.2 1.6001C13.8628 1.6001 14.4 2.13736 14.4 2.8001V7.6001Z" fill="white" />
                                                    <path d="M11.2 7.73343V3.38895C11.2 2.78292 10.8576 2.2289 10.3156 1.95787L10.2757 1.93793C9.83136 1.71576 9.3414 1.6001 8.84461 1.6001L4.51172 1.6001C3.74903 1.6001 3.09236 2.13843 2.94279 2.88631L1.98279 7.68631C1.78477 8.67638 2.54204 9.6001 3.55171 9.6001H6.40003V12.8001C6.40003 13.6838 7.11637 14.4001 8.00003 14.4001C8.44186 14.4001 8.80003 14.0419 8.80003 13.6001V13.0668C8.80003 12.3744 9.0246 11.7007 9.44003 11.1468L10.56 9.65343C10.9755 9.09952 11.2 8.42582 11.2 7.73343Z" fill="white" />
                                                </g>
                                            </g>
                                        </svg>dont
                                    </h2>
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

