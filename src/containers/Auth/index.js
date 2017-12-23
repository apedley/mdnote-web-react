
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Message, Grid, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { NavLink, Redirect } from 'react-router-dom'

import { signin, signup } from './actions';

import Signin from './components/Signin'
import Signup from './components/Signup'
import Wrapper from './components/Wrapper';

class Auth extends Component {

  constructor(props) {
    super(props);

    const { pathname, state } = props.location

    this.state = {
      mode: pathname.includes('signin') ? 'signin' : 'signup',
      from: state ? state.from : null,
      switchable: true,
    }
  }

  toggleMode = () => {
    const newMode = this.state.mode === 'signup' ? 'signin' : 'signup';

    this.setState({
      mode: newMode,
    })
  }

  handleSignin = user => {
    this.props.actions.signin(user, this.state.from)
  }

  handleSignup = user => {
    this.props.actions.signup(user, this.state.from)
  }

  handleForgot = () => {
    console.log('forgot password');
  }

  renderAuth() {
    if (this.state.mode === 'signin') {
      return (
      <Signin onSubmit={this.handleSignin} errors={this.props.errors} onForgot={this.handleForgot}>
        {/* { this.renderErrors() } */}
      </Signin>
      );
    }
    
    return (
    <Signup onSubmit={this.handleSignup} errors={this.props.errors}>
      {/* { this.renderErrors() } */}
    </Signup>
    );
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      return;
    }

    return (
      <Message error>
        <Message.Header>
          Error
        </Message.Header>
        <Message.Content>
          {this.props.errors.map(e => <p key={e}>{e}</p>)}
        </Message.Content>
      </Message>
    );
  }
  renderSwitchMode () {
    if (!this.state.switchable) return null

    const SwitchPanel = styled.div`
      margin: 25px;
      font-size: 1.1rem;
    `
    
    return (
      <SwitchPanel>
        {
          this.state.mode === 'signup'
            ? <span>Already have an account? <NavLink to="/signin" onClick={this.toggleMode}>Sign In</NavLink></span>
            : <span>Need an account? <NavLink to="/signup" onClick={this.toggleMode}>Sign Up</NavLink></span>
        }
      </SwitchPanel>
    )
  }

  render() {
    if (this.props.signedIn) {
      return (
        <Redirect to="/notes" />
      )
    }

    return (
      <Wrapper>
        {this.renderAuth()}
        {this.renderSwitchMode()}
        {this.renderErrors()}
      </Wrapper>
    )
  }

}

Auth.propTypes = {
  actions: PropTypes.object.isRequired,
  errors: PropTypes.array,
}

Auth.defaultProps = {
  actions: {},
  errors: [],
}


const mapStateToProps = state => ({
  signedIn: state.auth.signedIn,
  errors: state.auth.errors,
});


function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      signin,
      signup,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
