import React, { Component } from 'react'
import { Field, reduxForm} from 'redux-form'

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          label="Title"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Content"
          component={this.renderField}
        />
      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if (!values.title) {
    errors.title = "Enter a title!"
  }
  if (!values.categories) {
    errors.categories = "Enter a category!"
  }
  if (!values.content) {
    errors.content = "Enter some content please!"
  }
  // if errors is empty = ok, otherwise form = invalid
  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew)
