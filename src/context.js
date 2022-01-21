import React, { useContext, useEffect, useState, useCallback, useMemo } from 'react';


const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
    const [bmi, setBmi] = useState("");
    const [status, setStatus] = useState("");
    const [risk, setRisk] = useState("");
    const [idealWeight, setIdealWeight] = useState("")
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [loading, setLoading] = useState(true);
    const [sex, setSex] = useState('Female');
    const [age, setAge] = useState('');
    const [waist, setWaist] = useState('');
    const [hip, setHip] = useState('');
    const [selectedSex, setSelected] = useState(false)
    const [unitH, setUnitH] = useState('cm')
    const [unitW, setUnitW] = useState('kg')
    const [home, setHome] = useState(true);
    const [result, setResult] = useState(false)
    const[ft,setFt] = useState('');
    const[inch,setInch] = useState('')
    var axios = require("axios").default;
    
    const options = useMemo(() => {
        return {
            method: 'POST',
            url: 'https://bmi.p.rapidapi.com/',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'bmi.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            },
            data: {
                weight: { value: `${weight}`, unit: `${unitW}` },
                height: { value: `${unitH==='ft-in'?`${ft}-${inch}`:`${height}`}`, unit: `${unitH}` },
                sex: `${selectedSex ? 'f' : 'm'}`,
                age: `${age}`
            }
        }
    }, [height, weight, selectedSex, age, unitW, unitH,ft,inch])

    const fetch = useCallback(() => axios.request(options).then(function (response) {
        console.log(response.data);
        setBmi(response.data.bmi.value)
        setStatus(response.data.bmi.status)
        setRisk(response.data.bmi.risk)
        setIdealWeight(response.data.ideal_weight)
    }).catch(function (error) {
        console.error(error);
    }), [options, axios]);

    useEffect(() => {
        if (age !== '' && weight !== '' && height !== '') { fetch() }
    }, [age, height, weight, fetch])
    useEffect(()=>{
        if(unitH==="ft-in"){
            if(ft!=='' && inch!=='' && age !== '' && weight !== ''){fetch()}
        }
    },[unitH,ft,inch,age,weight,fetch])

    return <AppContext.Provider value={{
        weight,
        height,
        sex,
        age,
        waist,
        hip,
        loading,
        home,
        setHome,
        result,
        setResult,
        setLoading,
        unitH,
        unitW,
        setUnitH,
        bmi,
        status,
        risk,
        idealWeight,
        setUnitW,
        setWeight,
        setHeight,
        setSex,
        setAge,
        setWaist,
        setHip,
        setSelected,
        selectedSex,
        ft,
        setFt,
        inch,
        setInch
    }}>{children}</AppContext.Provider>

}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export default useGlobalContext