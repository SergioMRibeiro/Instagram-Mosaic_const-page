import Home from 'pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default Routes
