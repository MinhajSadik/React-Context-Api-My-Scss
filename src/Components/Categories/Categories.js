import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Categories = () => {
    // const {count} = props;
    const category = useContext(CategoryContext)
    return (
        <div>
            <h1>THis Is Categories: {category}</h1>
            <CategoryDetails/>
        </div>
    );
};

export default Categories;