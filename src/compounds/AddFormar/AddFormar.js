import React, { useState, useCallback } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './AddFormar.css';

const AddFormar = ({ onAddFarmer }) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
    const [isExtensionOfficer, setIsExtensionOfficer] = useState(false);
    const [formData, setFormData] = useState({});
    const [formCompleted, setFormCompleted] = useState([false, false, false]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();    
    const location = useLocation();
    const { farmers } = location.state || { farmers: [] }; 
    const validateForm = () => {
        const newErrors = {};
        const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
        const validateMobile = (mobile) => /^\d{10}$/.test(mobile);
        const validateOfficerId = (id) => /^\d+$/.test(id);

        if (currentActiveIndex === 0) {
            const name = formData['farmer-name'] || '';
            const mobile = formData['farmer-mobile'] || '';
    
            // Checking for existing name and mobile number
            const isNameExists = farmers.some(farmer => farmer['farmer-name'] === name);
            const isMobileExists = farmers.some(farmer => farmer['farmer-mobile'] === mobile);
    
            if (!name) {
                newErrors.name = "Name is required";
            } else if (!validateName(name)) {
                newErrors.name = "Name can only contain letters and spaces";
            } else if (isNameExists) {
                newErrors.name = "Name already exists";
            }
    
            if (!mobile) {
                newErrors.mobile = "Mobile number is required";
            } else if (!validateMobile(mobile)) {
                newErrors.mobile = "Mobile number must be exactly 10 digits";
            } else if (isMobileExists) {
                newErrors.mobile = "Mobile number already exists";
            }
    
        } else if (currentActiveIndex === 1) {
            const agroZone = formData['agro-zone'] || '';
            const soilTexture = formData['soil-texture'] || '';
    
            if (!agroZone) {
                newErrors.agroZone = "Agro-climatic zone is required";
            }
    
            if (!soilTexture) {
                newErrors.soilTexture = "Soil texture is required";
            }
        } else if (currentActiveIndex === 2 && isExtensionOfficer) {
            const officerName = formData['officer-name'] || '';
            const officerId = formData['officer-id'] || '';
    
            if (!officerName) {
                newErrors.officerName = "Your name is required";
            } else if (!validateName(officerName)) {
                newErrors.officerName = "Name can only contain letters and spaces";
            }
    
            if (!officerId) {
                newErrors.officerId = "Your ID is required";
            } else if (!validateOfficerId(officerId)) {
                newErrors.officerId = "Officer ID must be a number";
            }
        }
    
        return newErrors;
    
    };

    const handleContinue = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            setFormCompleted((prev) => {
                const newCompleted = [...prev];
                newCompleted[currentActiveIndex] = true;
                return newCompleted;
            });
            setCurrentActiveIndex(currentActiveIndex + 1);
        }
    };

    const handleYesClick = () => {
        setIsExtensionOfficer(true);
    };

    const handleNoClick = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            onAddFarmer(formData);
        }
        navigate('/formar-detail');
    };

    const handleBack = useCallback(() => {
        if (currentActiveIndex > 0) {
            setCurrentActiveIndex(currentActiveIndex - 1);
        }
    }, [currentActiveIndex]);


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            onAddFarmer(formData);
            navigate('/formar-detail');
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="add-formar">
            <div className="container">
                <ol className="Add-form-Level">
                    {[...Array(3)].map((_, index) => (
                        <li
                            key={index}
                            className={`Add-form-Level-list ${currentActiveIndex >= index ? 'active' : ''}`}
                            onClick={() => formCompleted[index] && setCurrentActiveIndex(index)}
                        >
                            <h2
                                style={{
                                    backgroundColor: formCompleted[index] ? '#279A82' : 'transparent',
                                    color: formCompleted[index] ? '#fff' : (currentActiveIndex === index ? '#279A82' : '#D1D5DB'),
                                }}
                            >
                                {index + 1}
                            </h2>
                            <p className='Para-list'>
                                {index === 0 ? 'Personal Details' : index === 1 ? 'Farm Details' : 'My Details'}
                            </p>
                        </li>
                    ))}
                </ol>

                <div className="form-container">
                    {currentActiveIndex === 0 && !isExtensionOfficer && (
                        <div className="form-detail">
                            <h1 className="container-head">
                                <i className="fas fa-angle-left arrow-icon" onClick={handleBack} style={{ cursor: 'pointer' }}></i>
                                Farmer Details
                            </h1>
                            <form id="farmer-form">
                                <div className="form-group">
                                    <label htmlFor="farmer-name">Name of the Farmer</label>
                                    <input
                                        type="text"
                                        id="farmer-name"
                                        placeholder="Enter farmer name"
                                        className={errors.name ? "input-error" : ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {errors.name && <p className="error">{errors.name}</p>}
                                </div>
                                <div className="form-group child2">
                                    <label htmlFor="farmer-mobile">Mobile Number of the Farmer</label>
                                    <input
                                        type="tel"
                                        id="farmer-mobile"
                                        placeholder="Enter farmer mobile number"
                                        className={errors.mobile ? "input-error" : ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {errors.mobile && <p className="error">{errors.mobile}</p>}
                                </div>
                                <button type="button" className='primary' onClick={handleContinue}>Continue</button>
                            </form>
                        </div>
                    )}

                    {currentActiveIndex === 1 && !isExtensionOfficer && (
                        <div className="form-detail">
                            <h1 className="container-head">
                                <i className="fas fa-angle-left arrow-icon" onClick={handleBack} style={{ cursor: 'pointer' }}></i>
                                Farm Details
                            </h1>

                            <form id="farm-details-form">
                                <div className="form-group">
                                    <label htmlFor="agro-zone">Agro-climatic zone</label>
                                    <div className="select-container">
                                        <select id="agro-zone" className={errors.agroZone ? "input-error" : ""} onChange={handleInputChange} required>
                                            <option value="">Select Agro-climatic zone</option>
                                            <option value="Lakeshore">Lakeshore</option>
                                            <option value="Mid-Altitude">Mid-Altitude</option>
                                            <option value="High-Altitude">High-Altitude</option>
                                        </select>
                                    </div>
                                    {errors.agroZone && <p className="error">{errors.agroZone}</p>}
                                </div>
                                <div className="form-group child2">
                                    <label htmlFor="soil-texture">Soil texture</label>
                                    <div className="select-container">
                                        <select id="soil-texture" className={errors.soilTexture ? "input-error" : ""} onChange={handleInputChange} required>
                                            <option value="">Select soil texture</option>
                                            <option value="Sandy">Sandy</option>
                                            <option value="Clayey">Clayey</option>
                                        </select>
                                    </div>
                                    {errors.soilTexture && <p className="error">{errors.soilTexture}</p>}
                                </div>
                                <button type="button" className='primary' onClick={handleContinue}>Continue</button>
                            </form>
                        </div>
                    )}

                    {currentActiveIndex === 2 && !isExtensionOfficer && (
                        <div className="form-detail">
                            <h1 className="container-head">
                                <i className="fas fa-angle-left arrow-icon" onClick={handleBack} style={{ cursor: 'pointer' }}></i>
                                Extension Officer Details
                            </h1>
                            <form id="extension-officer-form">
                                <div className="form-group">
                                    <label className='ex-select'>Are you an Extension Officer?</label>
                                    <div className="button-group child2">
                                        <button type="button" className="primary" onClick={handleYesClick}>Yes</button>
                                        <button type="button" className="secondary" onClick={handleNoClick}>No</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}

                    {isExtensionOfficer && (
                        <div className="form-detail">
                            <h1 className="container-head">
                                <i className="fas fa-angle-left arrow-icon" onClick={handleBack} style={{ cursor: 'pointer' }}></i>
                                Extension Officer Details
                            </h1>
                            <form id="extension-officer-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="officer-name">Your Name</label>
                                    <input
                                        type="text"
                                        id="officer-name"
                                        placeholder="Enter your name here"
                                        className={errors.officerName ? "input-error" : ""}
                                        onChange={handleInputChange}
                                    />
                                    {errors.officerName && <p className="error">{errors.officerName}</p>}
                                </div>
                                <div className="form-group child2">
                                    <label htmlFor="officer-id">Your ID</label>
                                    <input
                                        type="text"
                                        id="officer-id"
                                        placeholder="Enter your officer ID"
                                        className={errors.officerId ? "input-error" : ""}
                                        onChange={handleInputChange}
                                    />
                                    {errors.officerId && <p className="error">{errors.officerId}</p>}
                                </div>
                                <button type="submit" className="primary">Submit</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddFormar;
