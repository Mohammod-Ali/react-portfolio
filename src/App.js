import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import SocialLink from './Pages/Home/SocialLink';
import router from './Routes/Routes';

function App() {
  return (
   <div>
    <SocialLink></SocialLink>
    
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
   </div>
  );
}

export default App;
