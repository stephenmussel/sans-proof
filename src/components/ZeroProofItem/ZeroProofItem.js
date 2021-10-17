function ZeroProofItem({ business }) {

    const viewDetails = () => {
        console.log('clicked on image!');
        
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