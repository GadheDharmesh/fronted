import React from 'react';
import Fstate from './componenat/Fstate';
import Cstate from './componenat/Cstate';
import Nesto from './componenat/Nestedo';

export default function App() {
  return (
    <>
      <h1>change by function & state</h1>
      <Fstate/>
      <h1>change by class & state</h1>
      <Cstate/>
      <h1> change nested obj by function state</h1>
      <Nesto/>


    </>
  )
}
