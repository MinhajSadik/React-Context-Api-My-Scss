// import React, { useContext } from 'react';
// import { CategoryContext } from '../../App';

const CategoryDetails = (props) => {
    // const category = useContext(CategoryContext)
    const {name} = props.product;
    return (
        <div>
            <h3>This Is CategoryDetails:{name}</h3>
        </div>
    );
};

export default CategoryDetails;