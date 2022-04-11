import React from 'react';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Screen/Home';
import Food from './Screen/Food';
import Series from './Screen/Series';
import Places from './Screen/Places';
import Info from './Screen/Info';
import Quraan from './Screen/Quraan';
import Media from './Screen/Media';
import ChatBot from './Screen/ChatBot';
import SeriesElement from './Components/SeriesElement';
import FoodElement from './Components/FoodElement';
import PlacesElement from './Components/PlacesElement';
import Prays from './Screen/Prays';
import InfoElement from './Components/InfoElement';
import ActionMovie from './Screen/ActionMovie';
import ComedyMovie from './Screen/ComedyMovie';
import DramaMovie from './Screen/DramaMovie';
import SeriesMedia from './Screen/SeriesMedia';
import Plays from './Screen/Plays';
import WaitPage from './Components/WaitPage';
import Movies from './Screen/Movies';
import Movie from './Components/Movie';
import WaitSeries from './Components/WaitSeries';
import Season from './Components/Season';
import Header from './Components/Header'
import Suggestion from './Screen/Suggestion';
import Spin from './Screen/Spin';
// import UseGeoLocation from './Components/UseGeoLocation';
// import Test from './Components/Test';


function App() {
  return (
    <div className="App">

        <BrowserRouter>

        <Header />

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/food" element={<Food />} />
            <Route exact path="/series" element={<Series />} />
            <Route exact path="/places" element={<Places />} />
            <Route exact path="/info" element={<Info />} />
            <Route exact path="/quraan" element={<Quraan />} />
            <Route exact path="/media" element={<Media />} />
            <Route exact path="/chat" element={<ChatBot />} />
            <Route exact path="/foodelement" element={<FoodElement />} />
            <Route exact path="/serieselement" element={<SeriesElement />} />
            <Route exact path="/placeselement" element={<PlacesElement />} />
            <Route exact path="/prays" element={<Prays />} />
            <Route exact path="/infoelement" element={<InfoElement />} />
            <Route exact path="/action" element={<ActionMovie />} />
            <Route exact path="/comedy" element={<ComedyMovie />} />
            <Route exact path="/drama" element={<DramaMovie />} />
            <Route exact path="/seriesmedia" element={<SeriesMedia />} />
            <Route exact path="/plays" element={<Plays />} />
            <Route exact path="/wait" element={<WaitPage />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/movie" element={<Movie />} />
            <Route exact path="/waitseries" element={<WaitSeries />} />
            <Route exact path="/season" element={<Season />} />
            <Route exact path="/suggestion" element={<Suggestion />} />
            <Route exact path="/spin" element={<Spin />} />
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
