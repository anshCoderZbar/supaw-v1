// Default imports
import React from "react";

// Re-usable component import
import { Layout } from "components/layout";

// Page components import
import { HomeBanner } from "page-components/Home/HomeBanner";
import { HomeContainer } from "page-components/Home/HomeContainer";
import { HomeBottomBanner } from "page-components/Home/HomeBottomBanner";

// Styles and images import
import styles from "styles/Home.module.scss";

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
