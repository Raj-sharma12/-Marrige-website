import React from 'react'
import Calendar from 'react-calendar';
import { useState,useEffect } from 'react';
import 'react-calendar/dist/Calendar.css'
import { Link } from 'react-router-dom';
import Countries from './Countries';

const Body = () => {

// countries
const [country,setCountry] = useState([]);
useEffect(() =>{
    countryData();
},[]);
const countryData = async () =>{
  const data = await fetch('https://restcountries.com/v3.1/all');
  const res = await data.json();
  console.log(res);
  setCountry(res);
}

const [countryName,setCountryName] = useState("");

const [showlist,setShowlist] = useState(false);
const showCountries =() =>{
showlist===false ?setShowlist(true):setShowlist(false); 
}
const handleCountrySelect = (country) => {
setCountryName(country); // Update the country name when selected
showCountries(false);
};
const handleInputChange = (e) => {
  setCountryName(e.target.value); // Allow manual editing of the input value
};

  
 
  const [visible, setVisible] = useState(false);

  // To demonstrate fade effect, toggle visibility after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // Fade in after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const [cal,setCal] = useState(false);
  const openCalander = () =>{
  cal === false ? setCal(true):setCal(false);
    // if(cal === 0){
    //   setCal(1);
      
      
    // }
    // else{
    //   setCal(0);
    // }
    
  }
  
  
  

  return (
    <div className='relative flex flex-wrap justify-center w-full h-screen'>
        <video src="/public/wedding.mp4 " autoPlay loop  muted className='absolute top-0 left-0 z-0 object-cover w-full h-full'  />
        {/* <div className='absolute z-10 px-5 mx-20 text-6xl font-bold text-white top-32'><h1 className='w-full h-full '>Search Your Wedding Place</h1>
        
        </div> */}
        
        <div className='absolute z-10 px-5 mx-20 text-6xl font-bold text-center text-white top-60'>
      <h1 className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        Search Your Wedding Place
      </h1>
    </div>
    <div className='absolute z-10 px-5 text-lg font-bold text-white top-80 '>
      <p className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        The Garden of Your Wedding Dreams......
      </p>
    </div>
        <div className='absolute z-10 flex flex-wrap items-center w-8/12 h-40 text-lg font-bold bg-white top-96 rounded-xl justify-evenly max-sm:max-h-96 ' >
            
            {/* //calander */}
            <div className='flex flex-col items-start'>
            <div className="flex justify-around w-64 py-2 border">
              
       <input type="text" placeholder='Enter date'  value={date.toDateString()}  className='font-mono font-light border-none focus:outline-none text-md'  onClick={openCalander}/>  <img src="https://cdn-icons-png.flaticon.com/128/833/833593.png" className='w-5 cursor-pointer' onClick={openCalander} />
        </div>
        
       { cal &&  <Calendar 
        onChange={handleDateChange} 
          value={date} 
          className={`absolute z-40 left-[35%] top-0 rounded-lg shadow-lg  `}
        />}
       
      
      </div>
    
      


{/* //location */}
           
      <div className='z-30 flex items-center justify-around w-64 '>
           <input type="text" placeholder='Search By City,marraige Venue' className='w-full px-1 py-2 font-normal border-none focus:outline-none text-md' onClick={showCountries} value={countryName} onChange={handleInputChange}/>
           <img   className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/128/484/484167.png"/>
           {/* <div className='flex flex-col items-center justify-center w-full h-auto top-52 '> */}
           {
  showlist && <div className='absolute z-50 h-48 overflow-y-scroll bg-white shadow-lg w-80 top-28 shadow-black'>
{country.map((i) =>{
  
  return (
      <>
   <div className='flex flex-row items-center justify-start w-full rounded-lg cursor-pointer hover:bg-gray-200' >  <img src={i.flags.png} className='w-6 h-4'/>  <li className='ml-4 font-bold list-none' onClick={() => handleCountrySelect( i.name.common)}> {i.name.common}</li> </div>

 </>
  
)

}
)

}
</div>
}
</div>
           
           
           
      
           
{/* //search button */}
    <Link to="/marriage-gardens">     <span className='flex items-center justify-center h-10 text-xl text-center text-white bg-green-500 rounded w-28 hover:text-green-500 hover:border-green-500 hover:bg-white hover:border'>  <button className='py-2 '>Search</button> <img src="https://cdn-icons-png.flaticon.com/128/545/545682.png" className='w-[20%] py-1 mx-2 '/> </span> </Link>
          

        </div>
        

    //  </div>
  )
}

export default Body