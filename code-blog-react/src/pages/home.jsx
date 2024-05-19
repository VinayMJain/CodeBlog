import React from "react";
import "../assets/style/home.css";
import "../assets/style/Footer.css";

// const logoEl = document.createElement("img");
// const logoDiv = document.getElementById("logoDiv");
// logoDiv.appendChild(logoEl);
// logoEl.id = "codeBlogLogo";
// logoEl.alt = "Logo";
// logoEl.src = "images/logo1.png";



const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo" id="logoDiv">
            
            <img src="images/logo1.png" id="codeBlogLogo" alt="Logo" />
            <span>CodeBlog</span>
          </div>
          <div className="auth-buttons">
            <button>
              <a href="/login">Sign In</a>
            </button>
            <button>
              <a href="/signup">Sign Up</a>
            </button>
          </div>
        </nav>
      </header>
      <section className="index-first">
        <div className="flex-container">
          <div className="info">
            <div className="hashtag"> &nbsp;&nbsp;#CodeWithoutLimits</div>
            <h1>Elevate Your Code on CodeBlog</h1>
            <p>
              Unlock coding potential with tutorials, trends, and a vibrant
              community. Start for free. Code. Connect. Create.
            </p>
            <div className="buttons-container">
              <a href="Login.html" className="explore-button">
                Explore
              </a>
              <button className="subscribe-button">
                <a href="Login.html">→</a>
              </button>
            </div>
          </div>
          <div className="hexagon-container">
            <img src="images/blog1.webp" alt="Image" />
            <svg className="hexagon-clip" width="0" height="0">
              <clipPath
                id="hexagon-clip-path"
                clipPathUnits="objectBoundingBox"
              >
                <polygon
                  points="0.0795 0.2728,
                        0.212889 0.059377 ,0.32002 0,
                        0.80 0, 0.875725 0.0428747,
                        0.97427525 0.2071254 , 1 0.3,
                        1 0.86 , 0.86 1,
                        0.5 1 , 0.42 0.96,
                         0.09 0.52"
                />
                <circle cx="0.5" cy="0.9" r="0.1" />
                <circle cx="0.86" cy="0.86" r="0.14" />
                <circle cx="0.819484095" cy="0.3" r="0.180515905" />
                <circle cx="0.8" cy="0.0883095" r="0.0883095" />
                <circle cx="0.32002" cy="0.126334" r="0.126334" />
                <circle cx="0.26501" cy="0.38874" r="0.2187602425" />
              </clipPath>
            </svg>
          </div>
        </div>
      </section>
      <section className="index-second">
        <div className="p-blog">
          <p>Top Blogs</p>
        </div>
        <div className="card-index">
          {/* <div className="card-image">
            <img src="images/BlogData/binary tree.png" alt="" />
            <div className="card-topic">
                <p className="topic-name">Binary Tree</p>

            </div>
            <div className="explore-btn">
                <button>Explore</button>
            </div>
        </div> */}
          <div className="card-image">
            <img src="images/BlogData/bucket sort.png" alt="" />
            <div className="card-topic">
              <p className="topic-name">Bucket Sort</p>
            </div>
            <div className="explore-btn">
              <button>Explore</button>
            </div>
          </div>
          <div className="card-image">
            <img src="images/BlogData/dining philosopher.png" alt="" />
            <div className="card-topic">
              <p className="topic-name">Dining Philosopher</p>
            </div>
            <div className="explore-btn">
              <button>Explore</button>
            </div>
          </div>
          <div className="card-image">
            <img src="images/BlogData/DFS graph.png" alt="" />
            <div className="card-topic">
              <p className="topic-name">Graph DFS</p>
            </div>
            <div className="explore-btn">
              <button>Explore</button>
            </div>
          </div>
          <div className="card-image">
            <img src="images/BlogData/circular linked list.jpeg" alt="" />
            <div className="card-topic">
              <p className="topic-name">Circluar linked list</p>
            </div>
            <div className="explore-btn">
              <button>Explore</button>
            </div>
          </div>
          <div className="card-image">
            <img src="images/BlogData/fibbonacci.jpeg" alt="" />
            <div className="card-topic">
              <p className="topic-name">Fibbonacci</p>
            </div>
            <div className="explore-btn">
              <button>Explore</button>
            </div>
          </div>

          <div className="card-image">
            <img src="images/BlogData/tries.png" alt="" />
            <div className="card-topic">
              <p className="topic-name">Tries</p>
            </div>
            <div className="explore-btn">
              <button>Explore</button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-main">
          <div className="footer-div1">
            <h3 id="h2"> Code-Blog</h3>
            <p>
              Get the latest coding tips and insights! <br /> Subscribe to
              CodeBlog's newsletter.
            </p>

            <div className="subscribe-form">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="subscribe-button">
                →
              </button>
            </div>
          </div>
          <div className="footer-div2">
            <div className="footer-link">
              <h3 style={{ textAlign: "center" }}>Company</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-link">
              <h3>Documentation</h3>
              <ul>
                <li>
                  <a href="#">Help Centre</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-link">
              <h3>Social</h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-last"></div>

        <div className="copyright">
          <p id="p1">© Code-Blog Inc. All Rights Reserved 2024</p>
          <p id="p2">
            <a href="#">Terms & Conditions</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;


