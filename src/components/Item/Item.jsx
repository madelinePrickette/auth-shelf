import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

function Item({item}) {

    const user = useSelector(store => store.user)
    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        })
      }

    return(
        <>
            {user.id === item.user_id ?
            <div key={item.id}>
                <img src={item.image_url}></img>
                <p>{item.description}</p>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
            :
            <div key={item.id}>
                <img src={item.image_url}></img>
                <p>{item.description}</p>
            </div>
            }
        </>
    )
}

export default Item;