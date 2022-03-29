import { Link } from 'react-router-dom';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__copyright">
          {`© ${year}`}
        </p>
        <div className="footer__links">
          <Link to="#" className="footer__link">Яндекс.Практикум</Link>
          <Link to="#" className="footer__link">Github</Link>
          <Link to="#" className="footer__link">Facebook</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;