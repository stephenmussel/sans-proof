import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'

function ZeroProofDetails() {

    const businessDetails = useSelector(store => store.details)
    const dispatch = useDispatch();
    const allParams = useParams();
    const businessId = allParams.id;

    useEffect(() => {
        const action = {type: 'FETCH_DETAILS', payload: {id: businessId}}
        dispatch(action)
    }, [businessId])

    // NOTES: favorite
    const addFav = (event) => {
        console.log('clicked favorite button!');
        const action = {type: 'POST_FAVORITE', payload: event.target.value}
        dispatch(action);
    }

    return(
        <div>
            <h3>Selected business: <em>{businessDetails.name}</em></h3>
            {/* NOTES: favorite */}
            <button value={businessDetails.id} onClick={(event) => addFav(event)}>Favorite</button>
            {/* <h3>JSON: </h3> */}
                {/* <p>{JSON.stringify(businessDetails)}</p> */}
            <p><b>rating: <br /></b>{businessDetails.rating}</p>
            <p><b>description: <br /></b>{businessDetails.description}</p>
            <p><b>address: <br /></b>{businessDetails.address}<br />{businessDetails.city}, {businessDetails.state} {businessDetails.zip}</p>
            <p><b>website: <br /></b>{businessDetails.website}</p>

            <h3>JSON: </h3>
                <p>{JSON.stringify(businessDetails)}</p>

            {/* <h3>allParams: </h3> */}
                {/* <p>{JSON.stringify(allParams)}</p> */}
        </div>
    )
}

export default ZeroProofDetails;