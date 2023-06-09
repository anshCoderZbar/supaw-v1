import React from "react";
import Image from "next/image";

import banner from "assets/images/hero_banner.png";
import doctor from "assets/images/doctor.png";
import arrow from "assets/images/arrow.png";

export const HomeBanner = ({ styles }) => {
  return (
    <div className={styles.banner_color}>
      <div className="container-fluid main_container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className={`${styles.banner_top_section}`}>
              <h1 className="fadein fadein--one">
                Need Pet Parenting Made Easy?
              </h1>
              <p className="fadein fadein--two">
                Are you finding it challenging to keep track of your pet's
                timeline? With our user-friendly platform, you can effortlessly
                centralize your pet's timeline, ensuring you never miss a
                vaccination, grooming session, or important supply
                replenishment.
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
  );
};
