
import { NavLink } from "react-router-dom";

const List = ({Albums}) => {



    return ( 

        <div>
                       
            <table >
                <thead >
                    <tr className="RowNames">
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Release year</th>
                    </tr>
                </thead>
                <tbody> 
                    { Albums.map(Album=>(
                        <tr key={Album.id} className="AlbumInfo">
                            
                            <td> <NavLink to={Album.id.toString()} className="whiteText"> {Album.title}</NavLink></td>
                            <td>{Album.artist}</td>
                            <td>{Album.year}</td>
                            
                        </tr>
                
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default List;