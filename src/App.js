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
import AddProduct from "./mui/AddProduct"
import ProductsDataGrid from "./mui/ProductsDataGrid"
import Guard from "./children/Guard"
import ChildComp from "./children/ChildComp"
import Parent from "./memorize/Parent"
import RefSample from "./ref/RefSample"

function App() {



  const { favorites } = useContext(FavoritesContext)

  return (<>

    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/customers'>Customers</Link></li>
      <li><Link to='/orders'>Orders</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/favorites'>Favorites <span style={{ color: 'red' }}>({favorites.length})</span></Link></li>
      <li><Link to='/addproduct'>Add Product</Link></li>
      <li><Link to='/productsdatagrid'>Products Grid</Link></li>



    </ul>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/customers" element={<CustomerPage />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/productsdatagrid" element={<ProductsDataGrid />} />

      <Route path="*" element={<NotFound />} />
    </Routes>

    <p>Site Footer</p>
  </>)

}

export default App