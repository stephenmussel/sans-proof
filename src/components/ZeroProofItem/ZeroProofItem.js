import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function ZeroProofItem({ business }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const viewDetails = () => {
        // console.log('clicked on image!');
        const action = ({type: 'FETCH_DETAILS', payload: business})
        dispatch(action);
        history.push(`/details/${business.id}`)
    }

    return(
        <div>
            <img src={business.image_url} onClick={viewDetails}/>
            <p><b>{business.name}</b></p>
            <p>{business.description}</p>
        </div>
    )
}

export default ZeroProofItem;