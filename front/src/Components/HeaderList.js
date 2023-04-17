import { Outlet } from "react-router-dom";

const ListHeader = () => {
    return ( 
        <div className="component"> 
            <h1>List</h1>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default ListHeader;