import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const category = useContext(CategoryContext)
    const {count} = props;
    return (
        <div>
            <h5>THis Is ANother: {category}</h5>
            {/* <h1>THis Is Home {count}</h1> */}
            <Categories count={count} />
        </div>
    );
};

export default Home;