import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, TextArea } from 'semantic-ui-react'

import SplitFlexItem from '../../../components/SplitFlexItem';

class EditNote extends PureComponent {
  constructor (props) {
    super(props)
    
    this.state = {
      ...props.note
    }

    this.props.onChange(this.state)
  }

  formSubmitted = e => {
    e.preventDefault()
    this.props.onSubmit(this.state);
  }

  formChanged = e => {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      this.props.onChange(this.state)
    });
  }

  renderForm() {
    return (
      <Form onSubmit={this.formSubmitted}>
        <Form.Field>
          <input name="title" placeholder="Title" value={this.state.title} onChange={this.formChanged} />
        </Form.Field>
        <Form.Field>
          <TextArea name="body" placeholder="Body" value={this.state.body} onChange={this.formChanged} style={{ minHeight: '60vh' }} />
        </Form.Field>
        <Button type="submit">Save</Button>
      </Form>
    )
  }

  render() {
    return (
      <SplitFlexItem>
        { this.renderForm() }
      </SplitFlexItem>
    )
  }
}

EditNote.propTypes = {
  note: PropTypes.object,
  errors: PropTypes.array
}

EditNote.defaultProps = {
  note: { title: '', body: '' },
  errors: []
}

export default EditNote;
