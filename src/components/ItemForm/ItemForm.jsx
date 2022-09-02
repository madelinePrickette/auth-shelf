import {useState} from 'react';
import {useDispatch} from 'react-redux';

function ItemForm() {

    const dispatch = useDispatch();
    const [newItem, setNewItem] = useState({description: '', image_url: ''});

    const handleDescriptionChange = (event) => {
        setNewItem({...newItem, description: event.target.value})
    }

    const handleImageChange = (event) => {
        setNewItem({...newItem, image_url: event.target.value})
    }

    const handleSubmit = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: newItem
        })
    }

    console.log(newItem);
    return(
        <>
            <h3>Add an Item</h3>

            <form onSubmit={handleSubmit}>
                <input 
                required
                placeholder="description"
                onChange={handleDescriptionChange}
                ></input>

                <input 
                required
                placeholder="Image url"
                onChange={handleImageChange}
                ></input>

                <button type="Submit">Submit</button>
            </form>
            
        </>
    )
}

export default ItemForm;