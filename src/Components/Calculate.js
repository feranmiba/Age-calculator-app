import React, { useState } from 'react'
import Outcome from './Outcome'

function Calculate() {
    const [DOBYear, SetYear] = useState()
    const [DOBMonth, SetMonth] = useState()
    const [DOBDay, SetDay] = useState()
    const [errorMessage, setErrorMessage] = useState()
    const [errMessage, setErrMessage] = useState()
    const [erMessage, setErMessage] = useState()



    const getDay = (e) => {
        if (e.target.value < 31) {
            SetDay(e.target.value)   
            setErrorMessage(``)
        } else {
            setErrorMessage(`Must be a valid day`)
        }
    }
    const getMonth = (e) => {
        if (e.target.value < 13) {
            SetMonth(e.target.value)
            setErrMessage(``)
        } else {
            setErrMessage(`Must be a valid Month`)
        }
       
    }
    const getYear = (e) => {
        if (e.target.value < new Date().getFullYear()) {
            SetYear(e.target.value)
            setErMessage(``)
        } else {
            setErMessage(`Must be in the past`)
        }
    }

  return (
    <div>
        <div className='cal-div'>
            <section>
               <h4>DAY</h4> 
                <span><input type="text" placeholder='DD' onChange={getDay}/></span>
                {errorMessage && <h6>{errorMessage}</h6> }
            </section>
            <section>
            <h4>MONTH</h4> 
                <span><input type="text" placeholder='MM' onChange={getMonth}/></span>
                {errMessage && <h6>{errMessage}</h6> }
                </section>


                <section>
            <h4>YEAR</h4> 
                <span><input type="text" placeholder='YYYY' onChange={getYear}/></span>
                {erMessage && <h6>{erMessage}</h6> }
                </section>
        </div>
                <Outcome
                year={DOBYear}
                month={DOBMonth}
                day={DOBDay}
                />
    </div>
  )
}

export default Calculate