import React from 'react';
import { useState } from 'react';

const InputBox = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue); // Pass the input value to the onSubmit function or component
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter something..."
        />
        <button type="submit">Submit</button>
        </form>
    );
}

export default InputBox