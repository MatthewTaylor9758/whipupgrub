import React, { useEffect, useState } from 'react';
import NavBar from '../tools/Navbar';
import { makeStyles, Grid, Card, Modal, Typography } from '@material-ui/core'
import '../CSS/ProfilePage.css';

function ProfilePage() {
  const [recipes, setRecipes] = useState('');
  let res2;
  useEffect(() => {
    console.log(recipes)
  }, [recipes])
  const makeActualRequest = async () => {
    let res = await fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=9&information&apiKey=f1f06db464c343229b30ee8ae1503a7b', {
      method: 'get',
      // mode: '*cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    res2 = await res.json();
    console.log(res2);
    setRecipes(res2);
  };

  return (
    <>
      <NavBar />
      <Grid container xs={12}>
        <Grid item xs={3} id='fridge_field'>
          <Typography variant={'h5'}>My Fridge</Typography>
        </Grid>
        <Grid item xs={9} id='recipe_field'>
          <Typography variant={'h4'}>Make your Meal</Typography>
          <button onClick={makeActualRequest}>Make Actual Request</button>
          <div id='recipes'>
            <div id='recipe-row'>
              <div id='recipe-item'>
                {recipes ? <img src={`${recipes[0].image}`} /> : null}
              </div>
              <div id='recipe-item'>
                {recipes ? <img src={`${recipes[1].image}`} /> : null}
              </div>
              <div id='recipe-item'>
                {recipes ? <img src={`${recipes[2].image}`} /> : null}
              </div>
            </div>
            <div id='recipe-row'>
              <div id='recipe-item'>
                {recipes ? <img src={`${recipes[3].image}`} /> : null}
              </div>
              <div id='recipe-item'>
                {recipes ? <img src={`${recipes[4].image}`} /> : null}
              </div>
              <div id='recipe-item'>
                {recipes ? <img src={`${recipes[5].image}`} /> : null}
              </div>
            </div>
            <div id='recipe-row'>
              <div id='recipe-item'>
                {recipes ? <img src={`${recipes[6].image}`} /> : null}
              </div>
              <div id='recipe-item'>
                {recipes ? <img src={`${recipes[7].image}`} /> : null}
              </div>
              <div id='recipe-item'>
                {recipes ? <img src={`${recipes[8].image}`} /> : null}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default ProfilePage;
