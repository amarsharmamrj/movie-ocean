import React from 'react';
import Template from './components/template';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';
import MovieDetailsPage from './pages/movieDetailsPage';
import ActorDetailsPage from './pages/actorDetailsPage';
import SearchResults from './pages/searchResults';

const Router = () => {
    return (
       <Template>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/movie/:id" element={<MovieDetailsPage />} />
               <Route path="/actor/:id" element={<ActorDetailsPage />} />
               <Route path="/search" element={<SearchResults />} />
           </Routes>
       </Template>
    );
};

export default Router;