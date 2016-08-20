const React = require('react');

const Projects = React.createClass({

  componentDidMount: function() {
    var elem = document.getElementsByClassName("projects-container")[0];
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        elem.style.transition = "opacity 500ms";
        elem.style.opacity = 1;
    });
  },

  render() {
    return (
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-header-title">Projects</div>
          <div className="projects-header-summary">
            Lyricist + HTML Hierarchy Visualizer + Dactyl
          </div>
        </div>
        <hr></hr>
        <div className="projects-info-container">
          <div className="project1-container"></div>
          <div className="project2-container"></div>
          <div className="project3-container"></div>
        </div>
      </div>
    );
  }
});

module.exports = Projects;
