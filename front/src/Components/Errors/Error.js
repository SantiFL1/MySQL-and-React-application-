import { NavLink } from "react-router-dom";

const Error = () => {
    return ( 
        <div className="component">
            <h1>Couldn't find the page</h1>
            <h3>Return to <NavLink className='LinkP' to=''> homepage</NavLink>.</h3>
        </div>
     );
}
 
export default Error;