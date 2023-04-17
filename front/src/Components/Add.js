const Add = ({Album , setAlbum , LoadedAlbums}) => {
    
    
    const HandleChange = e => {
        setAlbum({
            ...Album,
            [e.target.name]: e.target.value
            
        })
        
    }

    let {title , artist , year} = Album


    const Submit = s =>{
        
        year = parseInt(year,10)

        if (title === '' || artist === '' || year<=0) {
            alert('Please, fill all the inputs')
        
            return
        }
        console.log(Album)

        const req = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(Album)
        }

        fetch('http://localhost:5000/api' , req)
        .then(res=>res.text())
        .then(res => console.log(res))

        setAlbum({
            title:'',
            artist:'',
            year:0
        })
    }


    return ( 
        <div className="component">
            <h1>Add an album</h1>
        
            <form onSubmit={Submit}>

                <div className="Label-Input">
                    <label>Album title: </label>
                    <input value={title} name="title" onChange={HandleChange} type="text"></input>
                </div>
                <div className="Label-Input">
                    <label>Album author: </label>
                    <input value={artist} name="artist" onChange={HandleChange} type="text"></input>
                </div>
                <div className="Label-Input">
                    <label>Release year: </label>
                    <input value={year} name="year" onChange={HandleChange} type="number"></input>
                </div>
                <button type="submit" >Add album</button>
            </form>
        </div>
     );
}
 
export default Add;