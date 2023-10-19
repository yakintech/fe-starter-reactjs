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

function App() {

  // return <AddCategory/>
  return <AddSupplier/>

  return (<>

          <ul style={{display:'flex', justifyContent:'space-between'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/customers'>Customers</Link></li>
            <li><Link to='/orders'>Orders</Link></li>
          </ul>

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/customers" element={<CustomerPage/>} />
            <Route path="/orders" element={<OrderPage/>} />

            <Route path="*" element={<NotFound/>} />
          </Routes>

        <p>Site Footer</p>
  </>)

}

export default App