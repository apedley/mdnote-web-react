import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components'

import { loadData, signout } from '../Auth/actions';
import { toggleSidebar } from './actions';

import ProtectedRoute from '../../components/ProtectedRoute';

import NotesPage from '../Notes';
import AuthPage from '../Auth';
import Toolbar from '../../components/Toolbar';

class App extends Component {

  constructor(props) {
    super(props);

    this.props.actions.loadData();
  }

  sidebarButtonClicked() {
    debugger;
  }

  
  renderRoute () {
    return (
      <div>
        <Switch>
          <ProtectedRoute path="/notes" exact component={NotesPage} {...this.props} />
          <Route path="/signin" exact component={AuthPage} />
          <Route path="/signup" exact component={AuthPage} />
        </Switch>
      </div>
    )
  }

  renderToolbar() {
    if (this.props.signedIn) {
      return (
        <Toolbar 
          signoutClicked={this.props.actions.signout} 
          sidebarButtonCLicked={this.props.actions.toggleSidebar} 
        />
      )
    }
  }

  renderSidebar() {
    if (!this.props.signedIn) {
      return;
    }
  }

  render () {
    const Wrapper = styled.div`
      min-height: 100vh;
    `

    const Main = styled.div`
      padding: 10px;
    `
    const {
      history
    } = this.props;

    return (
      <Wrapper>
        { this.renderToolbar() }
        <Main>
          { this.renderRoute(history) }
        </Main>
      </Wrapper>
    )
  }
}

App.defaultProps = {
  history: {},
}

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.auth.errors,
  signedIn: state.auth.signedIn
});

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      loadData,
      signout
    }, dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
