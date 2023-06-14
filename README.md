<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<div align="center">
  <img src="/README/signature.PNG" alt="LOGO">
</div>

<h3 align="center">Social Stock Analysis (Stock Sense)</h3>

  <p align="center">
    Welcome to my Stock Sense's code!
    <br/>
    Introducing StockSense: Revolutionizing Stock Analysis through Social Sentiment and Expert Insights
    <br />
    <a href="https://github.com/RyanJKS/social-stock-analysis/tree/master/src"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://social-stock-analysis.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/RyanJKS/social-stock-analysis-backend">View Backend Code</a>
    ·
    <a href="https://jhelan.dev/">View Portfolio Website</a>
    ·
    <a href="https://github.com/RyanJKS/social-stock-analysis/issues">Report Bug</a>
    ·
    <a href="https://github.com/RyanJKS/social-stock-analysis/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#extra-packages">Extra Packages</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

There are 2 parts to this whole project. This is the front end and the backend can be viewed using the link above.

StockSense is a cutting-edge, fully responsive React application that will captivate your attention and leave you eager to explore its extensive features. Designed to empower investors and traders with comprehensive stock analysis, StockSense leverages the power of social media sentiment, news articles, and expert opinions to provide real-time insights into the market.

<!-- put gif video here og how it fully works -->

<div align="center">
  <img src="/README/intro.gif" alt="Usage GIF">
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![Material UI][Material-UI.js]][Material-UI-url]
- [![React Router][ReactRouter.js]][ReactRouter-url]

### Extra Packages

- REST API (Finhub and Alpha Vantage) - Click <a href="https://finnhub.io/docs/api/introduction"
                target="_blank"
                rel="noreferrer"> here</a> for Finhub Documentation and <a href="https://www.alphavantage.co/documentation/" target="_blank" rel="noreferrer"> here </a> for Alpha Vantage Documentation
- React Icons
- Material UI Icons
- React ChartJs 2
- Vercel (Deployment)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This project is fully responsive and is adjustable to suit your needs on any device.

Upon entering StockSense, users are greeted with a sleek and intuitive interface. The first step is to search for a particular stock of interest. Once the stock is selected, a personalized dashboard is generated, displaying key information and visualizations that gauge public sentiment and expert recommendations.

<div align="center">
  <img src="/README/search.PNG" alt="D">
</div>

The centerpiece of the dashboard is a dynamic pie chart, intelligently crafted from social media conversations on platforms like Twitter and Reddit, as well as sentiments extracted from news articles. This chart provides a holistic view of how the stock is currently being perceived, ranging from strong buy to strong sell recommendations. Users can leverage this sentiment analysis to make informed decisions, backed by the collective wisdom of the online community.

In addition to social sentiment analysis, StockSense provides a comprehensive overview of expert opinions. A stacked bar chart showcases the analysis of renowned analysts and market gurus over the past four months. With opinions categorized as sell, hold, or buy, this chart offers valuable insights from industry experts, enabling users to align their investment strategies accordingly.

<div align="center">
  <img src="/README/centerpiece.PNG" alt="Dashboard">
</div>

To further validate the sentiment data, StockSense offers a curated collection of news articles relevant to the selected stock. These articles, spanning the last two days, enable users to confirm and corroborate the sentiment reflected in the chart. By staying up to date with the latest news, users gain a more comprehensive understanding of the factors influencing the stock's performance.

<div align="center">
  <img src="/README/news.PNG" alt="News">
</div>

Underneath its sleek interface, StockSense is powered by the React framework and seamlessly integrates with robust financial APIs such as FinHub and Alpha Vantage. This ensures that all stock data, sentiment analysis, and expert insights are fetched in real-time, providing users with the most accurate and up-to-date information.

Whether you're a seasoned investor or just starting your journey in the stock market, StockSense is the go-to app for data-driven decision-making. With its visually stunning visualizations, personalized dashboards, and real-time social sentiment analysis, StockSense is sure to capture your attention and leave you wanting to explore the vast array of features it has to offer.

Experience the future of stock analysis with StockSense – your trusted companion in navigating the complex world of investments.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

In order to get started you will need to do the libraries mentioned above and configure your repository using the following steps:

### Prerequisites

NPM is essential before any further steps are made since it is used to install all the necessary libraries for this project.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/RyanJKS/social-stock-analysis.git
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Jhelan Suggun - [@linkedIn](https://www.linkedin.com/in/jhelan-suggun-jks7n99/) - jksuggun@hotmail.co.uk

Project Link: [https://github.com/RyanJKS/social-stock-analysis](https://github.com/RyanJKS/social-stock-analysis)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/RyanJKS/social-stock-analysis.svg?style=for-the-badge
[contributors-url]: https://github.com/RyanJKS/social-stock-analysis/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RyanJKS/social-stock-analysis.svg?style=for-the-badge
[forks-url]: https://github.com/RyanJKS/social-stock-analysis/network/members
[stars-shield]: https://img.shields.io/github/stars/RyanJKS/social-stock-analysis.svg?style=for-the-badge
[stars-url]: https://github.com/RyanJKS/social-stock-analysis/stargazers
[issues-shield]: https://img.shields.io/github/issues/RyanJKS/social-stock-analysis.svg?style=for-the-badge
[issues-url]: https://github.com/RyanJKS/social-stock-analysis/issues
[license-shield]: https://img.shields.io/github/license/RyanJKS/social-stock-analysis.svg?style=for-the-badge
[license-url]: https://github.com/RyanJKS/social-stock-analysis/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jhelan-suggun-jks7n99/
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Material-UI.js]: https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white
[Material-UI-url]: https://mui.com/material-ui/getting-started/overview/
[ReactRouter.js]: https://img.shields.io/badge/ReactRouter-007FFF?style=for-the-badge&logo=React-Router&logoColor=white
[ReactRouter-url]: https://reactrouter.com/en/main
