import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length !== 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const nameIsValid = !isEmpty(enteredName);
        const streetIsValid = !isEmpty(enteredStreet);
        const cityIsValid = !isEmpty(enteredCity);
        const postalIsValid = !isFiveChars(enteredPostal);

        setFormInputValidity({
            name: nameIsValid,
            street: streetIsValid,
            city: cityIsValid,
            postal: postalIsValid
        });

        const formIsVlid = 
            nameIsValid && 
            streetIsValid && 
            cityIsValid && 
            postalIsValid;

        if (!formIsVlid) {
            return
        }
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal
        });

    }
    const nameControllClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const streetControllClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
    const postalControllClasses = `${classes.control} ${formInputsValidity.postal ? '' : classes.invalid}`;
    const cityControllClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;

    return (
        <form onSubmit={confirmHandler}>
            <div className={nameControllClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a valid name</p>}
            </div>
            <div className={streetControllClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputsValidity.street && <p>Please enter a valid street</p>}
            </div>
            <div className={postalControllClasses}>
                <label htmlFor='postal'>Postal code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputsValidity.postal && <p>Please enter a valid postal code</p>}
            </div>
            <div className={cityControllClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputsValidity.city && <p>Please enter a valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='button'>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout;