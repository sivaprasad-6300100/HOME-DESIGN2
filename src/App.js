import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./WebFiles.js/Pages/SignInPage";
import WoodPage from "./WebFiles.js/Pages/WoodPage";
import UpvcPage from "./WebFiles.js/Pages/UpvcPage";
import AlluminiumPage2 from "./WebFiles.js/Pages/AlluminiumPage2";
import NavBar from "./WebFiles.js/Components/NavBar";
import HomePage1 from "./WebFiles.js/Pages/HomePage1";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../src/index.css'



function App() {
  return (
<BrowserRouter>
<NavBar />
<Routes>
  <Route path="/" Component={HomePage1}/>
  <Route path="/AlluminiumPage" Component={AlluminiumPage2}/>
  <Route path="/UpvcPage" Component={UpvcPage}/>
  <Route path="WoodWork" Component={WoodPage}/>
  <Route path="SignIn" Component={SignInPage}/>
</Routes>
</BrowserRouter>


  );
}

export default App;
