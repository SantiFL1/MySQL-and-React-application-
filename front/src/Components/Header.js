import { Outlet , NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <div>
            <nav className="navbar">
            <header className="header">
                <h1 className="modal-title"> <NavLink to='/' className='whiteText'> Music albums store </NavLink></h1>
                <div>
                    
                    <NavLink className="links" to="information">About the website</NavLink>
                    <NavLink className="links" to="bought"> Bought albums</NavLink>
                    <NavLink className="links" to="add">Add an album</NavLink>
                    <NavLink className="links" to="list">Album list</NavLink>
                    </div>   
            </header>
            
        </nav>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default Header;