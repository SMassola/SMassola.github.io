const React = require('react');

const NavBar = require('./nav_bar');
const Splash = require('./splash');
const Profile = require('./profile');
const Experiences = require('./experiences');
const Projects = require('./projects.jsx');
const Contact = require('./contact');

const Home = React.createClass({

  getInitialState() {
    return({
      profile: false,
      projects: false,
      education: false,
      skills: false,
      experience: false,
      contact: false,
    });
  },

  _profileClick() {
    this.setState({profile: !this.state.profile, projects: false, education: false, skills: false, experience: false, contact: false});
  },
  _projectsClick() {
    this.setState({profile: false, projects: !this.state.projects, education: false, skills: false, experience: false, contact: false});
  },
  _skillsClick() {
    this.setState({profile: false, projects: false, education: false, skills: !this.state.skills, experience: false, contact: false});
  },
  _educationClick() {
    this.setState({profile: false, projects: false, education: !this.state.education, skills: false, experience: false, contact: false});
  },
  _experienceClick() {
    this.setState({profile: false, projects: false, education: false, skills: false, experience: !this.state.experience, contact: false});
  },
  _contactClick() {
    this.setState({profile: false, projects: false, education: false, skills: false, experience: false, contact: !this.state.contact});
  },

  render() {
      return (
        <div className="content">
          <div className="index">
            <div className="index-item profile" onClick={this._profileClick}></div>
            <div className="index-item projects" onClick={this._projectsClick}></div>
            <div className="index-item education" onClick={this._educationClick}></div>
            <div className="index-item skills" onClick={this._skillsClick}></div>
            <div className="index-item experience" onClick={this._experienceClick}></div>
            <div className="index-item contact" onClick={this._contactClick}></div>
            <div className="index-item"></div>
          </div>
          <div className="details">
            {this.state.profile ? <Profile /> : ""}
            {this.state.projects ? <Projects /> : ""}
            {this.state.skills ? <Skills /> : ""}
            {this.state.education ? <Education /> : ""}
            {this.state.experience ? <Work /> : ""}
            {this.state.contact ? <Contact /> : ""}
          </div>
        </div>
      );
  }
});

module.exports = Home;
