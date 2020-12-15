import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <footer className="page-footer indigo darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Project Manager</h5>
              <p className="grey-text text-lighten-4">
                You can find and use projects and test them or you add of your
                own projects as well its free and simple. So why waiting lets
                Login...
              </p>
              <Link to="/signin" className="red-text">
                Login in Here
              </Link>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="grey-text text-lighten-3"
                    href="https://facebook.com/zahidkhan846"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="grey-text text-lighten-3"
                    href="https://twitter.com/zahidkhanzk846"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="grey-text text-lighten-3"
                    href="https://github.com/zahidkhan846"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="grey-text text-lighten-3"
                    href="https://www.linkedin.com/in/zahidkhan846"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2014 Copyright Code With Zahid
            <a
              target="_blank"
              rel="noreferrer"
              className="grey-text text-lighten-4 right"
              href="https://www.codewithzahid.com"
            >
              Dev Website
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
