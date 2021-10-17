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

    return(
        <div>
            <h3>Selected business: {businessDetails.name}</h3>
            <h3>Details: </h3>
                <p>{JSON.stringify(businessDetails)}</p>
            <h3>allParams: </h3>
                <p>{JSON.stringify(allParams)}</p>
        </div>
    )
}

export default ZeroProofDetails;