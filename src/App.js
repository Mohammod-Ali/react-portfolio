import './App.css';
import Home from './Pages/Home/Home';
import SocialLink from './Pages/Home/SocialLink';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
   <div>
    <Navbar></Navbar>
    <Home></Home>
    <SocialLink></SocialLink>
    <Footer></Footer>
   </div>
  );
}

export default App;
