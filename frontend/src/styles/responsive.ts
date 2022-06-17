const size = {
  mobileS: "0px",
  mobileM: "200px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: 767px)`,
  mobile: `(min-width: ${size.mobileM}) and (max-width: 900px)`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: 950px)`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

//exemplo de como usar depois

// @media ${device.mobile} {
//     max-width: 100vw;
//     align-items: center;
//     justify-content: center;
//   }
