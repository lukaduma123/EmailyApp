import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

const SurveyReview = ({onCancel, formValues, submitSurvey, history}) => {
  const reviewFields = formFields.map((field, index) => (
    <div key={index}>
      <label>{field.label}</label>
      <div>{formValues[field.name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields}</div>
      <button className='red white-text btn-flat' onClick={onCancel}>
        Back
      </button>
      <button onClick={() => submitSurvey(formValues, history)} className='green darken-3 right white-text btn-flat'>
        Send Survey
        <i className='material-icons right'>email</i>
      </button>
    </div>
  );
};

function mapStateToProps({
  form: {
    surveyForm: {
      values: {body, subject, title, recipients}
    }
  }
}) {
  return {
    formValues: {
      body,
      subject,
      title,
      recipients
    }
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyReview));
