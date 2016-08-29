const React = require('react');

const Skills = React.createClass({

  componentDidMount() {
    var elem = document.getElementsByClassName("skills-container")[0];
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        elem.style.transition = "opacity 500ms";
        elem.style.opacity = 1;
    });
  },

  render() {
    return (
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-header-title">Skills</div>
          <div className="skills-header-summary">
            Web Development
          </div>
        </div>
        <hr></hr>
        <div className="skills-info-container">
          <div className="skill-info">
            <img className="skill-img" src="app/assets/images/ruby-icon.png"></img>
            <div className="skill-name ruby">RUBY</div>
          </div>
          <div className="skill-info">
            <img className="skill-img" src="app/assets/images/rails-icon.png"></img>
            <div className="skill-name rails">RAILS</div>
          </div>
          <div className="skill-info">
            <img className="skill-img" src="app/assets/images/js-icon.png"></img>
            <div className="skill-name js">JAVASCRIPT</div>
          </div>
          <div className="skill-info">
            <img className="skill-img" src="app/assets/images/jquery-icon.png"></img>
            <div className="skill-name jquery">JQUERY</div>
          </div>
          <div className="skill-info">
            <img className="skill-img" src="app/assets/images/react-icon.png"></img>
            <div className="skill-name react">REACT</div>
          </div>
          <div className="skill-info">
            <img className="skill-img" src="app/assets/images/flux-icon.png"></img>
            <div className="skill-name flux">FLUX</div>
          </div>
          <div className="skill-info">
            <img className="skill-img" src="app/assets/images/html-icon.png"></img>
            <div className="skill-name html">HTML</div>
          </div>
          <div className="skill-info">
            <img className="skill-img" src="app/assets/images/css-icon.png"></img>
            <div className="skill-name css">CSS</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Skills;
