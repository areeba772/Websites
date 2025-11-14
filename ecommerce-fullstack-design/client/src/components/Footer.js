import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <div className="mb-2">
          &copy; {new Date().getFullYear()} E-COM Store. All rights reserved.
        </div>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
