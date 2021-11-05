import { useEffect } from 'react'
import SingleCategory from './SingleCategory'
import {  useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../container/categoryActions';
import { getItems } from '../../container/itemActions';
import { getSuppliers } from '../../container/supplierActions';

const Categories = () => {
    // Call dispatch
    const dispatch = useDispatch();

    // useEffect is equivalent to componentDidMount()
    useEffect(() => { 
        dispatch(getCategories()); 
        dispatch(getItems());
        dispatch(getSuppliers());
    }, []);
    
    // Get reducer from index.js
    const category = useSelector((state) => state.category);
    const item = useSelector((state) => state.item);
    const supplier = useSelector((state) => state.supplier);

    // Deconstruct
    // Follow the name of array in the state in deconstructuring.
    const { categories } = category;
    const { items } = item;
    const { suppliers } = supplier;

    return (
        categories.map((ctgry) => (                
            <SingleCategory key={ctgry._id} category={ctgry} categoryID={ctgry.categoryID} 
            items={items.filter(item => item.categoryID == ctgry.categoryID)}
            suppliers={suppliers}/>
        ))
    )
}

export default Categories;
