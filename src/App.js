import './App.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
