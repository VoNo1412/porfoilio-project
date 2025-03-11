import { useEffect, useState } from 'react';
import star from '../assets/star.svg'; // Adjust the path as necessary
import { Container, Row } from 'react-bootstrap';


const Home = () => {
  const [scale, setScale] = useState(false);
  const [scale1, setScale2] = useState(false);

  useEffect(() => { 
    setScale(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      console.log(scrollY)
      if (scrollY >= 0) {
        setScale(true);
      }

      if (scrollY >= 200) {
        setScale2(true);
      }
  
    });
  }, [scale]);

  return <div className="main_section">
    <div className="section_one">
      <div className={`column_1 scale-element ${scale ? "scale_open" : ``}`}>
        <div className="info_profile">
          <div className="col_avatar">
            <img src="https://images.unsplash.com/photo-1727466928916-9789f30de10b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
          </div>
          <div className="col_desc">
            <p>A WEB DEVELOPER</p>
            <h1>VoNo</h1>
            <p>I am a Web Developer <br /> based in HaNoi</p>
          </div>
        </div>
      </div>
      <div className="column_2">
        <div className={`infinity scale-element ${scale ? "scale_open" : ``}`}>
          <div id='rssBlock'>
            <p className="cnnContents">
              <span className="marqueeStyle">LATEST WORK AND FEATURED . LATEST WORK AND FEATURED . LATEST WORK AND FEATURED . LATEST WORK AND FEATURED . LATEST WORK AND FEATURED . LATEST WORK AND FEATURED . </span>
              <span className="marqueeStyle2">LATEST WORK AND FEATURED . LATEST WORK AND FEATURED . LATEST WORK AND FEATURED . LATEST WORK AND FEATURED . LATEST WORK AND FEATURED . LATEST WORK AND FEATURED .&nbsp;</span>
            </p>
          </div>
        </div>
        <div className={`info_right scale-element ${scale ? "scale_open" : ``}`}>
          <div className="col_square">
            <div className="square_content">
              <div className="square_content_img">
                <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/sign.png" alt="" />
              </div>
              <div className="square_col">
                <div className="square_col_1">
                  <p>MORE ABOUT ME</p>
                  <div>Credentials</div>
                </div>
                <div className="square_col_2">
                  {/* svg */}
                  <img src={star} alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col_square">
            <div className="square_content">
              <div className="square_content_img">
                <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/my-works.png" alt="" />
              </div>
              <div className="square_col">
                <div className="square_col_1">
                  <p>MORE ABOUT ME</p>
                  <div>Projects</div>
                </div>
                <div className="square_col_2">
                  {/* svg */}
                  <img src={star} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`section_two scale-element ${scale1 ? "scale_open" : ``}`}>
      <Container fluid>
        <Row>
          <div className="column_content first">
            <div className="square_content">
              <div className="square_content_img">
                <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/gfonts.png" alt="" />
              </div>
              <div className="square_col">
                <div className="square_col_1">
                  <p>BLOG</p>
                  <div>GFonts</div>
                </div>
                <div className="square_col_2">
                  <img src={star} alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="column_content second">
            <div className="square_content">
              <div className="square_content_img">
                <img src="https://images.unsplash.com/photo-1582473733259-b877ea635383?q=80&w=2541&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="square_col">
                <div className="square_col_1">
                  <p>SPECIALIZATION</p>
                  <div>Services Offering</div>
                </div>
                <div className="square_col_2">
                  <img src={star} alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="column_content third">
            <div className="square_content">
              <div className="square_content_img">
                <img src="https://images.unsplash.com/photo-1739992115892-36453a241b5e?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="square_col">
                <div className="square_col_1">
                  <p>STAY WITH ME</p>
                  <div>Profiles</div>
                </div>
                <div className="square_col_2">
                  <img src={star} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
    <div className={`section_three scale-element ${scale1 ? "scale_open" : ``}`}>
      <Container fluid>
        <Row>
          <div className="column_content first">
            <div className="square_content special">
              <div className="square_content_li">
                <span>1.5</span>
                <p>YEAR <br /> EXPERIENCE</p>
              </div>
              <div className="square_content_li">
                <span>1.5</span>
                <p>YEAR <br /> EXPERIENCE</p>
              </div>
              <div className="square_content_li">
                <span>1.5</span>
                <p>YEAR <br /> EXPERIENCE</p>
              </div>
            </div>
          </div>
          <div className="column_content third">
            <div className="square_content">
              <div className="square_content_img">
                <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/icon2.png" alt="" />
              </div>
              <div className="square_col">
                <div className="square_col_1">
                  <div className="work_together">Let's <br />
                    work together.</div>
                </div>
                <div className="square_col_2">
                  <img src={star} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  </div>;
};

export default Home;