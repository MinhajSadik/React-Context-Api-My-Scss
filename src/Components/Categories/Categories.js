import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allProducts = [

    { name: 'Apple', category: 'laptop' }, { name: 'Asus', category: 'laptop' }, { name: 'Dell', category: 'laptop' },
    { name: 'Apple', category: 'mobile' }, { name: 'Nokia', category: 'mobile' }, { name: 'SamSung', category: 'mobile' },
    { name: 'Apple', category: 'camera' }, { name: 'cannon', category: 'camera' }, { name: 'Nikkon', category: 'camera' }

]

const Categories = () => {
    // const {count} = props;
    const [category] = useContext(CategoryContext)
    const [products, setProducts] = useState([]);

    useEffect(() =>{

        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts)
    },[category])

    return (
        <div>
            <h1>Slected Categories: {category}</h1>
            {
            
                products.map(pd => <CategoryDetails product={pd}/>)
            }
        </div>
    );
};

export default Categories;