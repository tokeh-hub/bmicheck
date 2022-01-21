import React, { useEffect } from 'react';
import useGlobalContext from './context'
import Loading from './Loading';

export default function Result() {

    const { idealWeight, bmi, risk, status, loading, setLoading, setHome, setResult, setWeight, setHeight, setAge } = useGlobalContext();
    const setFunction = () => {
        if (bmi !== '' && idealWeight !== '' && risk !== '' && status !== '') { setLoading(false) }
        // else{setLoading(true)}
    }
    useEffect(() => setFunction())

    return (
        loading ? <Loading /> :
            <article className='result'>
                <header>BMI RESULT</header>
                <div className='values'>
                    <section>Your BMI value : <span>{bmi}</span></section>
                    <section>Your idealweight : <span>{idealWeight}</span></section>
                    <section>Weight Status : <span>{status}</span></section>
                    <section>Level of Risk Healthwise : <span>{risk}</span></section>
                    <div className='calc-again'>
                        <button
                            onClick={() => {
                                setResult(false);
                                setHome(true);
                                setWeight('');
                                setHeight('');
                                setAge('')
                            }}>Calculate BMI again</button>
                    </div>
                </div>


            </article>

    )
}

