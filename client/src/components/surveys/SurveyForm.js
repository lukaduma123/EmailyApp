import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {formFields.map(({label, name}, index) => (
          <Field key={index} component={SurveyField} type='text' label={label} name={name} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to='/surveys' className='red btn-flat white-text'>
            Cancel
          </Link>
          <button type='submit' className='teal btn-flat right white-text'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate({body, recipients, subject, title}) {
  const errors = {};
  if (!title) {
    errors.title = 'You must provide a title';
  }
  if(!subject) {
    errors.subject = 'You must provide a subject';
  }
  if(!body) {
    errors.body = 'You must provide a body'
  }
  if(recipients){
    errors.recipients = validateEmails(recipients);
  }
  
  return errors;
}

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(SurveyForm);
