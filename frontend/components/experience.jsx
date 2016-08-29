const React = require('react');

const Experience = React.createClass({

  componentDidMount() {
    var elem = document.getElementsByClassName("experience-container")[0];
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        elem.style.transition = "opacity 500ms";
        elem.style.opacity = 1;
    });
  },

  render() {
    return (
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-header-title">Work Experience</div>
          <div className="experience-header-summary">
            Engineer and Designer
          </div>
        </div>
        <hr></hr>
        <div className="experience-info-container">
          <div className="experience-info">
            <img className="work-img" src="https://upload.wikimedia.org/wikipedia/en/d/db/Amec_Foster_Wheeler_logo.png"></img>
            <div className="work-desc">May 2015 - Aug 2015</div>
          </div>
          <div className="experience-info">
            <img className="work-img" src="http://www.korex-ca.com/wp-content/uploads/2014/09/korex.png"></img>
            <div className="work-desc">May 2014 - Aug 2014</div>
          </div>
          <div className="experience-info">
            <img className="work-img" src="https://upload.wikimedia.org/wikipedia/en/9/98/City_of_Toronto_Logo.png"></img>
            <div className="work-desc">Sept 2013 - Dec 2013</div>
          </div>
          <div className="experience-info">
            <img className="work-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Golder_Associates_logo.svg/220px-Golder_Associates_logo.svg.png"></img>
            <div className="work-desc">Sept 2011 - Dec 2011</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Experience;
