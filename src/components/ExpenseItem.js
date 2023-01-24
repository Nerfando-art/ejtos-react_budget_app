import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const decreaseAllocation = (name) => {
        const decrease = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: decrease
        })
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>${props.cost}</td>
        <td><button style={{
            color: 'blue',
            backgroundColor: 'greenyellow',
            borderRadius: '50%',
            width: '50px',
            height: '50px'
        }} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{
            color: 'blue', 
            backgroundColor: 'greenyellow', 
            borderRadius: '50%', 
            width: '50px', 
            height: '50px',
            }} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
