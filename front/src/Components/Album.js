import { useParams  } from "react-router-dom";


export default function AlbumPage ({Albums , LoadedAlbums  , BoughtAlbumsArray}) {

const {id} = useParams()

const Purchase = (BoughtAlbum) =>{
    if (BoughtAlbumsArray.includes(BoughtAlbum)) {
        alert("You can't buy the same album twice"); 
        return
    }


    BoughtAlbumsArray.push(BoughtAlbum)
    return 
    
}

    return (
        <div> 
        {LoadedAlbums && 
        
            <div className="AlbumDescription">
                <p>Album: {Albums[id-1].title}</p>
                <p>Artist: {Albums[id-1].artist} </p>
                <p>Release year: {Albums[id-1].year}</p>
                <p>Price: 100$</p>
                <button onClick={()=>Purchase(Albums[id-1])}>Purchase</button>    
                
            </div>
        }
        </div>
     );
}
 
