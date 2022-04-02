
import React from 'react';
import Main from '../Main/Main';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { AuthForm } from '../AuthForm/AuthForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';
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
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { NavTab } from '../NavTab/NavTab';
import { AboutProject } from '../AboutProject/AboutProject';
import api from '../../utils/Api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as auth from '../../utils/auth';


function App() {


  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider>
          <Header />
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
              <Main>
                <Movies>
                  <SearchForm />
                  <MoviesCardList>
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                  </MoviesCardList>
                  <MoviesButton />
                </Movies>
                <Footer />
              </Main>
            }
            />

            <Route path="/saved-movies" element={
              <Main>
                <SavedMovies>
                  <SearchForm />
                  <MoviesCardList>
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                  </MoviesCardList>
                </SavedMovies>
                <Footer />
              </Main>
            }
            />

            <Route path="/profile" element={
              <Main>
                <Profile>
                  <ProfileForm />
                </Profile>
              </Main>
            }
            />

            <Route path="/sign-up" element={
              <Main>
                <Register>
                  <RegisterForm
                    title='Добро пожаловать!'
                    buttonText='Зарегистрироваться' />
                </Register>
              </Main>
            } />

            <Route path="/sign-in"
              element={
                <Main>
                  <Login>
                    <AuthForm
                      title='Рады видеть!'
                      buttonText='Войти' />
                  </Login>
                </Main>
              } />

            <Route path="*"
              element={
                <Page404 />
              } />

          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
