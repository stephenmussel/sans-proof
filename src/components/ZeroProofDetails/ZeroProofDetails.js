import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'

function ZeroProofDetails() {

    const businessDetails = useSelector(store => store.details)

    return(
        <div>
            <h3>Details for: {businessDetails.name}</h3>
        </div>
    )
}

export default ZeroProofDetails;