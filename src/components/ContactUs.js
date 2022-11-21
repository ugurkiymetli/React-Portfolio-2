import React from "react";
const ContactUs = ({ resumeData }) => {
  console.log(`https://linkedin.com/in/${resumeData.linkedinId}`);
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>
              Linked in :
              <a href={`https://linkedin.com/in/${resumeData.linkedinId}`} />
              {resumeData.linkedinId}
            </h4>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactUs;
