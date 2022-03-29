
import React from 'react';
import Main from '../components/Main';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { AuthForm } from '../components/AuthForm';
import { RegisterForm } from '../components/RegisterForm';
import { Promo } from '../components/Promo';
import { Techs } from '../components/Techs';
import { AboutMe } from '../components/AboutMe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { NavTab } from '../components/NavTab';
import { AboutProject } from '../components/AboutProject';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth';


function App() {


  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider>
          {/* <Header
              userEmail={userEmail}
              handleLogout={handleLogout}
              isMenuButtonActive={isMenuButtonActive}
              handleMenuButtonActive={handleMenuButtonActive}
            /> */}
          <Routes>
            <Route path="/" element={
              <Main>
                <Header />
                <Promo />
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Footer />
              </Main>
            }
            />

            <Route path="/sign-up" element={
              <Register>
                <RegisterForm
                  title='Добро пожаловать!'
                  buttonText='Зарегистрироваться' />
              </Register>
            } />
            <Route path="/sign-in"
              element={
                <Login>
                  <AuthForm
                    title='Рады видеть!'
                    buttonText='Войти' />
                </Login>
              } />
          </Routes>

        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
