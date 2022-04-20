
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
  const [serchedMovies, setSerchedMovies] = React.useState([]);
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


  const navigate = useNavigate();

  // screen size //

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

  // check token //

  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      return
    } else {
      auth.checkToken(localStorage.getItem('token'))
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          navigate('/movies');
        })
        .catch((err) => {
          console.log('Ошибочка вышла', err);
          navigate('/');
        });
    }
  }, []);

  // SavedMovies //

  React.useEffect(() => {
    mainApi.getSavedMovies(localStorage.getItem('token'))
      .then((savedMoviesFromDB) => {
        setSavedMovies(savedMoviesFromDB);
        const slicedSavedMovies = savedMoviesFromDB.slice(0, moviesQuantity);
        setDisplayedSavedMovies(slicedSavedMovies);
        if ((savedMoviesFromDB.length > quantityMultiplier) && (savedMoviesFromDB.length > moviesQuantity)) {
          setIsSavedMoviesButtonActive(true);
        } else {
          setIsSavedMoviesButtonActive(false);
        }
      })
      .then(() => {
        const searchedMoviesFromStorage = JSON.parse(localStorage.getItem('searchedFilms'));
        const durationFilterFromStorage = JSON.parse(localStorage.getItem('movieDurationFilter'));
        const searchKeyFromStorage = String(localStorage.getItem('searchKey'));
        setIsShortMovie(JSON.parse(durationFilterFromStorage));
        setMoviesSearchQuery(searchKeyFromStorage);
        setSerchedMovies(searchedMoviesFromStorage);
        const slicedMoviesArr = searchedMoviesFromStorage.slice(0, moviesQuantity);
        setDisplayedMovies(slicedMoviesArr);
        if ((searchedMoviesFromStorage.length > quantityMultiplier) && (searchedMoviesFromStorage.length > moviesQuantity)) {
          setIsMoviesButtonActive(true);
        } else {
          setIsMoviesButtonActive(false);
        }
      })
      .catch((err) => console.log(err, 'useeffect saved movies'))
  }, [moviesQuantity]);

  function handleChoseQuantityMultiplier() {
    const newMultiplier = moviesQuantity + quantityMultiplier;
    setMoviesQuantity(newMultiplier);
    setDisplayedMovies(serchedMovies.slice(0, newMultiplier));
    setDisplayedSavedMovies(savedMovies.slice(0, newMultiplier));
  }

  function handleFilterMovies() {
    setIsShortMovie(!isShortMovie);
  }

  function handleFilterSavedMovies() {
    setIsShortSavedMovie(!isShortSavedMovie);
  }

  function handleMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleSubmitSearchMovie(keyword, movieDurationFilter) {

    setIsMoviesSearchSuccessful(true);

    localStorage.setItem('movieDurationFilter', movieDurationFilter);

    setIsLoading(true);

    moviesApi.getMovies()
      .then((resMovies) => {
        setIsMoviesRequestSuccessful(true);
        setMovies(resMovies);
        setIsLoading(false);
      })
      .then(() => {
        const search = keyword.movies.toLowerCase();

        setMoviesSearchQuery(search);
        localStorage.setItem('searchKey', search);
        if (movieDurationFilter) {
          const filteredMovies = movies.filter((movie) => {
            const duration = movie.duration;
            const country = String(movie.country).toLowerCase();
            const description = String(movie.description).toLowerCase();
            const director = String(movie.director).toLowerCase();
            const nameEN = String(movie.nameEN).toLowerCase();
            const nameRU = String(movie.nameRU).toLowerCase();
            if ((country.includes(search) ||
              description.includes(search) ||
              director.includes(search) ||
              nameEN.includes(search) ||
              nameRU.includes(search)) &&
              duration < 40) {
              return movie;
            }
          });
          setSerchedMovies(filteredMovies);
          localStorage.setItem('searchedFilms', JSON.stringify(filteredMovies));
          if (filteredMovies.length > 0) {
            setIsMoviesSearchSuccessful(true);
          } else {
            setIsMoviesSearchSuccessful(false);
          }
          const slicedMoviesArr = filteredMovies.slice(0, moviesQuantity);
          localStorage.setItem('displayedFilms', JSON.stringify(slicedMoviesArr));
          setDisplayedMovies(slicedMoviesArr);
          if ((filteredMovies.length > quantityMultiplier) && (filteredMovies.length > moviesQuantity)) {
            console.log(moviesQuantity)
            setIsMoviesButtonActive(true);
          } else {
            setIsMoviesButtonActive(false);
          }

        } else {
          const filteredMovies = movies.filter((movie) => {
            const country = String(movie.country).toLowerCase();
            const description = String(movie.description).toLowerCase();
            const director = String(movie.director).toLowerCase();
            const nameEN = String(movie.nameEN).toLowerCase();
            const nameRU = String(movie.nameRU).toLowerCase();
            if (country.includes(search) ||
              description.includes(search) ||
              director.includes(search) ||
              nameEN.includes(search) ||
              nameRU.includes(search)) {
              return movie;
            }
          });
          setSerchedMovies(filteredMovies);
          localStorage.setItem('searchedFilms', JSON.stringify(filteredMovies));
          if (filteredMovies.length > 0) {
            setIsMoviesSearchSuccessful(true);
          } else {
            setIsMoviesSearchSuccessful(false);
          }
          const slicedMoviesArr = filteredMovies.slice(0, moviesQuantity);
          localStorage.setItem('displayedFilms', JSON.stringify(slicedMoviesArr));
          setDisplayedMovies(slicedMoviesArr);
          if ((filteredMovies.length > quantityMultiplier) && (filteredMovies.length > moviesQuantity)) {
            console.log(moviesQuantity)
            setIsMoviesButtonActive(true);
          } else {
            setIsMoviesButtonActive(false);
          }
        }

      })
      // .then(() => {
      //   if (serchedMovies.length > 0) {
      //     setIsMoviesSearchSuccessful(true);
      //   } else {
      //     setIsMoviesSearchSuccessful(false);
      //   }
      //   const slicedMoviesArr = serchedMovies.slice(0, moviesQuantity);
      //   localStorage.setItem('displayedFilms', JSON.stringify(slicedMoviesArr));
      //   setDisplayedMovies(slicedMoviesArr);
      //   if (serchedMovies.length > moviesQuantity) {
      //     setIsMoviesButtonActive(true);
      //   }
      // })
      .catch((err) => { setIsMoviesSearchSuccessful(true); setIsLoading(false); setIsMoviesRequestSuccessful(false); console.log('Ошибочка вышла', err) });

  }

  // Register //

  const handleRegisterSubmit = (name, email, password) => {
    auth.register(name, email, password)
      .then((res) => {
        navigate('/sign-in');
      })
      .catch((err) => { console.log(err, 'Error from handleRegisterSubmit') })

  }

  // Login //

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

  // UpdateUser //

  function handleUpdateUser(data) {
    mainApi.editUserInfo(data, localStorage.getItem('token'))
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log('Error'));
  }

  // Logout //
  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem('token');
    navigate('/sign-in');
  }

  function handleSaveMovie(movie) {
    mainApi.addMovie(movie, localStorage.getItem('token'))
      .then(() => {
        mainApi.getSavedMovies(localStorage.getItem('token'))
          .then((savedMoviesRes) => {
            setSavedMovies(savedMoviesRes);
            const slicedMoviesArr = savedMoviesRes.slice(0, moviesQuantity);
            setDisplayedSavedMovies(slicedMoviesArr);
            if (savedMoviesRes.length > moviesQuantity) {
              setIsSavedMoviesButtonActive(true);
            }
          })
          .catch((err) => console.log(err, 'handleSaveMovie'))
      })
      .catch((err) => console.log(err, 'handleSaveMovie'))
  }

  function handleDeleteMovie(movieId) {
    mainApi.deleteMovie(movieId, localStorage.getItem('token'))
      .then((deletedMovie) => {
        setDisplayedSavedMovies(displayedSavedMovies.filter((displayedSavedMovie) => displayedSavedMovie.movieId !== deletedMovie.movieId));
        const displayedMoviesFromStorage = localStorage.getItem('displayedFilms');
        setDisplayedMovies(JSON.parse(displayedMoviesFromStorage));
      })
      // .then((deletedMovie) => setDisplayedSavedMovies((displayedSavedMovies) => displayedSavedMovies.filter((displayedSavedMovie) => displayedSavedMovie.movieId !== deletedMovie.movieId)))
      .catch((err) => console.log(err, 'handleDeleteMovie'))
  }

  function handleSearchSavedMovies(savedMovieKeyword, savedMovieDurationFilter) {

    const search = savedMovieKeyword.savedMovies.toLowerCase();
    if (savedMovieDurationFilter) {
      const filteredMovies = savedMovies.filter((savedMovie) => {
        const duration = savedMovie.duration;
        const country = String(savedMovie.country).toLowerCase();
        const description = String(savedMovie.description).toLowerCase();
        const director = String(savedMovie.director).toLowerCase();
        const nameEN = String(savedMovie.nameEN).toLowerCase();
        const nameRU = String(savedMovie.nameRU).toLowerCase();
        if ((country.includes(search) ||
          description.includes(search) ||
          director.includes(search) ||
          nameEN.includes(search) ||
          nameRU.includes(search)) &&
          duration < 40) {
          return savedMovie;
        }
      });
      setDisplayedSavedMovies(filteredMovies);

    } else {
      const filteredMovies = savedMovies.filter((savedMovie) => {
        const country = String(savedMovie.country).toLowerCase();
        const description = String(savedMovie.description).toLowerCase();
        const director = String(savedMovie.director).toLowerCase();
        const nameEN = String(savedMovie.nameEN).toLowerCase();
        const nameRU = String(savedMovie.nameRU).toLowerCase();
        if (country.includes(search) ||
          description.includes(search) ||
          director.includes(search) ||
          nameEN.includes(search) ||
          nameRU.includes(search)) {
          return savedMovie;
        }
      });
      setDisplayedSavedMovies(filteredMovies);
    }

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
                      serchedMovies={serchedMovies}
                      moviesSearchQuery={moviesSearchQuery}
                    />
                    <MoviesCardList>
                      {
                        displayedMovies.map((movie) => {
                          return (<MoviesCard
                            savedMovies={savedMovies}
                            allMovies={true}
                            handleSaveMovie={handleSaveMovie}
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
                    {/* <FormInput
                    type='name'
                    title='Имя' />
                  <FormInput
                    type='email'
                    title='E-mail' />
                  <FormInput
                    type='password'
                    title='Пароль' /> */}
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
                      {/* <FormInput
                      type='email'
                      title='E-mail' />
                    <FormInput
                      type='password'
                      title='Пароль' /> */}
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
            handleMobileMenuOpen={handleMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
