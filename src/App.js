import  {
  Routes,
  Route,
  
} from "react-router-dom";


import Home from './Pages/Home'
import Header from "./Components/Header/Header";
import Footer from "./Components/footer/Footer";
import Courses from "./Components/cours-section/Courses";
import Listcours from "./redux/Pagecorses/Listcours";
import Addcours from "./redux/Pagecorses/Addcours";
import Inscription from "./Pages/Inscription";

function App() {
  return (
    <div>
     
    <Header/>
     <Routes>
     <Route
          exact
          path="/Home"
          element={<Home />}
        />
         <Route
          exact
          path="/Courses"
          element={<Courses />}
        />
        <Route
          exact
          path="/inscription"
          element={<Inscription/>}
        />
    </Routes>
    <Footer/>
    
    </div>
  )
}

export default App