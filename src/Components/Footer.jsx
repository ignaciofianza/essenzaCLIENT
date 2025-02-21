import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <h5>Dirección</h5>
            <div className="d-flex align-items-center">
              <MapPin className="me-2" />
              <a
                className="link-dark link-underline-opacity-75"
                href="https://maps.app.goo.gl/xoVAofVuKeVZqhD19"
              >
                P.º Maritimo Playa del Bol, 26, 03710 Calp, Alicante, España
              </a>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Contacto</h5>
            <p className="d-flex align-items-center">
              <Mail className="me-2" />
              <a
                href="mailto:ignacio@ignaciofianza.com"
                className="link-dark link-underline-opacity-50"
              >
                ignacio@ignaciofianza.com
              </a>
            </p>
            <p className="d-flex align-items-center">
              <Phone className="me-2" />
              <a
                href="tel:+34966940657"
                className="link-dark link-underline-opacity-50"
              >
                +598 98 688 030
              </a>
            </p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Social</h5>
            <p className="d-flex align-items-center">
            <i className="bi bi-instagram me-2 fs-5"></i>
              <a
                href="mailto:ignacio@ignaciofianza.com"
                className="link-dark link-underline-opacity-50"
              >
                Instagram
              </a>
            </p>
            <p className="d-flex align-items-center">
            <i className="bi bi-twitter-x me-2 fs-5"></i>
              <a
                href="tel:+34966940657"
                className="link-dark link-underline-opacity-50"
              >
                X 
              </a>
            </p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/ignaciofianza/essenzaCLIENT"
                  className="link-dark link-underline-opacity-10"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="link-dark link-underline-opacity-10"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>
            &copy; 2025 Essenza. Desarrollado por{" "}
            <a
              href="https://www.ignaciofianza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              Ignacio Fianza
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
