import React from "react";

export default function Head() {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          {/* navbar start */}
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <img
                src="logo.ico"
                alt="Logo"
                width="30"
                height="28"
                class="d-inline-block align-text-top"
              />
              Lava
              <button
                class="navbar-toggler gg"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="#Section1"
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Section2">
                      About
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#Section3">
                      Product
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Section4">
                      Think
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Section5">
                      conduct
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">
                      Buy Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* navbar end*/}
          <div className="container">
            <div className="content-home " id="Section1">
              <div className="row content-home2">
                <div className="col-lg-7 col-md-5">
                  <div className="box-container">
                    <img className="imgg" src="re.png" alt="banner" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 he ">
                  <div className="box-container2">
                    <h1 className="home-header display-3">
                      Desighed for Your{" "}
                      <spam className="home-spam">Quality Music</spam>{" "}
                    </h1>
                    <p className="home-para">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem officiis asperiores culpa optio natus{" "}
                    </p>
                    <button type="button" class="btn btn-primary bcc">
                      Buy Now
                    </button>
                    <button type="button" class="btn btn-outline-primary dc">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="home-div" />
          {/* about us */}
          <div className="container" id="Section2">
            <div className="about-us-container">
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="about-header">About Us</h3>
                  <p className="about-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Unde nobis doloremque neque beatae perferendis dolore non!
                    Numquam, officiis sed. Omnis!
                  </p>
                  <p className="about-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum optio, quas doloribus error magnam consequuntur eaque
                    eius minima voluptatibus aliquid?
                  </p>
                  <button type="button" class="btn btn-outline-dark  about-btn">
                    Read More &rarr;
                  </button>
                </div>
                <div className="col-lg-6">
                  <img
                    src="download.jpg"
                    alt="headphone"
                    className="about-img "
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* end of about */}
          {/* product section starting */}

          <div className="container">
            <h1 className="product-header1" id="Section3">
              <spam>Product Category</spam>
            </h1>
            <div className="container-fluid">
              {/* slide carousel */}
              <div className="carousel slide">
                <div className="carousal-inner">
                  <div className="carousal-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="card">
                            <img src="download.jpg" />
                            <h1 className="product-header">Ear Phones 83D</h1>
                            <hr className="product-hr" size="10" />
                            <p className="product-para">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Fugit dolorum adipisci numquam saepe
                              provident ipsam quas magni debitis vitae
                              temporibus.
                            </p>
                            <button
                              type="button"
                              class="btn btn-outline product-btn"
                            >
                              Read More &rarr;
                            </button>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div className="card">
                            <img src="download.jpg" />
                            <h3 className="product-header">
                              E5D Wireless Earephone
                            </h3>
                            <hr className="product-hr" size="10" />
                            <p className="product-para">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Fugit dolorum adipisci numquam saepe
                              provident ipsam quas magni debitis vitae
                              temporibus.
                            </p>
                            <button
                              type="button"
                              class="btn btn-outline  product-btn"
                            >
                              Read More &rarr;
                            </button>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div className="card">
                            <img src="download.jpg" />
                            <h3 className="product-header">
                              {" "}
                              Wireless head phons
                            </h3>
                            <hr className="product-hr" size="10" />
                            <p className="product-para">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Fugit dolorum adipisci numquam saepe
                              provident ipsam quas magni debitis vitae
                              temporibus.
                            </p>
                            <button
                              type="button"
                              class="btn btn-outline  product-btn"
                            >
                              Read More &rarr;
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end fo the product */}

          <div className="container">
            <div className="header-think" id="Section4">
              <h1 className="think">
                What People Think <spam>About US</spam>
              </h1>
              <p className="para-think">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat adipisci molestiae hic libero facere, ipsa dicta
                suscipit nobis vero recusandae deserunt? Molestiae impedit
                architecto voluptatum commodi aperiam illo facere, modi nemo,
                accusantium, rem voluptatem recusandae dignissimos consectetur
                qui perspiciatis saepe?
              </p>

              <div className="box-content">
                <div className="row">
                  <div className="col thin">
                    <img src="gokul.png" alt="profile" className="pro img" />
                    <h3 className="th-star">
                      {" "}
                      &#9733; &#9733; &#9733; &#9733; &#9733;
                    </h3>
                    <h3 className="th-header">Gokul</h3>
                    <p className="th-para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe inventore ullam, molestias necessitatibus voluptatem
                      fuga velit architecto nisi dolores ad, consequuntur
                      debitis eveniet veritatis. Laborum?
                    </p>
                    <h3 className="th-footer">Web Designer</h3>
                  </div>
                  <div className="col thin">
                    <h3 className="th-star">
                      {" "}
                      &#9733; &#9733; &#9733; &#9733; &#9733;
                    </h3>
                    <h3 className="th-header">vijay</h3>
                    <p className="th-para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe inventore ullam, molestias necessitatibus voluptatem
                      fuga velit architecto nisi dolores ad, consequuntur
                      debitis eveniet veritatis. Laborum?
                    </p>
                    <h3 className="th-footer">Web Designer</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <hr />
          {/* end of the thinks */}

          <div className="container" id="Section5">
            <h1 className="think">Contact Us</h1>
            <hr className="product-hr" />
            <div className="container">
              <div className="box-content">
                <div className="row">
                  <div className="col-lg-6 fo">
                    <form>
                      <input
                        className="tx form-control"
                        type="text"
                        placeholder="Enter your Name"
                      />
                      <input
                        type="text"
                        className="tx form-control "
                        placeholder="Enter your number"
                      />
                      <textarea
                        className="txx"
                        placeholder="Your Message"
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <h1 className="about-header">
                      {" "}
                      More About <span>Lava</span>
                    </h1>
                    <p className="about-para">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia magni ab consequatur dicta ducimus voluptate
                      accusantium cumque porro quae dolores.
                    </p>
                    <p className="about-para">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sit atque in ipsum aperiam reprehenderit perspiciatis.
                      Cumque amet exercitationem ad modi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div>Footer</div>
        </div>
      </div>
    </>
  );
}

// <nav className="navbar navbar-expand-lg bg-body-tertiary">
// <div className="container-fluid">
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       <li className="nav-item">
//         <a className="nav-link active" aria-current="page" href="#">Home</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//           Dropdown
//         </a>
//         <ul className="dropdown-menu">
//           <li><a className="dropdown-item" href="#">Action</a></li>
//           <li><a className="dropdown-item" href="#">Another action</a></li>
//           <li><hr className="dropdown-divider" /></li>
//           <li><a className="dropdown-item" href="#">Something else here</a></li>
//         </ul>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//       </li>
//     </ul>
//     <form className="d-flex" role="search">
//       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//       <button className="btn btn-outline-success" type="submit">Search</button>
//     </form>
//   </div>
// </div>
// </nav>
