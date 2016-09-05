const React = require('react');

const NavBar = require('./nav_bar');
const Splash = require('./splash');
const Profile = require('./profile');
const Education = require('./education');
const Experience = require('./experience');
const Skills = require('./skills');
const Projects = require('./projects.jsx');
const Contact = require('./contact');

const Home = React.createClass({

  getInitialState() {
    return({
      profile: true,
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
          <div className="navigation">
            <div className="nav-item" onClick={this._profileClick}>Profile</div>
            <div className="nav-item" onClick={this._projectsClick}>Projects</div>
            <div className="nav-item" onClick={this._educationClick}>Education</div>
            <div className="nav-item" onClick={this._skillsClick}>Skills</div>
            <div className="nav-item" onClick={this._experienceClick}>Experience</div>
            <div className="nav-item" onClick={this._contactClick}>Contact</div>
          </div>
          <div className="buffer"></div>
          <div className="details">
            {this.state.profile ? <Profile /> : ""}
            {this.state.projects ? <Projects /> : ""}
            {this.state.skills ? <Skills /> : ""}
            {this.state.education ? <Education /> : ""}
            {this.state.experience ? <Experience /> : ""}
            {this.state.contact ? <Contact /> : ""}
          </div>
        </div>
      );
  }
});

module.exports = Home;
