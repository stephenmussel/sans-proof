function AddForm() {

    const postBusiness = () => {
        console.log('clicked add business button!');
        
    }


    return(
        <div>
            <h3><em>This is Add Form</em></h3>
            <form onClick={postBusiness}>
                <input type="text" placeholder="name"/>
                <input type="submit" value="Add Business"/>
            </form>

        </div>
    )
}

export default AddForm;