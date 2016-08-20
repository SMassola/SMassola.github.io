const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const Home = require('./components/home');

const App = React.createClass({
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  console.log(root);
  ReactDOM.render(<Router history={hashHistory} routes={routes} />, root);
});
