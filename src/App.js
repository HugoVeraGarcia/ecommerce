import { HashRouter, Routes, Route } from 'react-router-dom'; 
import { Home, Favorites, ProductsDetail, Cart, Purchases } from "./pages";
import { LoadingPage, NavBar } from "./components"
import './styles/styles.css';
import { useSelector } from 'react-redux';

function App() {

  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
        {isLoading && <LoadingPage/>}

        <NavBar />
        
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/products/:id" element = { <ProductsDetail/> } />
          <Route path= "/favorites" element = { <Favorites/> } />
          <Route path="/cart" element={ < Cart /> }/>
          <Route path="/purchases" element={< Purchases/> }/>
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
