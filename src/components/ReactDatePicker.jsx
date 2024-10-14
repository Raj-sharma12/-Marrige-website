import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {addDays, isWeekend} from 'date-fns'
const ReactDatePicker = () => {
    
  const [selectedDate,setSelectedDate] =useState(null);
    const handleDateChange = (date) =>{
        setSelectedDate(date);
    }
    
    // const minDate = new Date("2023-03-05");
    // const maxDate = new Date("2023-03-30");
    
    const isWeekendDays = (date) =>{
      return isWeekend(date);
    }
    const filterWeekends = (date) =>{
      return !isWeekendDays(date);
    }
  return (
    
    <div>
        <h1>Hello Date Picker</h1> 
        <DatePicker 
        
        selected={selectedDate} 
        onChange={handleDateChange} 
        dateFormat="DD/MM/YYYY; hh:mm"
        filterDate={filterWeekends}  
        // showTimeSelect
        // timeInputLabel={30}
        //      timeFormat='hh:mm'
         className='mx-10 border'/>
    </div>
  )
}

export default ReactDatePicker