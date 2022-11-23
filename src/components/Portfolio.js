import React from "react";

const Portfolio = ({ resumeData }) => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>
            <span style={{ fontSize: "x-large" }}>
              <marquee behavior="" direction="">
                WILL UPDATE HERE SOON 🤓💻
              </marquee>{" "}
            </span>
            Check Out Some of My Works.
          </h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {resumeData.portfolio &&
              resumeData.portfolio.map((item, index) => {
                return (
                  <div className="columns portfolio-item" key={index}>
                    <div className="item-wrap">
                      <a href="#modal-01">
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
          <h1>
            <span style={{ fontSize: "x-large" }}>
              <marquee behavior="" direction="">
                WILL UPDATE HERE SOON 🤓💻
              </marquee>{" "}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
