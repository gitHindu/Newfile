import { useEffect, useState } from "react";
import "../App.css"; // Go up a folder to access App.css
import { Link } from "react-router-dom";

const Home = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container-fluid p-5 bg-color">
        <div className="row align-items-center justify-content-between">
          <div className="p-5 col-md-6">
            <h2 className="mb-3 text-white typewriter" key={key}>
              Hi, I am Hindu
            </h2>
            <h5 className="mb-3 text-white">Front-End Developer</h5>
            <p className="text-white">
              I build seamless and accessible websites, 
              <br />
              blending creativity with functionality.
            </p>

            <button className="my-btn btn btn-primary">Contact Us</button>
          </div>
          <div className="col-md-6">
            <img
              className="bg-img-height"
              src="/woman.png" // Corrected image path
              alt="Woman with Laptop"
              width="100%"
            />
          </div>
        </div>
      </div>

      <div id="about-section" className="p-5 py-5 bg-color">
        <div className="bg-color-outside p-5">
          <h2 className="mb-3 text-white px-5">About</h2>
          <div className="row container-fluid d-flex px-5 justify-content-between align-items-center">
            <div className="col-md-5">
              <img
                className="bg-img-height"
                src="/relaxing.png" // Corrected image path
                alt="Relaxing"
                width="100%"
              />
            </div>
            <div className="col-md-7">
              <div className="row container-fluid d-flex justify-content-between">
                <div className="col-md-1">
                  <img src="/next.png" width="30px" alt="Next Icon" />
                </div>
                <div className="col-md-11">
                  <p className="text-white">
                    I am a passionate developer dedicated to building accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My work thrives at the intersection of design and development, ensuring experiences are visually appealing, highly functional, and built with top-notch performance and usability in mind.
                  </p>
                </div>
              </div>

              <div className="row container-fluid d-flex justify-content-between">
                <div className="col-md-1">
                  <img src="/next.png" width="30px" alt="Next Icon" />
                </div>
                <div className="col-md-11">
                  <p className="text-white">
                    Currently, I serve as a Senior Front-End Engineer at Finbot Private Limited, focusing on accessibility. I play a key role in creating and maintaining React-based UI components that power the frontend of Finbot Private Limited platform, ensuring that we meet the highest web accessibility standards to provide an inclusive experience for all users.
                  </p>
                </div>
              </div>

              <div className="row container-fluid d-flex justify-content-between">
                <div className="col-md-1">
                  <img src="/next.png" width="30px" alt="Next Icon" />
                </div>
                <div className="col-md-11">
                  <p className="text-white">
                    In the past, I had the opportunity to work in a variety of settings, including dynamic startups, established enterprises, and creative digital studios. This diverse experience allowed me to collaborate with teams across different industries, tackling unique challenges and delivering impactful solutions with technologies like React.js. My focus was always on building user-centric, scalable applications that prioritized both performance and accessibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="experience-section" className="py-5 px-5 bg-color">
        <h2 className="text-white">Experience</h2>
        <div className="row">
          <div className="col-md-6 side_gap">
            <div className="display-icon">
              <div className="icon-bg-color mt-5">
                <img src="/html.png" width="35px" alt="HTML Icon" />
              </div>
              <div className="icon-bg-color mt-5">
                <img src="/css.png" width="35px" alt="CSS Icon" />
              </div>
              <div className="icon-bg-color mt-5">
                <img src="/boot.png" width="35px" alt="Bootstrap Icon" />
              </div>
            </div>
            <div className="display-icon">
              <div className="icon-bg-color mt-5">
                <img src="/j.s.png" width="35px" alt="JavaScript Icon" />
              </div>
              <div className="icon-bg-color mt-5">
                <img src="/react.png" width="35px" alt="React Icon" />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="row card-my">
              <div className="col-md-3">
                <img src="/company.png" width="100px" alt="Company Logo" />
              </div>
              <div className="col-md-9">
                <h5 className="text-white">Software Engineer, Finbot</h5>
                <p className="text-white mb-2">June 2023-present</p>
                <p className="text-white mb-0">- Work as software developer.</p>
                <p className="text-white mb-0">- Senior UI frontend developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="project-section" className="py-5 px-5 bg-color">
        <h2 className="text-white">Projects</h2>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="p-4 bg-color-outside">
              <img src="/finbot.png" width="100%" alt="Finbot Project" />
              <h4 className="text-white mt-3">Finbot</h4>
              <p className="text-white mt-2">
                At Finbot, we provide innovative financial solutions that streamline healthcare operations, reduce administrative burdens, and ensure better financial outcomes, allowing healthcare providers to focus on what matters most—patient care.
              </p>

              <div className="one_button">
                <Link to="/Demo">
                  <button className="my-btn m-0 btn btn-primary">Demo</button>
                </Link>
                <div>
                  <a href="https://www.finbot.in">
                    <button className="my-btn btn m-0 btn-primary">Visit Site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-color-outside">
              <img
                src="/zapstock.png"
                width="100%"
                height="174px"
                alt="Zapstock Project"
              />
              <h4 className="text-white mt-3">Zapstock</h4>
              <p className="text-white mt-2">
                Zapstock offers cutting-edge tools for analyzing options data, delivering real-time insights that empower investors and traders to make informed decisions and stay ahead of market trends. With advanced analytics and customizable dashboards.
              </p>
              <div className="one_button">
                <Link to="/Demo">
                  <button className="my-btn m-0 btn btn-primary">Demo</button>
                </Link>
                <div>
                  <a href="http://zapstockk.webamoeba.com/">
                    <button className="my-btn btn m-0 btn-primary">Visit Site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-color-outside">
              <img
                src="/krishna.png"
                width="100%"
                height="174px"
                alt="Biomed Project"
              />
              <h4 className="text-white mt-3">Biomed</h4>
              <p className="text-white mt-2">
                We offer a wide range of diagnostic and research products, with Weldon Biotech leading the market with 15+ years of innovation. Our expertise spans sales, marketing, and support for diagnostic reagents and instruments.
              </p>

              <div className="one_button">
                <Link to="/Tier">
                  <button className="my-btn m-0 btn btn-primary">Demo</button>
                </Link>
                <div>
                  <a href="https://krishnabiomed.com/">
                    <button className="my-btn btn m-0 btn-primary">Visit Site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-section" className="bg-color px-5 py-4">
        <div className="row">
          <div className="col-md-4">
            <h2 className="text-white">Contact Us</h2>
            <h5 className="text-white">Feel free to reach out!</h5>
          </div>
          <div className="col-md-4">
            <ul>
              <li className="text-white">
                <a className="text-white anchor" href="mailto:info@example.com">
                  Email: hindureddy2002@gmail.com
                </a>
              </li>
              <li className="text-white">
                <a className="text-white anchor" href="tel:+91 9347123964">
                  Phone No: +91 9347123964
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 one_line">
            <div>
              <a href="https://www.naukri.com/mnjuser/profile?id=&altresid">
                <img className="logo-color" src="/naukri.png" width="30px" alt="Naukri" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/hindu-kalthireddy-88b6b5239/">
                <img className="logo-color" src="/linkedin (3).png" width="30px" alt="LinkedIn" />
              </a>
            </div>
            <div>
              <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage">
                <img className="logo-color" src="/inneed.png" width="30px" alt="Indeed" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

