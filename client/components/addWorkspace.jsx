import React, { useState } from 'react';
import axios from 'axios';

const AddWorkspace = () => {
  const [workspaceName, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [wifi, setWifi] = useState('');
  const [type, setType] = useState('');
  const [noise, setNoise] = useState('');
  const [outlets, setOutlets] = useState('');
  const [time, setTime] = useState('');
  const [laptopChecked, setLaptop] = useState(false);
  const [busy, setBusy] = useState('');
  const [outdoorChecked, setOutdoor] = useState(false);
  const [petChecked, setPetFriendly] = useState(false);
  const [url, setUrlAddress] = useState('');
  const [seating, setSeating] = useState('');
  const [additional, setAdditional] = useState('');

  // function to handle button click for add Space
  const handleSubmit = (event) => {
    // we want to pass all of the input values to an object to pass to the db
    event.preventDefault();

    const inputObj = {
      'workspaceName': workspaceName,
      'zipcode': zipCode,
      'address': address,
      'wifi': wifi,
      'type': type,
      'quiet': noise,
      'outlets': outlets,
      'timeLimit': time,
      'laptopRestrictions': laptopChecked,
      'crowded': busy,
      'outdoorSeating': outdoorChecked,
      'petFriendly': petChecked,
      'url': url,
      'seating': seating,
      'other': additional
    };

    // TODO: edge cases to check if required fields aren't entered
    if (workspaceName === '') {
      alert('Please enter a valid workspace name.');
    }

    // send POST request to server with new workspace info in body
    axios
      .post('/workspace', inputObj)
      .then((res) => {
        // panda whale - need something to respond so we know it successfully posted
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h6>Add a Workspace!</h6>
      <div className='workspace'>
        <form className='location_submission'>
          <input placeholder='Workspace Name' value={workspaceName} onChange={(e) => setName(e.target.value)} />
          <input placeholder='Street address' value={address} onChange={(e) => setAddress(e.target.value)} />
          <input placeholder='Zip code' value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          <label>
              Wifi:
              <select value={wifi}
                onChange={(e) => setWifi(e.target.value)}>
                <option value='Fast'>High speed and reliable</option>
                <option value='Moderate'>Moderate speed and reliable</option>
                <option value='Slow'>Slow and spotty</option>
                <option value='None'>Not available</option>
              </select>
          </label>
          <label>
              Type:
              <select value='Cafe'
                onChange={(e) => setType(e.target.value)}>
                <option value='Cafe'>Cafe</option>
                <option value='Bar'>Bar</option>
                <option value='Restaurant'>Restaurant</option>
              </select>
          </label>
          <label>
            Noise level:
            <select value='Quiet'
              onChange={(e) => setNoise(e.target.value)}>
              <option value='Quiet'>Quiet</option>
              <option value='Moderate'>Moderate</option>
              <option value='Loud'>Loud</option>
            </select>
          </label>
          <label>
            Outlets:
            <select value='Many and accessible'
              onChange={(e) => setOutlets(e.target.value)}>
              <option value='Many'>Many and accessible</option>
              <option value='Medium'>Medium</option>
              <option value='Few'>Few</option>
            </select>
          </label>
          <label>
            Laptop restrictions:
            <input type="checkbox" checked={laptopChecked} onChange={(e) => setLaptop(e.target.checked)} />
          </label>
          <label>
            Busy:
            <select 
              value='Very busy'
              onChange={(e) => setBusy(e.target.value)}>
              <option value='Very'>Very busy</option>
              <option value='Moderate'>Moderately busy </option>
              <option value='Slow'>Slow</option>
            </select>
          </label>
          <label>
            Outdoor seating:
            <input type="checkbox" checked={outdoorChecked} onChange={(e) => setOutdoor(e.target.checked)} />
          </label>
          <label>
            Pet friendly:
            <input type="checkbox" checked={petChecked} onChange={(e) => setPetFriendly(e.target.checked)} />
          </label>
          <input type='URL' placeholder='Website' value={url} onChange={(e) => setUrlAddress(e.target.value)} />
          <label>
            Seating:
            <select 
              value='0 - 10'
              onChange={(e) => setSeating(e.target.value)}>
              <option value='Small'>0 - 10</option>
              <option value='Medium'>10 - 25 </option>
              <option value='Large'>25 - 40</option>
            </select>
          </label>
          <input type='Additional' placeholder='Other' value={additional} onChange={(e) => setAdditional(e.target.value)} />
          <button onClick={handleSubmit} type='submit' className='btn-87'><span>Submit</span> <svg aria-hidden><circle></circle></svg></button>
        </form>
      </div>
    </>
  );
};

export default AddWorkspace;
