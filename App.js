import logo from './logo.svg';
import './App.css';
import MainPage from './components/mainpage';

import SearchBar from ".//components/SearchBar";
import BookData from ".///Data.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={ <MainPage/>} />
          <Route path="/search" element={ <SearchBar placeholder="Enter any topic..." data={BookData}/>} />" 
        </Routes>
      </Router>
    </div>
  );
}

// function App() {
//   return (
    

//     <div className="App">
//       <div>
//         <SearchBar placeholder="Enter any topic..." data={BookData} />
//       </div>
//       <MainPage/>
//     </div>
//   );
// }

export default App;