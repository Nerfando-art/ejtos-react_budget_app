import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [cost, setCost] = useState('');

    return (
        <div className='alert alert-secondary'>
            <span>Budget: $</span>
            <input
                        required='required'
                        type='number'
                        id='cost'
                        budget={budget}
                        value={cost}
                        style={{ marginLeft: '0rem' , size: 10}}
                        onChange={(event) => setCost(event.target.value)}>
                        </input>
                  
        </div>
    );
};

export default Budget;
