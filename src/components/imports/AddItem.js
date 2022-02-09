import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../container/itemActions';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddItem = ({handleClose, show, categoryID, title, suppliers}) => {

    // Call dispatch
    const dispatch = useDispatch();
    
    // Component state.
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [supplier, setSupplier] = useState('');
    const [qr, setQr] = useState('');

    const onSubmit = (e) => {
        // Prevents from actually submitting into a page 
        e.preventDefault();

        // Create new object of Category Model
        // and the value is from the state where user input are stored.
        const newItem = {
            itemName: itemName,
            quantity: quantity,
            price: price,
            categoryID, categoryID,
            supplierID: supplier,
            qr: "qr here"
        };

        // Dispatch
        dispatch(addItem(newItem));

        handleClose();
        
        // Clear state.
        setItemName('');
        setQuantity('');
        setPrice('');
        setSupplier('');
        setQr('');
    }

    console.log(suppliers);

    return (
        // Modal Design
            <Modal show={show} onHide={handleClose}>
                <div className='modal_main'>
                    <Modal.Header id='modal_header'>
                        <Modal.Title className="center inputBox">Add new item ({title})</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id='modal_body'>
                        <div className="center">
                            <form onSubmit={onSubmit}>
                                <div className="inputbox">
                                    <input type="text" required="required" 
                                        value={itemName}
                                        onChange={(e) => setItemName(e.target.value)}/>
                                    <span>Item name</span>
                                </div>

                                <div className="inputbox">
                                    <input type="number" required="required"
                                        value={quantity} 
                                        onChange={(e) => setQuantity(e.target.value)}/>
                                    <span>Quantity</span>
                                </div>

                                <div className="inputbox">
                                    <input type="number" required="required"
                                        value={price} 
                                        onChange={(e) => setPrice(e.target.value)}/>
                                    <span>Price</span>
                                </div>

                                <div className="inputbox">
                                    <select value={supplier} onChange={(e) => setSupplier(e.target.value)} id="suppliers" name="suppliers" required>
                                        <option value="" disabled selected>Select Supplier</option>
                                        { suppliers.map(supplier => 
                                        <option key = {supplier.supplierID} value={supplier.supplierID}>
                                            {supplier.supplierName}
                                        </option>) }
                                    </select>
                                </div>

                                <Modal.Footer id='modal_footer'>
                                    <Button id='add_item'
                                        type='submit' value='Add item'>
                                        Add New Item
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        
    )
}

export default AddItem
