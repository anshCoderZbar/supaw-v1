// Default imports
import React from "react";

// Re-usable component import
import { Layout } from "components/layout";

// Page components import
import { HomeBanner } from "page-features/Home/HomeBanner";
import { HomeContainer } from "page-features/Home/HomeContainer";

// Styles and images import
import styles from "styles/Home.module.scss";
import { HomeBottomBanner } from "page-features/Home/HomeBottomBanner";

export default function index() {
  return (
    <main>
      <Layout>
        <HomeBanner styles={styles} />
        <HomeContainer styles={styles} />
        <HomeBottomBanner styles={styles} />
      </Layout>
    </main>
  );
}
