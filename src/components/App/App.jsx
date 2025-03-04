import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navigation from "/src/components/Navigation/Navigation";
import MovieDetailsPage from "/src/pages/MovieDetailsPage/MovieDetailsPage";
const HomePage = lazy(() => import("/src/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("/src/pages/MoviesPage/MoviesPage"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

const App = () => {
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster toastOptions={{ duration: 4000, position: "top-right" }} />
    </>
  );
};

export default App;
