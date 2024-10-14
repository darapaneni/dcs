  import React, { useState } from 'react';
  import html2pdf from 'html2pdf.js';
  import './Rental_agreement.css';
  import emblem from '../../images/emblem.jpeg';
  import { Collapse, Grid2 } from '@mui/material';

  // Step 1: Define the Document component input required
  const SaleDeed = () =>
  { 
    const sellers=[

    ]
    const purchasers= [
    
    ]
    const [data, setData]=useState(sellers);
    const [data1, setData1]=useState(purchasers);
    const [showFlat, setShowFlat]=useState('flat');
    const [showSeller, setShowSeller]=useState('person');
    const [showPurchaser, setShowPurchaser]= useState('person');
    const handlesshowhide =(event)=>{
      const getuser = event.target.value;
      console.log(getuser);
      setShowFlat(getuser);
      console.log(showFlat);
    }
    const handlesshowhideSellerType =(event)=>{
      const getuser = event.target.value;
      console.log(getuser);
      setShowSeller(getuser);
      console.log(showFlat)
    }
    const handlesshowhidePurchaserType =(event)=>{
      const getuser = event.target.value;
      console.log(getuser);
      setShowPurchaser(getuser);
      console.log(showFlat)
    }
    const [flatData, setFlatData] =useState({
      FlatNumber :'',
      Floorno:'',
      Society:'',
	    Division:'',
	    Corporation:'',
    	Road:'',
	    Location:'',
	    Supersqfeet:'',
	    LandSqFeet:'',
	    Percentage:''
    })
    const [landData, setLandData ]=useState({
      Land:'',
      LandSize:'',
      RsPlotnum:'',
      LrPlotnum:'',
      RsKhaitnanum:'',
      LrKhaitannum:'',
      Moza:'',
      jlnum:'',
      Touzinum:'',
      PoliceStation:'',
      Subdistrict:'',
      District:''
    })
    const [sellerBuilder , setSellerBuilder] = useState( {
      SellerBuilderFulladdress: '',
      SellerBuilderName: '',
      SellerBuilderRegNum: ''
    })
    const [purchaserBuilder, setPurchaserBuilder]= useState({
      PurchaserBuilderFulladdress: '',
      PurchaserBuilderName: '',
      PurchaserBuilderRegNum: ''
 

    })
    const [ formData, setFormData ] = useState( {
      Day :'',
      Month: '',
      Year: '',
      PreviousOwner: '',
      FatherPreviousOwner: '',
      FatherPreviousOwnerDetail: '',
      PreviousSaleDeed: '', 
      RegOffice: '',
      Volume: '',
      FromPage: '',
      Topage: '',
      BeingNo: '',
      YearPrevSaledeed: '',
      InEstate: '',
      SellerFatherDeathdate: '',
      Amount: '',
      AmountInWords: '',
      AgreementDate: '',
      RecievedMoney: '',
      PropertyHandoverDate: '',
      OnNorth: '',
      OnSouth: '',
      OnEast: '',
      OnWest: '',
      Witness1: '',
      Witness2: ''
    });
    const [ formDataSelect, setFormDataSelect ] = useState( {
      SellerType: ''
    })
    const [ formDataSelect1, setFormDataSelect1 ] = useState( {
      PurchaserType: ''
    })
    const [ formDataSelect2, setFormDataSelect2 ] = useState( {
      TypeOfProperty: ''
    })

    //To handle input change
    const handleInputChange = ( field, value ) =>
    {
      console.log(field)
      console.log(value)
      setFormData( prevData => ( { ...prevData, [ field ]: value } ) );
      setFlatData( prevData => ( { ...prevData, [ field ]: value } ) );
      setLandData( prevData => ( { ...prevData, [ field ]: value } ));
    };

    //For downloading pdf
    const handleDownload = () =>
    {
      const element = document.getElementById( 'preview' );
      const today = new Date();
      const formattedDate = `${ today.getDate() }_${ today.getMonth() + 1 }_${ today.getFullYear() }`;

      const opt = {
        margin: 0.5,
        filename: `Sale_Deed_${ formattedDate }.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      const downloadButton = document.getElementById( 'downloadBtn' );
      downloadButton.style.display = 'none';

      const formcontainer = document.getElementById( 'form_container' );
      formcontainer.style.display = 'none';

      const previewcontainer = document.getElementById( 'preview' );
      previewcontainer.style.width = '90%';

      html2pdf().from( element ).set( opt ).save().then( () =>
      {
        downloadButton.style.display = 'block';
        formcontainer.style.display = 'block';
        previewcontainer.style.width = '48%';
      } );
    };
    function AddMember({setData}){
      function handleValues(event){
        event.preventDefault();
        const SellerName=event.target.parentElement.elements.SellerName.value;
        const SellerAddress=event.target.parentElement.elements.SellerAddress.value;
        const SellerAge=event.target.parentElement.elements.SellerAge.value;
        const SellerPan=event.target.parentElement.elements.SellerPan.value;
        const SellerCaste=event.target.parentElement.elements.SellerCaste.value;
        const SellerFather=event.target.parentElement.elements.SellerFather.value;
        const newMember={
          SellerName,
          SellerAddress,
          SellerAge,
          SellerPan,
          SellerCaste,
          SellerFather
        }
        setData(prevData=> prevData.concat(newMember))
      }
      return (
        <form>
          <input type="text" name="SellerName" placeholder='Enter Seller Name'/>
          <input type="text" name="SellerAddress" placeholder='Enter Seller Address'/>
          <input type="text" name="SellerAge" placeholder='Enter Seller Age'/>
          <input type="text" name="SellerPan" placeholder='Enter Seller PAN'/>
          <input type="text" name="SellerCaste" placeholder='Enter Seller Caste'/>
          <input type="text" name="SellerFather" placeholder='Enter Seller Fathers Name'/>    
          <button onClick={(e)=>handleValues(e)}>
            Add
          </button>
          </form>
      )
    }

    function AddMember1({setData1}){
      function handleValues(event){
        event.preventDefault();
        const PurchaserName=event.target.parentElement.elements.PurchaserName.value;
        const PurchaserAddress=event.target.parentElement.elements.PurchaserAddress.value;
        const PurchaserAge=event.target.parentElement.elements.PurchaserAge.value;
        const PurchaserPan=event.target.parentElement.elements.PurchaserPan.value;
        const PurchaserCaste=event.target.parentElement.elements.PurchaserCaste.value;
        const PurchaserFather=event.target.parentElement.elements.PurchaserFather.value;
        const newMember={
          PurchaserName,
          PurchaserAddress,
          PurchaserAge,
          PurchaserPan,
          PurchaserCaste,
          PurchaserFather
        }
        setData1(prevData=> prevData.concat(newMember))
      }
      return (
        <form>
          <input type="text" name="PurchaserName" placeholder='Enter Purchaser Name'/>
          <input type="text" name="PurchaserAddress" placeholder='Enter Purchaser Address'/>
          <input type="text" name="PurchaserAge" placeholder='Enter Purchaser Age'/>
          <input type="text" name="PurchaserPan" placeholder='Enter Purchaser PAN'/>
          <input type="text" name="PurchaserCaste" placeholder='Enter Purchaser Caste'/>
          <input type="text" name="PurchaserFather" placeholder='Enter Purchaser Fathers Name'/>    
          <button onClick={(e)=>handleValues(e)}>
            Add
          </button>
          </form>
      )
    }   
    return (
      <>
        <Grid2 container spacing={ 1 }>
          {/* <div className="container"> */ }
          <Grid2 size={ 6 }>
            <div className="form-container" id="form_container">
              <h2>Sale Deed Form</h2>
              <form id="saleDeedForm">
              

              { Object.keys( formDataSelect ).map( ( key ) => (
                  <label key={ key }>
                    { key.replace( /([A-Z])/g, ' $1' ) }:
                    <select id="sellerType" className='ra-input' onChange={(e)=>(handlesshowhideSellerType(e))} >
                      <option value="person">Person/Person's</option>
                      <option value="builder">Builder</option>
                  </select>
                    <br />
                  </label>
                ) ) }
                  <div>{
              showSeller==='person' && <AddMember setData={setData}/>  
  }</div>
                { Object.keys( formDataSelect1 ).map( ( key ) => (
                  <label key={ key }>
                    { key.replace( /([A-Z])/g, ' $1' ) }:
                    <select id="purchaserType" className='ra-input' onChange={(e)=>(handlesshowhidePurchaserType(e))}>
                    <option value="person" >Person/Person's</option>
                    <option value="builder">Builder</option>
                  </select>
                    <br />
                  </label>
                ) ) }
                <div>
              {
              showPurchaser==='person' && <AddMember1 setData1={setData1}/>
              }
              

    </div>

                { Object.keys( formDataSelect2 ).map( ( key ) => (
                  <label key={ key }>
                    { key.replace( /([A-Z])/g, ' $1' ) }:
                    <select  className='ra-input' onChange={(e)=>(handlesshowhide(e))}>
                      <option  value='flat'>Flat/Apartment</option>
                      <option value="land" >Land</option>
                  </select>
                    <br />
                  </label>
                ) ) }
                {
                  showFlat === 'flat' && Object.keys( flatData ).map( ( key ) => (
                    <label key={ key }>
                      { key.replace( /([A-Z])/g, ' $1' ) }:
          
                      <input className='ra-input'
                        type={ 'text'}
                        placeholder={ `Enter ${ key.replace( /([A-Z])/g, ' $1' ) }` }
                        onChange={ ( e ) => handleInputChange( key, e.target.value ) }
  
                      />
                      <br />
                    </label>
                  ) ) 
                }
                {
                  showFlat === 'land' && Object.keys( landData ).map( ( key ) => (
                    <label key={ key }>
                      { key.replace( /([A-Z])/g, ' $1' ) }:
          
                      <input className='ra-input'
                        type={ key.includes( 'Date' ) ? 'date' : ( key.includes( 'Rent' ) ? 'number' :'text' ) }
                        placeholder={ `Enter ${ key.replace( /([A-Z])/g, ' $1' ) }` }
                        onChange={ ( e ) => handleInputChange( key, e.target.value ) }
  
                      />
                      <br />
                    </label>
                  ) ) 
                }
                  
                { Object.keys( formData ).map( ( key ) => (
                  <label key={ key }>
                    { key.replace( /([A-Z])/g, ' $1' ) }:
        
                    <input className='ra-input'
                      type={ key.includes( 'Date' ) ? 'date' : ( key.includes( 'Rent' ) ? 'number' :'text' ) }
                      placeholder={ `Enter ${ key.replace( /([A-Z])/g, ' $1' ) }` }
                      onChange={ ( e ) => handleInputChange( key, e.target.value ) }

                    />
                    <br />
                  </label>
                ) ) }
            
              
                  
              </form>
            </div>
          </Grid2>
          <Grid2 size={ 6 }>
            {/* Preview Section*/ }
            <div className="preview-container" id="preview">
              <img src={ emblem } alt="Emblem" className="preview-image" />

              <h2>Deed of Sale</h2>
              <br />
              <br />
        <p className="preview-text">This DEED OF SALE is made and executed on this {formData.Day || '___________' } day of {formData.Month || '___________'}, Two Thousand {formData.Year || '___________'}</p>
  <br/>
  <br/>
  <div >BETWEEN</div>
  <br/>{showSeller==='person' &&
  <div id="person_seller" >
  <table name="sellers" id="sellers">
  <tr>
  <thead>
          <th>Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>PAN</th>
          <th>Caste</th>
          <th>Father's Name</th>
  </thead>
  {
          data.map((current) => (
            <tr>
              <td>{current.SellerName}</td>
              <td>{current.SellerAddress}</td>
              <td>{current.SellerAge}</td>
              <td>{current.SellerPan}</td>
              <td>{current.SellerCaste}</td>
              <td>{current.SellerFather}</td>
            </tr>
          ))

        }
  </tr>


  </table>
  </div>
  }
  <br/>
  {
  showSeller === 'builder' && 
  <div id="builder_seller" >

  <div >Builder {sellerBuilder.SellerBuilderName || '_______'}, Registered with registration number : {sellerBuilder.SellerBuilderRegNum || '_______'}, having its registered office at full address {sellerBuilder.SellerBuilderFulladdress || '_______'}.</div>

  </div>
  }
  <br/>
  <div >hereinafter called the &quot;SELLER&quot; (which expression shall mean and include his legal heirs, successors, successors-in-interest, executors, administrators, legal representatives and assigns) of the &nbsp;ONE PART.<br/></div>
  <br/>
  <div >AND</div>
  <br/>
  {
    showPurchaser === 'person' &&
  <div id="person_purchaser" >
  <table name="purchasers" id="purchasers">
  <thead>
          <th>Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>PAN</th>
          <th>Caste</th>
          <th>Father's Name</th>
  </thead>
  {
          data1.map((current) => (
            <tr>
              <td>{current.PurchaserName}</td>
              <td>{current.PurchaserAddress}</td>
              <td>{current.PurchaserAge}</td>
              <td>{current.PurchaserPan}</td>
              <td>{current.PurchaserCaste}</td>
              <td>{current.PurchaserFather}</td>
            </tr>
          ))

        }

  </table>
  </div>
  }
  <br/>
  {
    showPurchaser === 'builder' &&
  <div id="builder_purchaser" >

  <div >Builder {purchaserBuilder.PurchaserBuilderName || '_______'}, Registered with registration number : {purchaserBuilder.PurchaserBuilderName || '_______'} , having its registered office at full address {purchaserBuilder.PurchaserBuilderFulladdress || '_______'}.</div>

  </div>
  }

  <br/>
  <div >hereinafter called the &quot;PURCHASER&quot; (which expression shall mean and include his legal heirs, successors, successors-in-interest, executors, administrators, legal representatives and assigns) of the &nbsp;OTHER PART.<br/>The &nbsp;SELLER and the PURCHASER are hereinafter referred collectively as parties and individually as party.<br/></div>
  <br/>
  {

  showFlat ==='flat' && <div id="apartment" >WHEREAS the SELLER herein is the  owner of immovable property being Flat / Apartment No. {flatData.FlatNumber || '_______'} on the {flatData.Floorno || '_______'} Floor of the building known as {flatData.Society || '_______'}  situated at {flatData.Location || '_______'} and bearing Corporation No.{flatData.Location || '_______'},{flatData.Road || '_______'} Road, Division No. {flatData.Division || '_______'} , with a super built-up area of  {flatData.Supersqfeet || '_______'} sq.ft. together with  {flatData.Percentage || '_______'} % share of undivided interest in the land equivalent to {flatData.LandSqFeet || '_______'} sq.ft. along with common areas and facilities including car parking lot in the basement, which Flat / Apartment is morefully described in the schedule hereunder and hereinafter called the SCHEDULE PROPERTY</div>
  }
  <br/>
  {
  showFlat ==='land' && <div id="land" >WHEREAS the SELLER is the  owner, in possession and enjoyment of the piece and parcel of {landData.LandSize || '________'}  land measuring about {landData.LandSize  || '________'}  decimal, lying and situated in R.S. Plot Number {landData.RsPlotnum  || '________'} , corresponding L.R. Plot Number {landData.LrPlotnum ||  '________'} , Recorded in R.S. Khatian Number {landData.RsKhaitnanum  || '________'}  and L.R. Khatian Number {landData.LrKhaitannum || '_______'} , at Mouza {landData.Moza  || '________'} , J.L. Number {landData.jlnum  || '________'} , Touzi Number {landData.Touzinum || '________'} , under Police Station {landData.PoliceStation  || '________'} , Registration Sub-District {landData.Subdistrict  || '________'} , in the district of {landData.District  || '________'} , more fully and particularly described in the schedule here under written and hereafter referred to as the SCHEDULE PROPERTY</div>
  }
  <br/>
  <div >ANDWHEREAS the SCHEDULE PROPERTY was the self acquired property of deceased father of the SELLER and he purchased the same from Sri {formData.PreviousOwner  || '________'} , son of {formData.FatherPreviousOwner  || '________'}  of {formData.FatherPreviousOwnerDetail  || '________'} , by virtue of a Sale Deed dated {formData.PreviousSaleDeed  || '________'}, registered in the office of the {formData.RegOffice || '______'} , in Book 1, &nbsp;Volume No. {formData.Volume || '________'} , Pages {formData.FromPage  || '________'}  to {formData.Topage  || '________'} , Being Number {formData.BeingNo  || '________'} for the Year {formData.YearPrevSaledeed  || '________'}.<br/>ANDWHEREAS the said  died in-estate on {formData.InEstate  || '________'} leaving behind his only son namely, the SELLER herein, as the only legal heir.<br/>ANDWHEREAS the SELLER herein, as the only legal heirs of the deceased PreviousOwner, have become the absolute owner of the SCHEDULE PROPERTY since the death of his father {formData.SellerFatherDeathdate  || '________'} on and he has been enjoying the same with absolute right, title and interest sice then and he has clear and marketable title to the SCHEDULE PROPERTY.<br/>ANDWHEREAS the SELLER being in need of funds to meet his personal commitments and family expenses have decided to sell the SCHEDULE PROPERTY and the PURCHASER has agreed to purchase the same.<br/>ANDWHEREAS the SELLER agreed to sell, convey and transfer the SCHEDULE PROPERTY to the PURCHASER for a total consideration of &nbsp;Rs.{formData.Amount  || '________'}  (Rupees {formData.AmountInWords  || '________'} ) only and the PURCHASER herein agreed to purchase the same for the aforesaid consideration and to that effect the parties entered into an agreement on the {formData.AgreementDate || '______'}  .<br/>NOW THIS DEED OF SALE WITNESSETH:<br/>1.	THAT in pursuance of the aforesaid agreement and in consideration of a sum of Rs.{formData.Amount  || '________'}  (Rupees {formData.RecievedMoney  || '________'} ) only received by the SELLER in cash/cheque/bankdraft and upon receipt of the said entire consideration of Rs.{formData.Amount  || '________'}  (Rupees {formData.AmountInWords || '_______'} ) only (the SELLER doth hereby admit, acknowledge, acquit, release and discharge the PURCHASER from making further payment thereof) the SELLER doth hereby sells, conveys, transfers, and assigns unto and to the use of the PURCHASER the SCHEDULE PROPERTY together with the water ways, easements, advantages and appurtenances, and all estate, rights, title and interest of the SELLER to and upon the SCHEDULE PROPERTY TO HAVE AND TO HOLD the SCHEDULE PROPERTY hereby conveyed unto the PURCHASER absolutely and forever.<br/>2.	THAT THE SELLER DOTH HEREBY COVENANT WITH THE PURCHASER AS FOLLOWS:<br/>i.	That the SCHEDULE PROPERTY shall be quietly and peacefully entered into and held and enjoyed by the PURCHASER without any interference, interruption, or disturbance from the SELLER or any person claiming through or under him.<br/>ii.	That the SELLER have absolute &nbsp;right, title and full power to sell, convey and transfer unto the PURCHASER by way of absolute sale and that the SELLER have not done anything or knowingly suffered anything whereby their right and power to sell and convey the SCHEDULE PROPERTY to the PURCHASER is diminished. <br/>iii.	That the property is not subjected to any encumbrances, mortgages, charges, lien, attachments, claim, demand, acquisition proceedings by Government or any kind whatsoever and should thereby and the SELLER shall discharge the same from and out of his own fund and keep the PURCHASER indemnified.<br/>iv.	That the SELLER hereby declares with the PURCHASER that the SELLER have paid all the taxes, rates and other outgoings due to local bodies, revenue, urban and other authorities in respect of the SCHEDULE PROPERTY up to the date of execution of this sale deed and the PURCHASER shall bear and pay the same hereafter. &nbsp;If any arrears are found due for the earlier period, the same shall be discharged/borne by the SELLER.<br/>.	That the SELLER have handed over the vacant possession of the SCHEDULE PROPERTY to the PURCHASER on &nbsp;{formData.property_handover_date}  and delivered the connected original title document in respect of the SCHEDULE PROPERTY hereby conveyed on the date of execution of these presents.
  <br/>vi.	That the SELLER will at all times and at the cost of the PURCHASER execute, register or cause to be done, all such acts and deeds for perfecting the title to the PURCHASER in the property hereby sold and conveyed herein.
  <br/>vii.	That the SELLER do hereby covenants and assures that the PURCHASER is entitled to have mutation of his name in all public records, local body and also obtain all documents in the name of the PURCHASER and undertakes to execute any deed in this respect.
  </div>
  <div >SCHEDULE OF PROPERTY</div>
  {
  showFlat ==='flat' && <div id="apartment1" >&quot;Flat / Apartment No. {flatData.FlatNumber  || '________'}  on the {flatData.Floorno  || '________'}  Floor of the building known as {flatData.Society  || '________'} situated at {flatData.Location  || '________'}  and bearing Corporation No.{flatData.Corporation  || '________'} , {flatData.Road  || '________'}  Road, Division No. {flatData.Division  || '________'} , with a super built-up area of {flatData.Supersqfeet  || '________'}  sq.ft. together with {flatData.Percentage  || '________'} % share of undivided interest in the land equivalent to {flatData.LandSqFeet  || '________'}  sq.ft. along with common areas and facilities including car parking lot in the basement,butted and bounded by:&quot;</div>
  }
  {
  showFlat ==='land' && <div id="land1" >&quot;The piece and parcel of{landData.Land || '________'}  land measuring about {landData.LandSize  || '________'}  decimal, lying and situated in R.S. Plot Number {landData.RsPlotnum  || '________'} , corresponding L.R. Plot Number {landData.LrPlotnum ||  '________'} , Recorded in R.S. Khatian Number {landData.RsKhaitnanum  || '________'}  and L.R. Khatian Number {landData.LrKhaitannum || '_______'} , at Mouza {landData.Moza  || '________'} , J.L. Number {landData.jlnum  || '________'} , Touzi Number {landData.Touzinum || '________'} , under Police Station {landData.PoliceStation  || '________'} , Registration Sub-District {landData.Subdistrict  || '________'} , in the district of {landData.District  || '________'} </div>
  }
  <div >On the North	:{formData.OnNorth || '________'} <br/>On the South	:{formData.OnSouth || '________'} <br/>On the East	:{formData.OnEast || '________'} <br/>On the West	:{formData.OnWest || '________'} <br/>&nbsp;	 IN WITNESS WHEREOF the SELLER and the PURCHASER have set their signatures on the day month and year first above written.<br/></div>
  <div >SELLER ________	<br/>&nbsp;						 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br/>PURCHASER &nbsp; &nbsp; &nbsp;  ________<br/>						 &nbsp; &nbsp; &nbsp; &nbsp;<br/>WITNESSES:<br/><br/>1.{formData.Witness1} <br/><br/>2.{formData.Witness2}  <br/></div>
  </div>
              <button id="downloadBtn" onClick={ handleDownload }>Download PDF</button>
          
          </Grid2>
          {/* </div> */ }
        </Grid2>
      </>
    );
  };

  export default SaleDeed;