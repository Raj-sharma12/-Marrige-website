import React from 'react'
import { useEffect,useState } from 'react';
const Countries = () => {
   
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
  };

  return (
    <div className='flex flex-col items-center justify-center w-full h-auto'>

          <input type="text" placeholder='select your country' className='' onClick={showCountries}   value={countryName} />
        {
            showlist && <div className='h-56 mt-5 overflow-y-scroll border border-black'>
        {country.map((i) =>{
            
            return (
                <>
             <div className='flex flex-row items-center justify-start w-48 cursor-pointer hover:bg-gray-500'>  <img src={i.flags.png} className='w-6 h-4'/>  <li className='ml-4 font-bold list-none' onClick={() => handleCountrySelect( i.name.common)}> {i.name.common}</li> </div>
        
            
            </>
            
        )
        
        }
        )

        }
        </div>
        }
    </div>
)
}

export default Countries;