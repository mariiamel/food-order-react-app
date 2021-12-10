import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import meals from '../../assets/meal.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Yummy Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='meals img'/>
            </div>
        </>
    )
}

export default Header;