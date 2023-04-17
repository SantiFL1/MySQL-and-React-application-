

import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import { useState , useEffect } from "react"
//Hola
//Components
import Information from './Components/Information';
import List from './Components/List';
import Header from './Components/Header';
import Add from './Components/Add';
import AlbumPage from './Components/Album';
import BoughtAlbums from './Components/BoughtAlbums';
import Error from './Components/Errors/Error';
import Home from './Components/Home';
import AlbumsError from './Components/Errors/AlbumsError';
import ListHeader from './Components/HeaderList';



function App() {


  const [Album,setAlbum] = useState({
    title:'',
    artist:'',
    year:0
  })


  const [Albums,setAlbums] = useState([])

  const [LoadedAlbums,setLoadedAlbums] = useState(false)

  let [BoughtAlbumsArray] = useState([])

  useEffect(()=>{
    const GetAlbum = () =>{
        fetch('http://localhost:5000/api')
        .then(res => res.json())
        .then(res=>{
          setAlbums(res)
          setLoadedAlbums(true)  
        })
    }
    GetAlbum()
    
  },[])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header/>}>
      <Route index element={<Home/>} />
      <Route path='list' element={<ListHeader/>} errorElement={<AlbumsError/>}>
        <Route index element={<List setAlbums={setAlbums} Albums={Albums} setAlbum={setAlbum} Album={Album} LoadedAlbums={LoadedAlbums}/>}  />
        <Route path=":id" element={<AlbumPage Albums={Albums} LoadedAlbums={LoadedAlbums} BoughtAlbumsArray = {BoughtAlbumsArray}  />}/>
      </Route>
      <Route path="information" element={<Information />} />
      <Route path="add" element={<Add Album={Album} setAlbum={setAlbum} LoadedAlbums={LoadedAlbums} />} />
      <Route path="bought" element={<BoughtAlbums BoughtAlbumsArray={BoughtAlbumsArray} LoadedAlbums={LoadedAlbums}  />} />
      <Route path='*' element={<Error/>}/>
    </Route>
  )
)



  return (
    <RouterProvider router={router}/>
  );
}

export default App;
