import React, { PureComponent } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

export default class Signup extends PureComponent {
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

  renderForm() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input name="email" placeholder="Email" onChange={this.handleChange} />
        <Form.Input name="password" type="password" placeholder="Password" onChange={this.handleChange} />
        <Button type="submit">Sign Up</Button>
      </Form>
    )
  }

  render() {
    return (
      <div>
        <Header textAlign="center">
          <Header.Content>
            Sign Up
          </Header.Content>
        </Header>
        { this.props.children }
        { this.renderForm() }
      </div>
    )
  }
}
