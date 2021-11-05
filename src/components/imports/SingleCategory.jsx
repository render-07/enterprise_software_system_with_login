import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../container/categoryActions';
import { useState } from 'react'
import AddItem from "./AddItem";
import ItemTable from './Tables/ItemTable';

const SingleCategory = ({category, categoryID, items, suppliers}) => {
    // Call dispatch
    const dispatch = useDispatch();

    // Component state
    const [showItems, setShowItems] = useState(false)
    const [showAddItem, setShowAddItem] = useState(false);

    const toggleShowItems = () => {
        setShowItems(!showItems)
    }

    const handleClose = () => setShowAddItem(false);
    const handleShow = () => setShowAddItem(true);

    return (
        <div className="wrapper">
            <div className='category'>
                <div className="category-name">
                    <h3>{category.categoryName}</h3>
                </div>

                <div className="side-btn">    

                    <button type="button" class="btn" 
                            onClick={toggleShowItems}
                            style={showItems ? {color: '#6a8076', backgroundColor: '#ffffff'} : {color: 'white', backgroundColor: '#69c79d'}}>
                            {showItems ? 'Close' : 'Show items'}
                    </button>
                    
                    <button type="button" class="btn" 
                            onClick={handleShow}
                            style={{color: 'white', backgroundColor: '#6a8076'}}>
                            Add new item
                    </button> 
        
                    <button type="button" class="btn" 
                            onClick={() => dispatch(deleteCategory(category._id))}
                            style={{color: 'white', backgroundColor: '#bc544b'}}>
                            Delete this category
                    </button> 
                    

                </div>
                    
                
            </div>
            
            <AddItem handleClose={handleClose} show={showAddItem} 
            categoryID={categoryID} title={category.categoryName}
            suppliers={suppliers}/>
            {showItems && <ItemTable items={items}/>}
        </div>
    )
}

export default SingleCategory
