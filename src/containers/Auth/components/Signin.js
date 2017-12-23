import React, { PureComponent } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

export default class Signin extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleForgot = e => {
    e.preventDefault();
    this.props.onForgot(this.state);
  }

  renderForm() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <input name="email" placeholder="Email" onChange={this.handleChange} />
          {/* <Label basic color='red' pointing>Enter a valid email</Label> */}
        </Form.Field>
        <Form.Field>
          <input name="password" type="password" placeholder="Password" onChange={this.handleChange} />
          {/* <Label basic color='red' pointing>At least 6 characters</Label> */}
        </Form.Field>
        <Button type="submit">Sign In</Button>
        <Button onClick={this.handleForgot}>Forgot Password</Button>
      </Form>
    )
  }

  render() {
    return (
      <div>
        <Header textAlign='center'>
          <Header.Content>
            Sign In
          </Header.Content>
        </Header>
        { this.props.children }
        { this.renderForm() }
      </div>
    )
  }
}
