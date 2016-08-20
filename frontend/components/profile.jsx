const React = require('react');

const Profile = React.createClass({

  componentDidMount: function() {
    var elem = document.getElementsByClassName("profile-container")[0];
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        elem.style.transition = "opacity 500ms";
        elem.style.opacity = 1;
    });
  },

  render() {
    return (
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-header-title">Profile</div>
          <div className="profile-header-summary">Web Developer</div>
        </div>
        <hr></hr>
        <div className="profile-info">
          <div className="profile-info-about">
            <div className="profile-info-about-title">About Me</div>
            <div className="profile-info-about-paragraph">
              I am a strategist. I love a challenge, be it a design problem,
              a coding challenge, a riddle, a game of chess. No challenge is too big nor too small.
              That was the allure that drew me in to become a web developer -
              I'm constantly being challenged. I'm constantly acquiring new skills.
              I'm constantly entertained.

              I bring the design and problem solving capabilities of a mechanical engineer with every
              challenge in software development that I encounter. There isn't a challenge I can't overcome.
            </div>
          </div>
          <div className="profile-info-demographic">
            <div className="profile-info-demographic-title">Details</div>
            <div className="profile-info-demographic-paragraph">
              <div>Name:</div>
              <div>Steven Massola</div>
              <div>Age:</div>
              <div>23 Years Old</div>
              <div>Location:</div>
              <div>San Francisco, California + Toronto, Ontario</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
