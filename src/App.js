import './App.css';
import ContactForm from './Pages/ContactForm/ContactForm';
import Home from './Pages/Home/Home';
import SocialLink from './Pages/Home/SocialLink';
import MyProjects from './Pages/MyProjects/MyProjects';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
   <div>
    <Navbar></Navbar>
    <Home></Home>
    <SocialLink></SocialLink>
    <MyProjects></MyProjects>
    <ContactForm></ContactForm>
    <Footer></Footer>
   </div>
  );
}

export default App;
