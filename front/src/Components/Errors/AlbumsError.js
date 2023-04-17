import { NavLink } from "react-router-dom";

const AlbumsError = () => {
    return ( 
        <div className="component">
            <h1>Couldn't find the album</h1>
            <h3> <NavLink to="/list" className='LinkP'> Return to the album list </NavLink> </h3>
        </div>
     );
}
 
export default AlbumsError;