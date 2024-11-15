import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './component/Navbar.jsx'
import Banner from './component/Banner.jsx'
import Services from './component/Services';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Experience from './component/Experience';

const App=() =>{
  return (
    <div className="App">
      <CustomNavbar/>
      <Banner/>
      <Services/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
