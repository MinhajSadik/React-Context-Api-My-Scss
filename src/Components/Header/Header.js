import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>THis Is Header: {category} </h1>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <br/>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <br/>
            <button onClick={() => setCategory('Camera')}>Camera</button>

        </div>
    );
};

export default Header;