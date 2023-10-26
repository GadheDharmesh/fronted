import React from 'react';
import Fstate from './componenat/Fstate';
import Cstate from './componenat/Cstate';

export default function App() {
  return (
    <>
      <h1>change by function & state</h1>
      <Fstate/>
      <h1>change by class & state</h1>
      <Cstate/>

    </>
  )
}
