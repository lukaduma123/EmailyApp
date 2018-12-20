import React, {Component} from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './surveyFormReview';
import {reduxForm} from 'redux-form';

class SurveyNew extends Component {
  state = {
    formReviewShow: false
  }

  render() {
    return (
      <div>
        {
          this.state.formReviewShow === false ?
          <SurveyForm onSurveySubmit={() => this.setState({formReviewShow: true})}/> :
          <SurveyFormReview onCancel={() => this.setState({formReviewShow: false})}/>
        }
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
