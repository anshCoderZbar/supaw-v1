import React from "react";
import Image from "next/image";

import styles from "styles/Header.module.scss";

import logo from "assets/images/logo.png";

export const Header = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light py-4 ${styles.main_nav}`}
    >
      <div className="container-fluid">
        <Image src={logo} loading="lazy" alt="headerLogo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className={`navbar-nav ms-auto gap-lg-4 align-items-center ${styles.o_s_s}`}>
            <li className="nav-item fw-semibold active">
              <a className="nav-link text-dark" href="#">
                Pet Supplies
              </a>
            </li>
            <li className="nav-item fw-semibold">
              <a className="nav-link text-dark" href="#">
                Veterinary
              </a>
            </li>
            <li className="nav-item fw-semibold">
              <a className="nav-link text-dark" href="#">
                Pet Services
              </a>
            </li>
            <li className="nav-item fw-semibold">
              <a
                className={`nav-link text-white px-4 ${styles.headBtn} `}
                href="#"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
