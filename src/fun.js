import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './home'
import Service from './service'
import About from './about'
import Contact from './contact'
import Product from './pro'
import Grids from './immc'
function App() {
    return(
        <>
        <BrowserRouter>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                <nav class="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Option</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pro">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/immc">Product image</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
                </div>
            </div>
        </div>
        <div className='container'>
        <div className='row'>
        <div className='col-md-8'>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/pro' element={<Product/>}></Route>
            <Route path='/immc' element={<Grids/>}></Route>
        </Routes>
        </div>
         </div> 
        </div>
        </BrowserRouter>
        </>
    )
}
export default App