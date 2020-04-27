import React from 'react'

import { Switch, Redirect, Route } from "react-router-dom";
import Responsive from "react-responsive";
import AppSidebar from "react-sidebar"
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Contact from './pages/Contact'
import Updates from './pages/Updates'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './MainArea.sass'

const mql = window.matchMedia(`(min-width: 800px)`)
const Mobile = props => <Responsive {...props} maxWidth={767} />

class MainArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      activedPage: "home"
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentDidMount() {
    const path = this.props.location.pathname;
    this.setState({ activedPage: path.substring(1) });
  }

  componentWillReceiveProps (newProps) {
    const path = newProps.location.pathname;
    this.setState({ activedPage: path.substring(1) });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  onChangeNavItem = (item) => {
       this.setState({ activedPage: item, sidebarOpen: false });
  }

  render() {
    return (
      <div className="MainArea">
        <AppSidebar
          sidebar={
            <Sidebar
              active={this.state.activedPage}
              changeNav={this.onChangeNavItem}
            />
          }
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
        >
          <Mobile>
            <div className="MainArea__mobileMenu">
              <FontAwesomeIcon
                icon="bars"
                size="2x"
                onClick={() => this.onSetSidebarOpen(true)}
              />
              <p>{this.state.activedPage}</p>
            </div>
          </Mobile>
          <div style={{ borderTop: "40px" }}>
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/services" exact component={Services} />
              <Route path="/skills" exact component={Skills} />
              <Route path="/education" exact component={Education} />
              <Route path="/experience" exact component={Experience} />
              <Route path="/work" exact component={Work} />
              <Route path="/work/:type/:id" exact component={WorkDetail} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/updates" exact component={Updates} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </AppSidebar>
      </div>
    );
  }
}

export default MainArea;
