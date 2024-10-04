import React from 'react';
import '../FormarList/Formar-list.css'
import { useNavigate } from 'react-router-dom';

const FarmerList = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/add-formar');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="formar-Detail">
      <div className="container">
        <h2 className="container-head">
          <i className="fas fa-angle-left arrow-icon" onClick={handleBack} style={{ cursor: 'pointer' }}></i>
          List of Farmers
        </h2>
        <div className="search-engine">
          <div className="input-with-icon input-with-icon-right">
            <input type="text" placeholder="Location" />
            <i className="fas fa-chevron-down"></i>
          </div>

          <div className="input-with-icon input-with-icon-left">
            <i className="fas fa-search"></i>
            <input className="search" type="text" placeholder="Search Mobile Number" />
          </div>
        </div>
        <div className="no-formars">
          <div className="no-formar-contenet">
            <div className="danger-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h4>Farmer is not here</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="button-group">
              <button type="button" className="primary" onClick={handleAddClick}>Add Farmer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FarmerList;
