import React from 'react';
import { Bars } from 'react-loader-spinner'



export default function Loading() {
  return <div className='loading'>
    <Bars
      heigth="200"
      width="200"
      color='white'
      ariaLabel='loading'
    />
    <h2>Loading</h2>
  </div>;
}
