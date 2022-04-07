
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
import { FormInput } from '../FormInput/FormInput';
import Preloader from '../Preloader/Preloader';
import MobileMenu from '../MobileMenu/MobileMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { NavTab } from '../NavTab/NavTab';
import { AboutProject } from '../AboutProject/AboutProject';
import { Route, Routes } from 'react-router-dom';


function App() {

  const [isShortMovie, setIsShortMovie] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function handleFilterMovies() {
    setIsShortMovie(!isShortMovie);
  }

  function handleMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }


  return (
    <div className="page">
      <div className="page__container">
        <Header
          handleMobileMenuOpen={handleMobileMenuOpen}
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
            <Main>
              <Movies>
                <SearchForm
                  handleFilterMovies={handleFilterMovies}
                  isShortMovie={isShortMovie}
                />
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
                <SearchForm
                  handleFilterMovies={handleFilterMovies}
                  isShortMovie={isShortMovie}
                />
                <MoviesCardList>
                  <MoviesCard
                    isSavedMovie={true}
                  />
                  <MoviesCard
                    isSavedMovie={true}
                  />
                  <MoviesCard
                    isSavedMovie={true}
                  />
                  <MoviesCard
                    isSavedMovie={true}
                  />
                  <MoviesCard
                    isSavedMovie={true}
                  />
                  <MoviesCard
                    isSavedMovie={true}
                  />
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
              <FormContainer
                footerText='Уже зарегистрированы?'
                footerLink='Войти'
                link='/sign-in'>
                <Form
                  name='register'
                  title='Добро пожаловать!'
                  buttonText='Зарегистрироваться'>
                  <FormInput
                    type='name'
                    title='Имя' />
                  <FormInput
                    type='email'
                    title='E-mail' />
                  <FormInput
                    type='password'
                    title='Пароль' />
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
                    name='auth'
                    title='Рады видеть!'
                    buttonText='Войти'>
                    <FormInput
                      type='email'
                      title='E-mail' />
                    <FormInput
                      type='password'
                      title='Пароль' />
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
      </div>
    </div>
  );
}

export default App;
