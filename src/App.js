import Home from "./Routes/Home/Home";
import { Routes, Route} from 'react-router-dom'
import Navigate from "./Routes/Navigate/Navigate";
import SighIn from "./Routes/SighIn/SighIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate />} >
         <Route index element={<Home />}/>
         <Route path="/sign-in" element={<SighIn />}/>
      </Route>
    </Routes>
  )  
}

export default App;
