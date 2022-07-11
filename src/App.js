import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

// import '../node_modules/bootstrap/dist/assets/owl.carousel.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {

  const options = {
    margin: 40,
    responsiveClass: true,
    nav: false,
    loop: true,
    autoplay: true,
    slideTransition: 'linear',
    animateOut: 'animate__fadeOut',
    animateIn: 'animate__fadeIn',
    navText: [
      '<i class="fa-solid fa-caret-left text-warning fs-1"></i>',
      '<i class="fa-solid fs-1 fa-caret-right text-warning"></i>',
    ],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  }

  return (
    <div className="App">
      <div class="row justify-content-center top_hd "></div>
      <div class="cols-sm-12 logo_hd">
        <div class="logo">
          <img src={require('./img/asset 0.png')} height="100%" width="100%" class="img"></img>
        </div>
      </div>

      <div class="nav_container">
        <div class="container nav_container">
          <div class="row  navbar">
            <div class="col">
              <div class="cols-lg-8 cols-sm-9">
                <ul class="inner_container  navigation d_flex">
                  <li class="different">HOME</li>
                  <li>SANITIZERS</li>
                  <li>EYES</li>
                  <li>FACE</li>
                  <li>NAILS</li>
                  <li>LIPS</li>
                  <li>SKIN</li>
                  <li>GIFTING</li>
                </ul>
              </div>

              <div class="cols-lg-4 cols-sm-">
                <ul class="navigation d_flex login">
                  <li>LOGIN/REGISTER</li>
                  <li><i class="AiTwotoneHeart"></i></li>
                  <li>EYES</li>
                  <li>FACE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OwlCarousel {...options}>
        <div class='item'>
          <a href="#1"><img src={require('./img/asset 1.jpeg')} class="slider_img"></img></a>
        </div>
        <div class='item'>
          <a href="#2"><img src={require('./img/asset 2.jpeg')} class="slider_img"></img></a>
        </div>
        <div class='item'>
          <a href="#3"><img src={require('./img/asset 3.jpeg')} class="slider_img"></img></a>
        </div>
        <div class='item'>
          <a href="#4"><img src={require('./img/asset 4.jpeg')} class="slider_img"></img></a>
        </div>
      </OwlCarousel>;

      <div class="label_f">
        <div class="label"><p> READ OUR COVID-19 SAFETY MEASURES</p></div>
      </div>


      {/* new arrivals */}
      <div class="container">
        <div class="row product_page1">
          <div class="col-12 ">
            <div class="product_page1_heading">
              NEW ARRIVALS
            </div>
            <div class="inner_container product_page1_img">
              <div class="product_page_img d_flex">
                <img src={require('./img/product1.jpeg')} height="100%" width="100%" class="img  "></img>
                <img src={require('./img/product2.jpeg')} height="100%" width="100%" class="img  "></img>
                <img src={require('./img/product3.jpeg')} height="100%" width="100%" class="img  "></img>
                <img src={require('./img/product4.jpeg')} height="100%" width="100%" class="img  "></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPULAR PRODUCTSs */}
      <div class="container">
        <div class="row product_page2">
          <div class="col-12 ">
            <div class="product_page2_heading">
              POPULAR PRODUCTS
            </div>
            <div class="inner_container">
              <div class="product_page2_img d_flex">
                <img src={require('./img/asset 7.jpeg')} height="100%" width="100%" class="img  "></img>
                <img src={require('./img/asset 9.jpeg')} height="100%" width="100%" class="img  "></img>
                <img src={require('./img/asset 11.jpeg')} height="100%" width="100%" class="img  "></img>
                <img src={require('./img/asset 12.jpeg')} height="100%" width="100%" class="img  "></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPULAR PRODUCTSs */}
      <div class="container">
        <div class="row product_page3">
          <div class="col-12 ">
            <div class="product_page2_heading">
              POPULAR PRODUCTS
            </div>
            <div class="inner_container">
              <div class="product_page3_img d_flex">
                <img src={require('./img/asset 21.jpeg')} height="100%" width="100%" class="img  "></img>
                <img src={require('./img/asset 22.jpeg')} height="100%" width="100%" class="img  "></img>
                <img src={require('./img/asset 23.jpeg')} height="100%" width="100%" class="img  "></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPULAR PRODUCTSs */}

      <div class="container">
        <div class="row product_page3">
          <div class="col-12 ">
            <div class="product_page2_heading">
              SHOP YOUR FAVOURITES
            </div>
            <div class="container inner_container">
              <div class="product_page4_img d_flex">
                <img src={require('./img/product_big.jpg')} height="100%" width="100%" class="img  "></img>
              </div>
              <div class="product_page4_img2 d_flex">
                <div class="product_page4_img2_part1">
                  <img src={require('./img/eyes-1.jpg')} height="100%" width="100%" class="img  "></img>
                  <img src={require('./img/face-1.jpg')} height="100%" width="100%" class="img  "></img>
                </div>
                <div class="product_page4_img2_part2">
                  <img src={require('./img/lipstick-1.jpg')} height="85%" width="100%" class="img  "></img>
                </div>
                <div class="product_page4_img2_part3">
                  <img src={require('./img/skin.jpg')} height="100%" width="100%" class="img  "></img>
                  <img src={require('./img/nails-1.jpg')} height="100%" width="100%" class="img  "></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===========================OUR CORE VALUES================================ */}

      <div class="container values">
        <div class="row">
          <div class="col-12">
            <div class="product_page2_heading">
              OUR CORE VALUES
            </div>
            <div class="inner_container core_values">
              <img src={require('./img/asset 24.png')} height="100%" width="100%" class="img  "></img>
              <img src={require('./img/asset 25.png')} height="100%" width="100%" class="img  "></img>
              <img src={require('./img/asset 26.png')} height="100%" width="100%" class="img  "></img>
              <img src={require('./img/asset 27.png')} height="100%" width="100%" class="img  "></img>
              <img src={require('./img/asset 28.png')} height="100%" width="100%" class="img  "></img>
              <img src={require('./img/asset 29.png')} height="100%" width="100%" class="img  "></img>
            </div>
          </div>
        </div>
      </div>

      {/* ===========================OUR CORE VALUES================================ */}

      <div class="container about">
        <div class="row align-content-center">
          <div class="col-12">
            <div class="product_page2_heading">
              ALSO FIND US ON
            </div>
            <div class="marketing d_flex">
              <img src={require('./img/asset 30.png')} height="100%" width="100%" class="img  "></img>
              <img src={require('./img/asset 31.png')} height="100%" width="100%" class="img  "></img>
            </div>
            <div class="marketing_tool d_flex">
              <div class="tool">
                <img src={require('./img/asset 32.png')} class="marketing_tool_img"></img>
                <div><p class="textbox">CUSTOMER SERVICE</p></div>
              </div>
              <div class="tool">
                <img src={require('./img/asset 33.png')} class="marketing_tool_img"></img>
                <div><p class="textbox">FREE SHIPPING</p></div>
              </div><div class="tool">
                <img src={require('./img/asset 34.png')} class="marketing_tool_img"></img>
                <div><p class="textbox">SECURE PAYMENTS</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default App;
