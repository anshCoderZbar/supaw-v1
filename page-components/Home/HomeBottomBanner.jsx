import { useRouter } from "next/router";
import React from "react";

export const HomeBottomBanner = ({ styles }) => {
  const router = useRouter();
  const data = [
    {
      id: 1,
      heading: "You run a Vet practice?",
      backgroundColor: "#E75C25",
      url: "#1",
    },
    {
      id: 2,
      heading: "Do you run a Pet Store?",
      backgroundColor: "#E89F23",
      url: "#2",
    },
    {
      id: 3,
      heading: "Do you offer Pet Services?",
      backgroundColor: "#7F3FA6",
      url: "#3",
    },
  ];
  return (
    <div id="register" className={styles.bottom_banner}>
      <div className="container-fluid ">
        <div className={styles.bottom_section}>
          {data?.length >= 1 &&
            data.map((elm) => {
              return (
                <div
                  key={elm?.id}
                  className={styles.box}
                  style={{ backgroundColor: elm?.backgroundColor }}
                >
                  <div className={styles.inner_box}>
                    <h4>{elm?.heading}</h4>
                    <button onClick={() => router.push(elm?.url)}>
                      Register now!
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
