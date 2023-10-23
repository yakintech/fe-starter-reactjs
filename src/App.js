import { Link, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import EffectSample from "./effectSample/EffectSample"
import EffectSample2 from "./effectSample/EffectSample2"
import CustomerPage from "./pages/CustomerPage"
import OrderPage from "./pages/OrderPage"
import AddCategory from "./formSample/AddCategory"
import AddSupplier from "./formSample/AddSupplier"
import ProductsPage from "./pages/ProductsPage"
import Favorites from "./pages/Favorites"
import { useContext } from "react"
import { FavoritesContext } from "./context/FavoritesContext"

function App() {

  // return <AddCategory/>
  // return <AddSupplier/>

  const { favorites } = useContext(FavoritesContext)

  return (<>

    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/customers'>Customers</Link></li>
      <li><Link to='/orders'>Orders</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/favorites'>Favorites <span style={{color:'red'}}>({favorites.length})</span></Link></li>

    </ul>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/customers" element={<CustomerPage />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/favorites" element={<Favorites />} />


      <Route path="*" element={<NotFound />} />
    </Routes>

    <p>Site Footer</p>
  </>)

}

export default App