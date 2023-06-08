import React from "react";
import Image from "next/image";

import { Layout } from "components/layout";

import styles from "styles/Home.module.scss";
import banner from "assets/images/hero_banner.png";
import doctor from "assets/images/doctor.png";
import arrow from "assets/images/arrow.png";
import gif1 from "assets/images/box_gif_1.gif";
import gif2 from "assets/images/box_gif_2.gif";
import iphone from "assets/images/iphone.png";
import app_store from "assets/images/app_store.png";
import google_play from "assets/images/google_play.png";
import lines from "assets/images/line-top.svg";
import line2 from "assets/images/line2.svg";
import line3 from "assets/images/line3.svg";

export default function index() {
  return (
    <main>
      <Layout>
        <div className={styles.banner_color}>
          <div className="container-fluid main_container py-5">
            <div className="row">
              <div className="col-lg-8">
                <div className={`${styles.banner_top_section}`}>
                  <h1 className="fadein fadein--one">Need Pet Parenting Made Easy?</h1>
                  <p className="fadein fadein--two">
                    Are you finding it challenging to keep track of your pet's
                    timeline? With our user-friendly platform, you can
                    effortlessly centralize your pet's timeline, ensuring you
                    never miss a vaccination, grooming session, or important
                    supply replenishment.
                  </p>
                </div>
                <div className={styles.banner_bottom_images}>
                  <div className={styles.arrow_s}>
                  <Image
                    src={doctor}
                    alt="doctor-image"
                    loading="lazy"
                    className="img-fluid fadein fadein--three"
                  />
                  </div>
                  <div className={styles.arrow_s}>
                  <Image
                    src={arrow}
                    alt="arrow-image"
                    loading="lazy"
                    className="img-fluid fadein fadein--four"
                  />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Image
                  src={banner}
                  alt="mobile-image"
                  loading="lazy"
                  className="img-fluid fadein fadein--five"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page_head}>
          <h2>Experience our</h2>
          <h2>
            Super App - <span>SuPaw!</span>
          </h2>
          <div className="container-fluid convenient">
            <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className={styles.line_top}>
             <Image src={lines} alt="line-top.svg" />
             </div>
             </div>
            </div>
          <div className="row align-items-center grsss">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 Finda">
            <div className={styles.vector1}>
              <h3>Find localised
                Pet Supplies</h3>
                <p>Easily locate nearby pet supplies with our convenient search feature. Find everything your pet needs in your local area.</p>
                <div className="line_s"><Image src={line2} alt="gif-2" /></div>
            </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 align-self-end">
            <div
              className={styles.layout_box}
              style={{ backgroundColor: "#e89f23" }}
            >
              <Image src={gif1} alt="gif-2" />
            </div>
            </div>
          </div>
          </div>
          <div className="container-fluid convenient">
          <div className="row align-items-center grsss2">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className={styles.vector1}>
            <h3>Book vet appointments
& manage digital records</h3>
                <p>Effortlessly schedule vet appointments and manage your pet's digital records all in one place for seamless veterinary care.</p>
                <div className="line_s vet"><Image src={line2} alt="gif-2" /></div>
            </div>
            
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div
              className={styles.layout_box}
              style={{ backgroundColor: "#E75C25" }}
            >
              <Image src={gif2} alt="gif-2" />
            </div>
            </div>
          </div>
          </div>
          <div className="container-fluid convenient">
          <div className="row align-items-center grsss2">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className={styles.vector1}>
            <h3>Browse and book 
Petcare Services</h3>
                <p>Discover a wide range of petcare services and effortlessly book the perfect care for your furry companion.</p>
            </div>
            <div className={styles.line_top2}>
             <Image src={line3} alt="line3.svg" />
             </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div
              className={styles.layout_box3}
              style={{ backgroundColor: "#7F3FA6" }}
            >
              <Image src={iphone} alt="iphone" />
            </div>
            </div>
          </div>
        </div>
        </div>
        <div className={styles.bottom_head}>
          <h2>Our one-stop-shop platform for all your Petcare needs.</h2>
          <div className={styles.bottom_img}>
            <div className={styles.de_s}>
            <Image src={app_store} className="app-store" />
            </div>
            <div className={styles.de_s}>
            <Image src={google_play} className="google-play" />
            </div>
          </div>
        </div>
        <div className={styles.bottom_banner}>
          <div className="container-fluid ">
            <div className={styles.bottom_section}>
              <div
                className={styles.box}
                style={{ backgroundColor: "#E75C25" }}
              >
                <div className={styles.inner_box}>
                <h4>You run a Vet practice?</h4>
                <button>Register now!</button>
                </div>
              </div>
              <div
                className={styles.box}
                style={{ backgroundColor: "#E89F23" }}
              >
                 <div className={styles.inner_box}>
                <h4>Do you run a Pet Store?</h4>
                <button>Register now!</button>
                </div>
              </div>
              <div
                className={styles.box}
                style={{ backgroundColor: "#7F3FA6" }}
              >
                 <div className={styles.inner_box}>
                <h4>Do you offer Pet Services?</h4>
                <button>Register now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
