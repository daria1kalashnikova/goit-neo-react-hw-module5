// import style from "./App.module.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "/src/components/Navigation/Navigation";
import MovieDetailsPage from "/src/pages/MovieDetailsPage/MovieDetailsPage";
const HomePage = lazy(() => import("/src/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("/src/pages/MoviesPage/MoviesPage"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
