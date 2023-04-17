import { NavLink } from "react-router-dom";

const BoughtAlbums = ({BoughtAlbumsArray , LoadedAlbums}) => {
    let NoPurchase = true
        if (BoughtAlbumsArray.length>0) {
            NoPurchase=false
        }
         
    
        return ( 
        <div className="component">
           {!NoPurchase && <h2>Bought albums:</h2>}
            {NoPurchase && 
                <div className="NoPurchase"> 
                    <h3>You haven't bought any album yet.</h3>
                    <p>Visit our album list <NavLink className="LinkP" to='/List'>here</NavLink>. </p>
                </div>}
           <div className="AlbumDataContainer">
                
                {BoughtAlbumsArray.map(BoughtAlbum => (
                    <div key={BoughtAlbum.id} className="BoughtAlbumData">
                        <h3>{BoughtAlbum.title}</h3>
                        <p>{BoughtAlbum.artist}</p>



                    </div>
                ))}
            </div>
            {!NoPurchase &&
                <h2>Spent money: {BoughtAlbumsArray.length*100}$</h2>
            }
        </div>
     );
}
 
export default BoughtAlbums;