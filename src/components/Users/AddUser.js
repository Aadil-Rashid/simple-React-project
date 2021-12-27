import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from'./AddUsers.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) =>{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (age > 1).'
            });
            return;
        }
        // console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    return(
    <div>
    {
    error 
    && 
    <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
    }
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type="text" id='username' value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor='age'>Age (Years)</label>
        <input type="number" id='age' value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>

    </div>
    );
};

export default AddUser;