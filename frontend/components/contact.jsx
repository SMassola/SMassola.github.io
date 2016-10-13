const React = require('react');

const Contact = React.createClass({

  componentDidMount() {
    var elem = document.getElementsByClassName("contact-container")[0];
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        elem.style.transition = "opacity 500ms";
        elem.style.opacity = 1;
    });
  },

  _handleResume() {
    window.open('./Steven_Massola_SF.pdf', '_blank');
  },

  _handleLinkedIn() {
    window.open('https://www.linkedin.com/in/steven-massola-b25773122', '_blank');
  },

  _handleGithub() {
    window.open('https://github.com/SMassola', '_blank');
  },

  render() {
    return (
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-header-title">Contact Information</div>
          <div className="contact-header-summary">
            Get In Touch
          </div>
        </div>
        <hr></hr>
        <div className="contact-info-container">
          <div className="email-container flex-item">
            <div className="contact-title">EMAIL</div>
            <div className="email-name">Steven.Massola@gmail.com</div>
          </div>
          <div className="address-container flex-item">
            <div className="contact-title">ADDRESS</div>
            <div className="address-name">
              43 Chelford Road, North York, ON
              <br/>
              276 Ellsworth Street, San Francisco, CA
            </div>
          </div>
          <a className="resume-container flex-item">
            <div onClick={this._handleResume} className="contact-title resume-title">RESUME</div>
            <div className="resume-name">Formal documentation of my credentials</div>
          </a>
          <div className="social-container flex-item">
            <div className="contact-title">SOCIAL MEDIA</div>
            <div className="contact-icons">
              <img onClick={this._handleLinkedIn} className="icon" src="./app/assets/images/linkedin-icon.png"></img>
              <img onClick={this._handleGithub} className="icon" src="./app/assets/images/github-icon.png"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Contact;
