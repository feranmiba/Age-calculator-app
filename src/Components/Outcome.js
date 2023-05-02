import React, { useState, useEffect } from 'react'

function Outcome(props) {
  const [ansYear, setAnsYear] = useState()
  const [ansMonth, setAnsMonth] = useState()
  const [ansDay, setAnsDay] = useState()

 

  const getAge = () => {
    let yr = props.year
    let mo = props.month
    let da = props.day
  const CurrentYear = new Date()
   const Years = CurrentYear.getFullYear()
  const Months = CurrentYear.getMonth() + 1
  const currendDay = CurrentYear.getDay()
  
  if (yr, mo, da) {
    const RealYear = Years - yr - 1
    const RealMonth = Number(Math.abs( Months - mo))
    const RealDays = Number( RealMonth * 31 ) + Number(da) - currendDay
    setAnsYear(RealYear)
    setAnsMonth(RealMonth)
    setAnsDay(RealDays)
  } else if(mo == 0 )  {
  const RealMonth = Math.abs( Months - mo)
  const RealYear = Years - yr
  const RealDays =  0
  setAnsYear(RealYear)
  setAnsMonth(RealMonth)
  setAnsDay(RealDays)
  }


  }

  useEffect(() => {
    getAge()
  }, [])

  return (
    <div>
       <section className='cal'>
            <button onClick={getAge}>Cal</button>
                </section>
        <div className='outcome-div'>
            <h1><span>{ansYear}</span> Years</h1>
            <h1><span>{ansMonth}</span> Months</h1>
            <h1><span>{ansDay}</span> Days</h1>
        </div>
    </div>
  )
}

export default Outcome