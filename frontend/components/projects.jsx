const React = require('react');

const Projects = React.createClass({

  componentDidMount() {
    var elem = document.getElementsByClassName("projects-container")[0];
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        elem.style.transition = "opacity 500ms";
        elem.style.opacity = 1;
    });
  },

  _handleLive(e) {
    switch(parseInt(e.target.id)) {
      case 1:
        window.location.href = "http://lyricist.us";
        break;
      case 2:
        window.location.href = "https://chrome.google.com/webstore/detail/html-hierarchy-visualizer/beaeppehjnnnidajcmalfcajahopihcb";
        break;
      case 3:
        window.location.href = "https://smassola.github.io/Dactyl";
        break;
      case 4:
        window.location.href = "https://dotaradar.herokuapp.com";
        break;
    }
  },

  _handleGit(e) {
    switch(parseInt(e.target.id)) {
      case 1:
        window.location.href = "https://github.com/SMassola/Lyricist";
        break;
      case 2:
        window.location.href = "https://github.com/SMassola/HTML-Hierarchy-Visualizer";
        break;
      case 3:
        window.location.href = "https://github.com/SMassola/Dactyl";
        break;
      case 4:
        window.location.href = "https://github.com/SMassola/DotaRadar";
        break;
    }
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
              <div className="project1-summary">Single page web app that allows users to annotate their favorite songs</div>
              <div className="project-button-container">
                <button className="live-button" id="1" onClick={this._handleLive}>Live</button>
                <button className="github-button" id="1" onClick={this._handleGit}>Github</button>
              </div>
            </div>
            <figure className="project1-image">
              <img src="app/assets/images/Hotline_Bling.png"></img>
            </figure>
          </div>
          <div className="project2-container tint">
            <div className="project2-caption">
              <div className="project2-title">HTML Hierarchy Visualizer</div>
              <div className="project2-summary">Handy chrome extension for front end developers that helps visualize elements on the page</div>
              <div className="project-button-container">
                <button className="live-button" id="2" onClick={this._handleLive}>Live</button>
                <button className="github-button" id="2" onClick={this._handleGit}>Github</button>
              </div>
            </div>
            <figure className="project2-image">
              <img src="app/assets/images/BorderPreview.png"></img>
            </figure>
          </div>
          <div className="project3-container tint">
            <div className="project3-caption">
              <div className="project3-title">Dactyl</div>
              <div className="project3-summary">Javascript game inspired by IOS Dactyl app where players try to defuse as many bombs as they can</div>
              <div className="project-button-container">
                <button className="live-button" id="3" onClick={this._handleLive}>Live</button>
                <button className="github-button" id="3" onClick={this._handleGit}>Github</button>
              </div>
            </div>
            <figure className="project3-image">
              <img src="app/assets/images/Dactyl.png"></img>
            </figure>
          </div>
          <div className="project4-container tint">
            <div className="project4-caption">
              <div className="project4-title">DotaRadar</div>
              <div className="project4-summary">Mobile enabled data visualization web app for popular Steam game Dota 2</div>
              <div className="project-button-container">
                <button className="live-button" id="4" onClick={this._handleLive}>Live</button>
                <button className="github-button" id="4" onClick={this._handleGit}>Github</button>
              </div>
            </div>
            <figure className="project4-image">
              <img src="app/assets/images/DotaRadar-ex.png"></img>
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
