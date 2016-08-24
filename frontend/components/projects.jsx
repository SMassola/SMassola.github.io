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
          <div className="project1-container tint">
            <div className="project1-caption">
              <div className="project1-title">Lyricist</div>
              <div className="project1-summary">An Annotation Site</div>
            </div>
            <figure className="project1-image">
              <img src="app/assets/images/Hotline_Bling.png"></img>
            </figure>
          </div>
          <div className="project2-container tint">
            <div className="project2-caption">
              <div className="project2-title">HTML Hierarchy Visualizer</div>
              <div className="project2-summary">Handy chrome extension for front end developers</div>
            </div>
            <figure className="project2-image">
              <img src="app/assets/images/BorderPreview.png"></img>
            </figure>
          </div>
          <div className="project3-container tint">
            <div className="project3-caption">
              <div className="project3-title">Dactyl</div>
              <div className="project3-summary">Javascript game inspired by IOS Dactyl app</div>
            </div>
            <figure className="project3-image">
              <img src="app/assets/images/Dactyl.png"></img>
            </figure>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Projects;

// <div className="project1-title">Lyricist</div>
// <div className="project1-summary">A lyrics annotation website</div>
