import React from "react";
import "./Header.scss";
const Header = props => {
  return (
    <div className="header-gallery--nav">
      <div className="information--navigation-container">
        <div className="information--navigation">
          <div className="logo-icon">
            <svg
              className="gyuto-logo"
              width="100"
              height="40"
              viewBox="0 0 99 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="g"
                d="M15.3252 15.78L20.9252 15.885C22.0219 15.885 23.0952 15.7917 24.1452 15.605C24.2386 15.8383 24.2852 16.0367 24.2852 16.2L24.2152 16.62C23.3286 16.9933 22.8386 17.7517 22.7452 18.895C22.5819 20.4817 22.5002 22.7217 22.5002 25.615C21.1002 25.615 19.4786 25.79 17.6352 26.14C15.7919 26.5133 14.3219 26.7 13.2252 26.7C9.2119 26.7 6.03857 25.4517 3.70523 22.955C1.39523 20.435 0.240234 17.2733 0.240234 13.47C0.240234 9.64332 1.50023 6.48166 4.02023 3.98499C6.54023 1.48832 9.76023 0.23999 13.6802 0.23999C16.8536 0.23999 19.6652 0.578324 22.1152 1.25499C22.2786 1.30166 22.3602 1.38332 22.3602 1.49999C22.3602 1.61666 22.3486 1.76832 22.3252 1.95499C22.3252 2.14166 22.3019 2.40999 22.2552 2.75999C22.2319 3.08666 22.2086 3.45999 22.1852 3.87999C22.1386 4.76666 22.1152 5.93332 22.1152 7.37999C21.9519 7.47333 21.7302 7.51999 21.4502 7.51999C21.1702 7.51999 20.9486 7.48499 20.7852 7.41499C20.3652 5.52499 20.0619 4.34666 19.8752 3.87999C18.0319 2.29332 15.7919 1.49999 13.1552 1.49999C10.5419 1.49999 8.36024 2.43332 6.61024 4.29999C4.88357 6.16666 4.02023 8.72166 4.02023 11.965C4.02023 14.2517 4.39357 16.3983 5.14023 18.405C5.91024 20.4117 7.0419 22.0683 8.53524 23.375C10.0519 24.6583 11.8019 25.3 13.7852 25.3C15.7919 25.3 17.7052 24.88 19.5252 24.04V21.905C19.5252 20.155 19.4552 18.5683 19.3152 17.145C18.1252 17.005 16.7952 16.935 15.3252 16.935C15.2319 16.7717 15.1852 16.585 15.1852 16.375L15.3252 15.78Z"
                fill="white"
              />
              <path
                className="y"
                d="M30.0036 8.74499L33.0136 8.63999C33.0603 8.75666 33.0836 8.93166 33.0836 9.16499L33.0136 9.72499C32.2903 9.72499 31.777 9.74832 31.4736 9.79499C31.6836 11.2183 32.2436 13.0267 33.1536 15.22L36.5486 23.62L39.5936 15.815C40.6203 13.1783 41.2036 11.2183 41.3436 9.93499C40.5036 9.84166 39.6403 9.79499 38.7536 9.79499C38.6603 9.65499 38.6136 9.49166 38.6136 9.30499C38.6136 9.11832 38.637 8.93166 38.6836 8.74499H42.1136C43.187 8.74499 44.167 8.67499 45.0536 8.53499C45.2403 8.83833 45.3336 9.14166 45.3336 9.44499C44.7503 9.70166 44.3303 9.95832 44.0736 10.215C43.4436 10.8917 42.7553 12.0933 42.0086 13.82L36.9336 26C36.6303 26.7233 36.1403 27.9717 35.4636 29.745C34.787 31.5417 34.3086 32.79 34.0286 33.49C33.772 34.19 33.527 34.8433 33.2936 35.45C33.0603 36.08 32.792 36.7333 32.4886 37.41C31.8586 38.8567 31.357 39.58 30.9836 39.58C30.867 39.58 30.622 39.51 30.2486 39.37C29.2453 39.02 28.1136 38.705 26.8536 38.425C26.8536 37.9583 26.9586 37.585 27.1686 37.305C28.0086 37.445 28.4636 37.515 28.5336 37.515C29.2103 37.515 30.0736 36.7217 31.1236 35.135C32.197 33.5717 33.0253 32.02 33.6086 30.48L34.8686 27.12L29.1636 13.12C28.5803 11.65 28.0436 10.6583 27.5536 10.145C27.2503 9.77166 26.7953 9.49166 26.1886 9.30499C26.1886 8.88499 26.247 8.58166 26.3636 8.39499C27.9036 8.62832 29.117 8.74499 30.0036 8.74499Z"
                fill="white"
              />
              <path
                className="u"
                d="M62.5941 7.93999C62.8041 7.98666 62.9791 8.12666 63.1191 8.35999C62.9091 9.94666 62.8041 12.56 62.8041 16.2L62.8391 21.205C62.8391 23.305 63.3641 24.355 64.4141 24.355L65.6741 24.32C65.7674 24.4833 65.8141 24.67 65.8141 24.88L65.7791 25.265C64.6124 25.4517 63.7958 25.6733 63.3291 25.93L62.4191 26.35C62.3024 26.42 62.1274 26.5367 61.8941 26.7C61.3808 26.5133 60.9491 26.105 60.5991 25.475C60.2491 24.8217 60.0508 24.1683 60.0041 23.515C58.0208 24.7517 55.7458 25.8133 53.1791 26.7C51.6858 26.7 50.5658 26.1517 49.8191 25.055C49.0958 23.935 48.7341 22.4183 48.7341 20.505V13.82C48.7341 12.2333 48.6641 11.23 48.5241 10.81C48.3841 10.3667 47.9758 10.075 47.2991 9.93499L46.1441 9.79499C46.0741 9.65499 46.0391 9.50333 46.0391 9.33999L46.1441 8.91999C46.5408 8.84999 47.4391 8.69832 48.8391 8.46499L51.3241 7.93999C51.5108 7.98666 51.6741 8.12666 51.8141 8.35999C51.6274 9.64333 51.5341 13.015 51.5341 18.475C51.5341 22.3017 52.5608 24.215 54.6141 24.215C55.3374 24.215 56.0608 24.0867 56.7841 23.83C57.5308 23.5733 58.0908 23.3283 58.4641 23.095C58.8374 22.8383 59.3158 22.4883 59.8991 22.045C59.9691 20.505 60.0041 19.3967 60.0041 18.72V14.485C60.0041 13.0617 59.9341 12.07 59.7941 11.51C59.6774 10.95 59.4908 10.5767 59.2341 10.39C59.0008 10.18 58.6741 10.0283 58.2541 9.93499L57.0991 9.79499L56.9941 9.33999L57.0991 8.91999C57.3324 8.87332 57.7524 8.81499 58.3591 8.74499C58.9891 8.67499 59.8174 8.53499 60.8441 8.32499C61.8708 8.11499 62.4541 7.98666 62.5941 7.93999ZM51.3591 5.31499C50.5891 4.75499 49.9941 3.98499 49.5741 3.00499C49.8541 2.67833 50.2274 2.33999 50.6941 1.98999C51.1841 1.61666 51.6041 1.35999 51.9541 1.21999C52.8408 1.87333 53.4241 2.65499 53.7041 3.56499C52.9808 4.42832 52.1991 5.01166 51.3591 5.31499ZM58.9191 5.31499C58.1491 4.75499 57.5541 3.98499 57.1341 3.00499C57.4141 2.67833 57.7874 2.33999 58.2541 1.98999C58.7441 1.61666 59.1641 1.35999 59.5141 1.21999C60.4008 1.87333 60.9841 2.65499 61.2641 3.56499C60.5408 4.42832 59.7591 5.01166 58.9191 5.31499Z"
                fill="white"
              />
              <path
                className="t"
                d="M73.2122 18.475C73.2122 22.3483 73.8772 24.285 75.2072 24.285C76.1872 24.285 77.4589 23.9583 79.0222 23.305C79.3722 23.4217 79.5472 23.7483 79.5472 24.285C77.8439 25.195 75.8839 26 73.6672 26.7C72.5706 26.7 71.7306 26.14 71.1472 25.02C70.5872 23.9 70.3072 22.395 70.3072 20.505V12.385C70.3072 11.0083 70.2256 10.32 70.0622 10.32L67.4722 10.355C67.3089 10.3083 67.2272 10.1917 67.2272 10.005C67.3439 9.77166 67.4489 9.35166 67.5422 8.74499H70.0272C70.2139 8.74499 70.3072 8.33666 70.3072 7.51999L70.2722 4.54499C71.1356 4.19499 72.0222 3.47166 72.9322 2.37499C73.2122 2.37499 73.4222 2.44499 73.5622 2.58499C73.3522 5.03499 73.2472 7.08833 73.2472 8.74499C74.9506 8.74499 76.6306 8.66332 78.2872 8.49999C78.4506 8.59333 78.5322 8.73332 78.5322 8.91999C78.3922 9.15332 78.2756 9.58499 78.1822 10.215L73.2122 10.285V18.475Z"
                fill="white"
              />
              <path
                className="o"
                d="M98.4945 17.46C98.4945 22.64 95.4845 25.72 89.4645 26.7C86.9912 26.7 84.9029 25.825 83.1995 24.075C81.5195 22.3017 80.6795 20.0967 80.6795 17.46C80.6795 12.2333 83.7012 9.14166 89.7445 8.18499C92.1945 8.18499 94.2595 9.08333 95.9395 10.88C97.6429 12.6767 98.4945 14.87 98.4945 17.46ZM90.2345 25.195C93.5945 25.195 95.2745 23.0483 95.2745 18.755C95.2745 16.3283 94.7145 14.205 93.5945 12.385C92.4745 10.565 90.9929 9.65499 89.1495 9.65499C87.3062 9.65499 85.9645 10.25 85.1245 11.44C84.3079 12.6067 83.8995 14.2867 83.8995 16.48C83.8995 18.65 84.4712 20.645 85.6145 22.465C86.7579 24.285 88.2979 25.195 90.2345 25.195ZM85.5795 5.31499C84.8095 4.75499 84.2145 3.98499 83.7945 3.00499C84.0745 2.67833 84.4479 2.33999 84.9145 1.98999C85.4045 1.61666 85.8245 1.35999 86.1745 1.21999C87.0612 1.87333 87.6445 2.65499 87.9245 3.56499C87.2012 4.42832 86.4195 5.01166 85.5795 5.31499ZM93.1395 5.31499C92.3695 4.75499 91.7745 3.98499 91.3545 3.00499C91.6345 2.67833 92.0079 2.33999 92.4745 1.98999C92.9645 1.61666 93.3845 1.35999 93.7345 1.21999C94.6212 1.87333 95.2045 2.65499 95.4845 3.56499C94.7612 4.42832 93.9795 5.01166 93.1395 5.31499Z"
                fill="white"
              />
            </svg>
          </div>
          <h4 className="head-title-slider">{props.title}</h4>
        </div>
      </div>
      <div className="pagination--number">
        <p>0{props.id}/05</p>
      </div>
    </div>
  );
};

export default Header;
