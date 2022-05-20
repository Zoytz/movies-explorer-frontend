import { Route, Routes } from 'react-router-dom';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Routes>
      < Route exact path="/" element={
        <footer className="footer page__footer">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__info">
            <p className="footer__copyright">
              {`© ${year}`}
            </p>
            <div className="footer__links">
              <a target="_blank" rel="noreferrer" href="https://practicum.yandex.ru" className="footer__link page__link">Яндекс.Практикум</a>
              <a target="_blank" rel="noreferrer" href="https://github.com/" className="footer__link page__link">Github</a>
              {/* <a target="_blank" rel="noreferrer" href="https://www.torproject.org/" className="footer__link page__link">TOR for Facebook</a> */}
            </div>
          </div>
        </footer>
      } />

      < Route path="*" element={
        <>
        </>
      } />
    </Routes>

  );
}

export default Footer;