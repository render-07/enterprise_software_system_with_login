import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../container/categoryActions';

const AddCategory = () => {

    // Call dispatch
    const dispatch = useDispatch(); 
    
    // Component state.
    const [categoryID, setcategoryID] = useState('');
    const [categoryName, setCategoryName] = useState('');

    const onSubmit = (e) => {
        // Prevents from actually submitting into a page 
        e.preventDefault();
        
        // Create new object of Category Model
        // and the value is from the state where user input are stored.
        const newCategory = {
            categoryID, categoryID,
            categoryName: categoryName
        };

        // Dispatch
        dispatch(addCategory(newCategory));

        // Clear state.
        setCategoryName('');
        setcategoryID('');
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="add-category-form">
                 <input type='text' placeholder='Add category ID' required='required' 
                    value={categoryID} 
                    onChange={(e) => setcategoryID(e.target.value)}/>

                <input type='text' placeholder='Add category' required='required' 
                    value={categoryName} 
                    onChange={(e) => setCategoryName(e.target.value)}/>
            </div>
            <input className='btn btn-form-block' type='submit' value='Save category'/>
        </form>
    )
}

export default AddCategory
