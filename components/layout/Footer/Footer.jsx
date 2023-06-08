import React from "react";
import Image from "next/image";

import styles from "styles/Footer.module.scss";
import footerLogo from "assets/images/footer.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xxl-8 col-xl-6 col-lg-6 col-md-6 col-12">
            <Link href="/">
              <Image src={footerLogo} alt="footerLogo" loading="lazy" />
            </Link>
            <p className="All">© {new Date().getFullYear()} Supaw. All rights reserved.</p>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-6 col-12 text-white">
                <h4>About Supaw</h4>
                <ul className="list-unstyled mt-4">
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Who we are</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Blog</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">FAQ</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Membership</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Contact</Link> Us
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-12 text-white">
                <h4>Company</h4>
                <ul className="list-unstyled mt-4">
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Link 1</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Link 2</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Link 3</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Link 4</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-12 text-white">
                <h4>Social</h4>
                <div className="d-flex gap-3 mt-4 mt-lg-0">
                  <div className={styles.social}>
                    <Link href="/" >
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </div>
                  <div className={styles.social}>
                    <Link href="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </div>
                  <div className={styles.social}>
                    <Link href="/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
