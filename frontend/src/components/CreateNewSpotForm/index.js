import {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './CreateNewSpot.css'

function CreateNewSpot() {
  const [country,setCountry] = useState('');
  const [address,setAddress] = useState('');
  const [city,setCity] = useState('');
  const [state,setState] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [basePrice, setBasePrice] = useState(0);
  const [photos, setPhotos] = useState('');

  const history = useHistory();
  
  const [errors,setValidationErrors] = useState({});
  
  useEffect(() => {
    const errors = {};
    
    if(!country) errors.country = "Country is required"
    if(!address) errors.address = "Address is required"
    if(!city) errors.city = "City is required"
    if(!state) errors.state = "State is required"
    if(!description) errors.description = "Description is required"
    if(description.length < 30) errors.description = "Description needs 30 or more characters";
    if(!title) errors.title = "Title is required"
    if(!basePrice) errors.basePrice = "BasePrice is required"
    // FIXME: PHOTOS ERRORS 
    if(Boolean(Object.keys(photos).length)) errors.photos = "Photos is required"
    let acceptedFiles = ['png','jpg','peg'];
    if(!acceptedFiles.includes(photos.slice(photos.length - 3))){
      errors.photos = "Image URL must end in .png, .jpg, or .jpeg";
    }

    setValidationErrors(errors) 
  }, [country,address,city,state,description,title,basePrice,photos])
  
  function onSubmit(e){
    e.preventDefault()
    const vals = {country,address,city,state,description,title,basePrice,photos};
    console.table(vals);
    window.alert(vals);
    // history.push('/')
  }
  return (
    <form
      className="create-spot-form"
      onSubmit={onSubmit}
    >
     <div className="user-information-create-spot">
      <h2>Create a Spot</h2>
      <div className="form-row">
       <div className="form-row-data">
       <label>
         Set a base price for your spot
         <input
           type="number"
           name="basePrice"
           value={basePrice}
           onChange={e=>setBasePrice(e.target.value)}
         />
       </label>
       <p className="errors">{errors.basePrice}</p>      
       </div>
      </div>
      <div className="form-row">
        <div className="form-row-data">
        <label>
          Country
          <input
            type="text"
            name="country"
            value={country}
            onChange={e=>setCountry(e.target.value)}
          />
        </label>
        <p className="errors">
          {errors.country}
          </p>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-data">
        <label>
          Country
          <input
            type="text"
            name="country"
            value={country}
            onChange={e=>setCountry(e.target.value)}
          />
        </label>
        <p className="errors">
          {errors.country}
          </p>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-data">
        <label>
          Country
          <input
            type="text"
            name="country"
            value={country}
            onChange={e=>setCountry(e.target.value)}
          />
        </label>
        <p className="errors">
          {errors.country}
          </p>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-data">
        <label>
          Country
          <input
            type="text"
            name="country"
            value={country}
            onChange={e=>setCountry(e.target.value)}
          />
        </label>
        <p className="errors">
          {errors.country}
          </p>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-data">
        <label>
          Country
          <input
            type="text"
            name="country"
            value={country}
            onChange={e=>setCountry(e.target.value)}
          />
        </label>
        <p className="errors">
          {errors.country}
        </p>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-data">
        <label>
          Country
          <input
            type="text"
            name="country"
            value={country}
            onChange={e=>setCountry(e.target.value)}
          />
        </label>
        <p className="errors">
          {errors.country}
          </p>
        </div>
      </div>
      <h2>Liven up your spot with photos</h2>
      <h3>Submit a link to at least one photo to publish your spot.</h3>
      <div className="form-row">
        <div className="form-row-data">
        <label>
          <input
            type="text"
            name="country"
            value={photos}
            onChange={e=>setPhotos(e.target.value)}
            placeholder="Preview Image URL"
          />
        </label>
        {<p className="errors">
          {errors.photos}
        </p>}
        </div>
      </div>
     
      <button
        type="submit"
        disabled={Boolean(Object.keys(errors).length)}
      >
        Create Spot
      </button>
     </div>
    </form>
  );
}

export default CreateNewSpot;