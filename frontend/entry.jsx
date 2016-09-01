const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
var routerHistory = require('react-router').useRouterHistory;
var createHistory = require('history/lib/createHashHistory');
var appHistory = routerHistory(createHistory)({ queryKey: false });

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
  ReactDOM.render(<Router history={appHistory} routes={routes} />, root);
});
