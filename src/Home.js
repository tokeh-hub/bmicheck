import React from 'react'
import useGlobalContext from './context'
import genders from './gender'


function Home() {

  const { setHeight, setWeight, setHome, sex, setSex,ft,inch,setFt,setInch, setResult, setSelected, height, weight, age, setAge, unitH, unitW, setUnitH, setUnitW } = useGlobalContext()
  const handleChange = (e) => {
    setSex(e.target.value);
    if (sex === 'Female') { setSelected(true) }
    if (sex === 'Male') { setSelected(false) }
  }
  
  return (
    <div className='home'>
      <h1 style={{ paddingBottom: "13px" }}>BMI Calculator</h1>
      <div className='height'>
        <h4>Height ({unitH})</h4>
      
        <div className='row'>
        {unitH==="ft-in"? <div>
                 <input type='number' value={ft} placeholder='ft' onChange={(e)=>setFt(e.target.value)}></input>
                 <input type='text' value={inch} placeholder='inch' onChange={(e)=>setInch(e.target.value)}></input>
               </div>:
          <input type='text' value={height} onChange={(e) => setHeight(e.target.value)}></input>
  }
        
                 <select value={unitH} onChange={e => {setUnitH(e.target.value)}}>
                 <option value="cm">cm</option>
                 <option value="ft-in">ft-in</option>
               </select>
    
          
        </div>
      </div>
      <hr></hr>
      <div className='weight'>
        <h4>Weight({unitW})</h4>
        <div className='row'>
          <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)}></input>
          <select value={unitW} onChange={e => setUnitW(e.target.value)}>
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </div>
      </div>
      <hr></hr>
      <div className='age'>
        <h4>Age</h4>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
      </div>
      <hr></hr>
      <div className='sex'>
        <h4>Sex</h4>
        <select value={sex} onChange={e => handleChange(e)}>
          {
            genders.map((gender, index) => {
              return (
                <option key={index} value={gender}>{gender}</option>
              )
            })
          }
        </select>
      </div>
      <div className='calculate'>

        <button onClick={() => { setResult(true); setHome(false) }}>Calculate</button>

      </div>

    </div>
  )
}

export default Home
