import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import '../../css/Rental_agreement.css';
import emblem from '../../images/emblem.jpeg'

// Step 1: Define the Document component input required
const RentalAgreement = () => {
    const [formData, setFormData] = useState({
      LandlordName: '',
      TenantName: '',
      PropertyAddress: '',
      LeasePeriod: '',
      FromDate: '',
      ToDate: '',
      MonthlyRent: '',
      DepositAmount: ''
    });
  
    //To handle input change
    const handleInputChange = (field, value) => {
      setFormData(prevData => ({ ...prevData, [field]: value }));
    };
  
    //For downloading pdf
    const handleDownload = () => {
      const element = document.getElementById('preview');
      const today = new Date();
      const formattedDate = `${today.getDate()}_${today.getMonth() + 1}_${today.getFullYear()}`;
  
      const opt = {
        margin: 0.5,
        filename: `Rental_Agreement_${formattedDate}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
  
      html2pdf().from(element).set(opt).save();
    };
  
    //To display date in dd-mmm-yyyy format
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };


    //To dynamically display input fields from formData taking values from const RentalAgreement
    return (
      <div className="container">
        <div className="form-container">
          <h2>Rental Agreement Form</h2>
          <form id="rentalForm">
            {Object.keys(formData).map((key) => (
              <label key={key}>
                {key.replace(/([A-Z])/g, ' $1')}: 
                <input 
                  type={key.includes('Date') ? 'date' : (key.includes('Rent') || key.includes('Amount') ? 'number' : 'text')}
                  placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1')}`} 
                  onChange={(e) => handleInputChange(key, e.target.value)} 
                />
                <br />
              </label>
            ))}
          </form>
        </div>
        {/* Preview Section*/}       
        <div className="preview-container" id="preview">
        <img src={emblem} alt="Emblem" className="preview-image" />

          <h2>Rental Agreement Preview</h2>
          <br />
          <br />
          <div id="preview-box" className="preview-box">
            <h3 className="preview-text">1. Parties, Leased Property, Terms and Payment</h3>
            <p className="preview-text">This Agreement is made between <strong>{formData.LandlordName || '___________'}</strong> (Landlord) and <strong>{formData.TenantName || '___________'}</strong> (Tenant).</p>
            <p className="preview-text">The landlord hereby agrees to rent the property located at <strong>{formData.PropertyAddress || '___________'}</strong>.</p>
            <p className="preview-text">The lease period is <strong>{formData.LeasePeriod || '___________'}</strong>, starting from <strong>{formData.FromDate ? formatDate(formData.FromDate) : '___________'}</strong> to <strong>{formData.ToDate ? formatDate(formData.ToDate) : '___________'}</strong>.</p>
            <p className="preview-text">The agreed rent is Rs <strong>{formData.MonthlyRent ? `Rs ${formData.MonthlyRent}` : '___________'}</strong> per month.</p>
            <p className="preview-text">The deposit amount is Rs <strong>{formData.DepositAmount ? `Rs ${formData.DepositAmount}` : '___________'}</strong> to be paid at the execution of this Agreement.</p>
          
          <h3 className="preview-text">2. Use of Leased Property</h3>
          <p className="preview-text">The Landlord agrees to use the leased property as per the terms and conditions of this Agreement.</p>
          
          <h3 className="preview-text">3.Utilities</h3>
          <p>The Tenant agrees to pay for the utilities and other services used in the Property<br/>during the term of this Agreement.</p>
          
          <h3 className="preview-text">4.Repairs and damages</h3>
          <p>Any losses and damages to fixture furnishing shall be defrayed by the Tenant. If any<br/>reasonable repair is necessary for the fixture furnishing, the Tenant shall notify it to the<br/>Landlord. The Landlord shall defray reasonable repair costs of fixture furnishing.</p>
          
          <h3 className="preview-text">5. Termination</h3>
          <p>This Agreement automatically expires at the end of the specified period above.<br/>However, this Agreement shall be terminated with mutual written consent of the</p>
            
             {/* Signature Section */}
          <div className="signature-container">
            <div className="signature-box">
              <p>Landlord Signature:</p>
              <br/>
              <div className="signature-line"><strong>{formData.LandlordName || '___________'}</strong></div>
            </div>
            <div className="signature-box">
              <p>Tenant Signature:</p>
              <br/>
              <div className="signature-line"><strong>{formData.TenantName || '___________'}</strong></div>
            </div>
          </div>
        </div>
          <button id="downloadBtn" onClick={handleDownload}>Download PDF</button>
        </div>
      </div>
    );
  };
  
  export default RentalAgreement;