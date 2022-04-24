
import React from 'react';
import Main from '../Main/Main';
import { Promo } from '../Promo/Promo';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import { Portfolio } from '../Portfolio/Portfolio';
import { SearchForm } from '../SearchForm/SearchForm';
import { Movies } from '../Movies/Movies';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Profile } from '../Profile/Profile';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { MoviesButton } from '../MoviesButton/MoviesButton';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { ProfileForm } from '../ProfileForm/ProfileForm';
import { Page404 } from '../Page404/Page404';
import { FormContainer } from '../FormContainer/FormContainer';
import { Form } from '../Form/Form';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SearchResult from '../SearchResult/SearchResult';
import Preloader from '../Preloader/Preloader';
import MobileMenu from '../MobileMenu/MobileMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { NavTab } from '../NavTab/NavTab';
import { AboutProject } from '../AboutProject/AboutProject';
import { Route, Routes, useNavigate } from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';



function App() {

  const [isShortMovie, setIsShortMovie] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [moviesQuantity, setMoviesQuantity] = React.useState(12);
  const [displayedMovies, setDisplayedMovies] = React.useState([]);
  const [isMoviesButtonActive, setIsMoviesButtonActive] = React.useState(false);
  const [quantityMultiplier, setQuantityMultiplier] = React.useState(3);
  const [isMoviesSearchSuccessful, setIsMoviesSearchSuccessful] = React.useState(true);
  const [isMoviesRequestSuccessful, setIsMoviesRequestSuccessful] = React.useState(true);
  const [moviesSearchQuery, setMoviesSearchQuery] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [displayedSavedMovies, setDisplayedSavedMovies] = React.useState([]);
  const [isShortSavedMovie, setIsShortSavedMovie] = React.useState(false);
  const [isSavedMoviesButtonActive, setIsSavedMoviesButtonActive] = React.useState(false);
  const [isPatchUserInfoSucesfull, setIsPatchUserInfoSucesfull] = React.useState(false);
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] = React.useState('');
  const [isSavedMoviesSearchSuccessful, setIsSavedMoviesSearchSuccessful] = React.useState(true);
  const [isSavedMoviesRequestSuccessful, setIsSavedMoviesRequestSuccessful] = React.useState(true);
  const [isSaveMovieSucesfull, setIsSaveMovieSucesfull] = React.useState(false);
  const [isDeleteMovieSucesfull, setIsDeleteMovieSucesfull] = React.useState(false);


  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScreenResize = () => {
      if (window.innerWidth >= 1280) {
        setMoviesQuantity(12);
        setQuantityMultiplier(3);
      } else if (window.innerWidth <= 1279 && window.innerWidth >= 768) {
        setMoviesQuantity(8);
        setQuantityMultiplier(2);
      } else if (window.innerWidth <= 767 && window.innerWidth >= 320) {
        setMoviesQuantity(5);
        setQuantityMultiplier(2);
      }
    }
    window.addEventListener('resize', handleScreenResize);
  });

  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      return
    } else {
      auth.checkToken(localStorage.getItem('token'))
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log('Ошибочка вышла', err);
        });
    }
  }, []);

  React.useEffect(() => {
    if (!isLoggedIn) {
      return
    } else {
      setIsSavedMoviesRequestSuccessful(true);
      const savedMoviesFromLocalStorage = localStorage.getItem('savedFilms');
      if (savedMoviesFromLocalStorage === null) {
        mainApi.getSavedMovies(localStorage.getItem('token'))
          .then((savedMoviesRes) => {
            setSavedMovies(savedMoviesRes);
            localStorage.setItem('savedFilms', JSON.stringify(savedMoviesRes));
            const filteredArr = filterMovies(savedMoviesRes, savedMoviesSearchQuery, isShortSavedMovie);
            if (filteredArr.length > 0) {
              setIsSavedMoviesSearchSuccessful(true);
            } else {
              setIsSavedMoviesSearchSuccessful(false);
            }
            const slicedArr = filteredArr.slice(0, moviesQuantity);
            setDisplayedSavedMovies(slicedArr);
            if ((filteredArr.length > quantityMultiplier) && (filteredArr.length > moviesQuantity)) {
              setIsSavedMoviesButtonActive(true);
            } else {
              setIsSavedMoviesButtonActive(false);
            }
            setIsSavedMoviesRequestSuccessful(true);
          })
          .catch((err) => {
            setIsSavedMoviesRequestSuccessful(false);
            console.log(err, 'useEffect SavedMovie');
          })
      } else {
        setSavedMovies(JSON.parse(savedMoviesFromLocalStorage));
        const filteredArr = filterMovies(JSON.parse(savedMoviesFromLocalStorage), savedMoviesSearchQuery, isShortSavedMovie);
        if (filteredArr.length > 0) {
          setIsSavedMoviesSearchSuccessful(true);
        } else {
          setIsSavedMoviesSearchSuccessful(false);
        }
        const slicedArr = filteredArr.slice(0, moviesQuantity);
        setDisplayedSavedMovies(slicedArr);
        if ((filteredArr.length > quantityMultiplier) && (filteredArr.length > moviesQuantity)) {
          setIsSavedMoviesButtonActive(true);
        } else {
          setIsSavedMoviesButtonActive(false);
        }
      }
    }

  }, [isLoggedIn, moviesQuantity, isShortSavedMovie, savedMoviesSearchQuery, isSaveMovieSucesfull, isDeleteMovieSucesfull]);

  React.useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem('films');
    const moviesDurationFromLocalStorage = JSON.parse(localStorage.getItem('movieDurationFilter'));
    const moviesKeywordFromStorage = localStorage.getItem('searchKey');
    if (moviesFromLocalStorage === null) {
      return
    } else {
      setMovies(JSON.parse(moviesFromLocalStorage));
      setIsShortMovie(moviesDurationFromLocalStorage);
      setMoviesSearchQuery(moviesKeywordFromStorage);
      const filteredArr = filterMovies(JSON.parse(moviesFromLocalStorage), moviesSearchQuery, isShortMovie);
      if (filteredArr.length > 0) {
        setIsMoviesSearchSuccessful(true);
      } else {
        setIsMoviesSearchSuccessful(false);
      }
      const slicedArr = filteredArr.slice(0, moviesQuantity);
      setDisplayedMovies(slicedArr);
      if ((filteredArr.length > quantityMultiplier) && (filteredArr.length > moviesQuantity)) {
        setIsMoviesButtonActive(true);
      } else {
        setIsMoviesButtonActive(false);
      }
    }
  }, [moviesQuantity, isShortMovie, moviesSearchQuery, savedMovies]);

  function filterMovies(array, keyword, checkbox) {
    if (!keyword) {
      if (checkbox) {
        return array.filter((movieItem) => {
          const duration = movieItem.duration;
          if (duration < 40) {
            return movieItem;
          }
        });
      } else {
        return array;
      }
    } else {
      const search = String(keyword).toLowerCase();
      if (checkbox) {
        return array.filter((movieItem) => {
          const duration = movieItem.duration;
          const country = String(movieItem.country).toLowerCase();
          const description = String(movieItem.description).toLowerCase();
          const director = String(movieItem.director).toLowerCase();
          const nameEN = String(movieItem.nameEN).toLowerCase();
          const nameRU = String(movieItem.nameRU).toLowerCase();
          if ((country.includes(search) ||
            description.includes(search) ||
            director.includes(search) ||
            nameEN.includes(search) ||
            nameRU.includes(search)) &&
            duration < 40) {
            return movieItem;
          }
        });
      } else {
        return array.filter((movieItem) => {
          const country = String(movieItem.country).toLowerCase();
          const description = String(movieItem.description).toLowerCase();
          const director = String(movieItem.director).toLowerCase();
          const nameEN = String(movieItem.nameEN).toLowerCase();
          const nameRU = String(movieItem.nameRU).toLowerCase();
          if (country.includes(search) ||
            description.includes(search) ||
            director.includes(search) ||
            nameEN.includes(search) ||
            nameRU.includes(search)) {
            return movieItem;
          }
        });
      }
    }
  }

  function handleChoseQuantityMultiplier() {
    const newMultiplier = moviesQuantity + quantityMultiplier;
    setMoviesQuantity(newMultiplier);
  }

  function handleFilterMovies() {
    setIsShortMovie(!isShortMovie);
    localStorage.setItem('movieDurationFilter', !isShortMovie);
  }

  function handleFilterSavedMovies() {
    setIsShortSavedMovie(!isShortSavedMovie);
  }

  function handleMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleSubmitSearchMovie(keyword, chekbox) {
    const moviesFromLocalStorage = localStorage.getItem('films');
    if (moviesFromLocalStorage === null) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((resMovies) => {
          setMovies(resMovies);
          localStorage.setItem('films', JSON.stringify(resMovies));
          localStorage.setItem('searchKey', keyword);
          setMoviesSearchQuery(keyword);
          localStorage.setItem('movieDurationFilter', JSON.stringify(chekbox));
          setIsShortMovie(chekbox);
          setIsMoviesRequestSuccessful(true);
        })
        .catch((err) => {
          setIsMoviesRequestSuccessful(false);
          console.log(err, 'handleSubmitSearchMovie');
        })
        .finally(() => {
          setIsLoading(false);
        })
    } else {
      setMovies(JSON.parse(moviesFromLocalStorage));
      localStorage.setItem('searchKey', keyword);
      setMoviesSearchQuery(keyword);
      localStorage.setItem('movieDurationFilter', JSON.stringify(chekbox));
      setIsShortMovie(chekbox);
    }
  }

  const handleRegisterSubmit = (name, email, password) => {
    auth.register(name, email, password)
      .then((res) => {
        handleLoginSubmit(email, password);
        navigate('/movies');
      })
      .catch((err) => { console.log(err, 'Error from handleRegisterSubmit') })

  }

  const handleLoginSubmit = (password, email) => {
    auth.authorize(password, email)
      .then((res) => {
        localStorage.setItem('token', `${res.jwt}`);
        auth.checkToken(res.jwt)
          .then((user) => {
            setCurrentUser(user);
            setIsLoggedIn(true);
            navigate('/movies');
          })
          .catch((err) => console.log('Ошибка в Login', err))
      })
  }

  function handleUpdateUser(data) {
    mainApi.editUserInfo(data, localStorage.getItem('token'))
      .then((user) => setCurrentUser(user))
      .then(() => {
        setIsPatchUserInfoSucesfull(true);
        setTimeout(() => {
          setIsPatchUserInfoSucesfull(false);
        }, 2000);
      })
      .catch((err) => console.log('Error'));
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentUser({});

    setMovies([]);
    setMoviesSearchQuery('');
    setDisplayedMovies([]);
    setIsShortMovie(false);

    setSavedMovies([]);
    setDisplayedSavedMovies([]);
    setIsShortSavedMovie(false);
    setSavedMoviesSearchQuery('');

    localStorage.removeItem('films');
    localStorage.removeItem('searchedFilms');
    localStorage.removeItem('searchKey');
    localStorage.removeItem('movieDurationFilter');
    localStorage.removeItem('token');
    localStorage.removeItem('savedFilms');

    navigate('/');
  }

  function handleSaveMovie(movie) {
    mainApi.addMovie(movie, localStorage.getItem('token'))
      .then((savedMovie) => {
        const newSavedMoviesArr = [savedMovie, ...savedMovies];
        localStorage.setItem('savedFilms', JSON.stringify(newSavedMoviesArr));
        setSavedMovies(newSavedMoviesArr);
        setIsSaveMovieSucesfull(true);
      })
      .catch((err) => {
        console.log(err, 'handleSaveMovie');
      })
      .finally(() => {
        setIsSaveMovieSucesfull(false);
      })
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id, localStorage.getItem('token'))
      .then((deletedMovie) => {
        console.log(deletedMovie);
        const newSavedArr = savedMovies.filter(savedMovie => savedMovie._id !== deletedMovie._id);
        localStorage.setItem('savedFilms', JSON.stringify(newSavedArr));
        setSavedMovies(newSavedArr);
        setIsDeleteMovieSucesfull(true);
      })
      .catch((err) => {
        console.log(err, 'handleDeleteMovie');
      })
      .finally(() => {
        setIsDeleteMovieSucesfull(false);
      })
  }

  function handleSearchSavedMovies(keyword, chekbox) {
    const savedMoviesFromLocalStorage = localStorage.getItem('savedFilms');
    if (savedMoviesFromLocalStorage === null) {
      mainApi.getSavedMovies(localStorage.getItem('token'))
        .then((resMovies) => {
          setSavedMovies(resMovies);
          localStorage.setItem('savedFilms', JSON.stringify(resMovies));
          setSavedMoviesSearchQuery(keyword);
          setIsShortSavedMovie(chekbox);
        })
    } else {
      setSavedMovies(JSON.parse(savedMoviesFromLocalStorage));
      setSavedMoviesSearchQuery(keyword);
      setIsShortSavedMovie(chekbox);
    }
  }

  function handleCloseMobileMenu() {
    setIsMobileMenuOpen(false);
  }


  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header
            handleMobileMenuOpen={handleMobileMenuOpen}
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route exact path="/" element={
              <Main>
                <Promo />
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
                <Footer />
              </Main>

            }
            />

            <Route path="/movies" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Main>
                  <Movies>
                    <SearchForm
                      handleSubmitSearchMovie={handleSubmitSearchMovie}
                      handleFilterMovies={handleFilterMovies}
                      isShortMovie={isShortMovie}
                      type="movies"
                      moviesSearchQuery={moviesSearchQuery}
                    />
                    <MoviesCardList>
                      {
                        displayedMovies.map((movie) => {

                          const isMovieSaved = savedMovies.some((movieItem) => Number(movieItem.movieId) === movie.id);
                          savedMovies.some((item) => {
                            if ((Number(item.movieId) === movie.id)) {
                              movie._id = item._id;
                            }
                          })
                          return (<MoviesCard
                            isMovieSaved={isMovieSaved}
                            allMovies={true}
                            handleSaveMovie={handleSaveMovie}
                            handleDeleteMovie={handleDeleteMovie}
                            currentMovie={movie}
                            key={movie.id}
                          />)
                        })
                      }
                    </MoviesCardList>
                    <SearchResult
                      isMoviesRequestSuccessful={isMoviesRequestSuccessful}
                      isMoviesSearchSuccessful={isMoviesSearchSuccessful}
                    />
                    <Preloader
                      isLoading={isLoading}
                    />
                    <MoviesButton
                      isMoviesButtonActive={isMoviesButtonActive}
                      handleChoseQuantityMultiplier={handleChoseQuantityMultiplier}
                    />
                  </Movies>
                  <Footer />
                </Main>
              </ProtectedRoute>
            }
            />

            <Route path="/saved-movies" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Main>
                  <SavedMovies>
                    <SearchForm
                      handleSubmitSearchMovie={handleSearchSavedMovies}
                      handleFilterMovies={handleFilterSavedMovies}
                      isShortMovie={isShortSavedMovie}
                      type="savedMovies"
                    />
                    <MoviesCardList>
                      {
                        displayedSavedMovies.map((movie) => {
                          return (<MoviesCard
                            savedMovies={savedMovies}
                            handleDeleteMovie={handleDeleteMovie}
                            userMovies={true}
                            key={movie.movieId}
                            currentMovie={movie}
                          />)
                        })
                      }
                    </MoviesCardList>
                    <SearchResult
                      isMoviesRequestSuccessful={isSavedMoviesRequestSuccessful}
                      isMoviesSearchSuccessful={isSavedMoviesSearchSuccessful}
                    />
                    <MoviesButton
                      isMoviesButtonActive={isSavedMoviesButtonActive}
                      handleChoseQuantityMultiplier={handleChoseQuantityMultiplier}
                    />
                  </SavedMovies>
                  <Footer />
                </Main>
              </ProtectedRoute>

            }
            />

            <Route path="/profile" element={
              <ProtectedRoute isLoggedIn={isLoggedIn} >
                <Main>
                  <Profile
                    handleLogout={handleLogout}
                  >
                    <ProfileForm
                      isPatchUserInfoSucesfull={isPatchUserInfoSucesfull}
                      handleUpdateUser={handleUpdateUser}
                    />
                  </Profile>
                </Main>
              </ProtectedRoute>
            }
            />

            <Route path="/sign-up" element={
              <Main>
                <FormContainer
                  footerText='Уже зарегистрированы?'
                  footerLink='Войти'
                  link='/sign-in'>
                  <Form
                    handleRegisterSubmit={handleRegisterSubmit}
                    handleLoginSubmit={handleLoginSubmit}
                    name='register'
                    title='Добро пожаловать!'
                    buttonText='Зарегистрироваться'>
                  </Form>
                </FormContainer>
              </Main>
            } />

            <Route path="/sign-in"
              element={
                <Main>
                  <FormContainer
                    footerText='Ещё не зарегистрированы?'
                    footerLink='Регистрация'
                    link='/sign-up'>
                    <Form
                      handleRegisterSubmit={handleRegisterSubmit}
                      handleLoginSubmit={handleLoginSubmit}
                      name='auth'
                      title='Рады видеть!'
                      buttonText='Войти'>
                    </Form>
                  </FormContainer>
                </Main>
              } />

            <Route path="*"
              element={
                <Page404 />
              } />

          </Routes>
          <MobileMenu
            handleCloseMobileMenu={handleCloseMobileMenu}
            handleMobileMenuOpen={handleMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
