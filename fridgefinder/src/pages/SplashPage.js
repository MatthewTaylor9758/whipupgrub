import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../tools/Navbar';
import { makeStyles, Card, Button, Typography, Grid } from '@material-ui/core';

function SplashPage () {

  const makeRequest = async () => {
    let res = await fetch('/api/tests')
  };

  const makeOtherRequest = async () => {
    let res = await fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=f1f06db464c343229b30ee8ae1503a7b', {
      method: 'get',
      // mode: '*cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    let res2 = await res.json();
    console.log(res2);
  };

  const makeActualRequest = async () => {
    let res = await fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=10&information&apiKey=f1f06db464c343229b30ee8ae1503a7b', {
      method: 'get',
      // mode: '*cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    let res2 = await res.json();
    console.log(res2);
  };

  return (
    <>
      <NavBar />
      <h1>
        This is the splash page.
      </h1>
      <button onClick={makeRequest}>Make My-Proxy Request</button>
      <button onClick={makeOtherRequest}>Make Other-Proxy Request</button>
      <button onClick={makeActualRequest}>Make Actual Request</button>
    </>
  )
}
export default SplashPage;
