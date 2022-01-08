import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';


const AvailableMeals = () => {
  const [mealsState, setMealsState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const fetchMeals = async () => {
    // const response = await fetch(
    //   'https://react-http-6b4a6.firebaseio.com/meals.json'
    // );

    // if (!response.ok) {
    //   throw new Error('Something went wrong');
    // }

    // const data = await response.json();
    // const meals = [];

    // for (const key in data) {
    //   meals.push({
    //     id: key,
    //     name: data[key].name,
    //     description: data[key].description,
    //     price: data[key].price,
    //   })
    // }

    // setMealsState(meals);
    setMealsState(DUMMY_MEALS);
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals().catch((err) => {
      setLoading(false);
      setError(err.message)
    });
  }, [])

  if (loading) {
    return (
      <section className={classes.MealsLoading}><p>Loading...</p></section>
    )
  }

  if (error) {
    return (
      <section className={classes.MealsError}><p>{error}</p></section>
    )
  }
    const mealsList = mealsState.map(meal => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
    return (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    )
}

export default AvailableMeals;