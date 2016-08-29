const React = require('react');

const Education = React.createClass({

  componentDidMount() {
    var elem = document.getElementsByClassName("education-container")[0];
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        elem.style.transition = "opacity 500ms";
        elem.style.opacity = 1;
    });
  },

  render() {
    return (
      <div className="education-container">
        <div className="education-header">
          <div className="education-header-title">Education</div>
          <div className="education-header-summary">
            University of Waterloo + App Academy
          </div>
        </div>
        <hr></hr>
        <div className="education-info-container">
          <ul className="education-list">
            <li className="education-list-item">
            	<div className="education-item">
            		<div className="education-info">
            			<div className="education-info-front education-img-1"></div>
            			<div className="education-info-back">
            				<h3>BASc in Honors Mechanical Engineering</h3>
                    <h5>Sept 2010 - Oct 2015</h5>
                    <p>5-year, co-operative program - 5 four-month mechanical engineering internships</p>
            				<p>University of Waterloo<a href="https://uwaterloo.ca/">Learn More</a></p>
            			</div>
            		</div>
            	</div>
            </li>
            <li className="education-list-item">
            	<div className="education-item">
            		<div className="education-info">
            			<div className="education-info-front education-img-2"></div>
            			<div className="education-info-back">
            				<h3>Web Development Program</h3>
                    <h5>May 2016 - July 2016</h5>
                    <p>12 week immersive 1000-hour web development program with 3% acceptance rate</p>
            				<p>App Academy<a href="https://www.appacademy.io/">Learn More</a></p>
            			</div>
            		</div>
            	</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Education;
