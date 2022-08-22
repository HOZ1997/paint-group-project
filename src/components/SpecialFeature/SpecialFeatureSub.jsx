import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { render } from 'react-dom';
import {useDispatch, useSelector} from 'react-redux';
import { Form, Field } from 'react-final-form';
import './SpecialFeature.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
)

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const SpecialFeatureSub = () => {
  return (
    {({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Special Feature Type</label>
          <Field name="specialFeatureType" component="select">
            <option />
            <option key={} value={soffits}>
              Soffits
            </option>
            <option key={} value={fascia}>
              Fascia
            </option>
            <option key={} value={gate}>
              Gate
            </option>
            <option key={} value={gutters}>
              Gutters
            </option>
            <option key={} value={columns}>
              Columns
            </option>
            <option key={} value={dormers}>
              Dormers
            </option>
            <option key={} value={handrails}>
              Handrails
            </option>
            <option key={} value={deck}>
              Deck
            </option>
            <option key={} value={porch}>
              Porch
            </option>
            <option key={} value={fence}>
              Fence
            </option>
          </Field>
        </div>
        <div id="specialFeatureStatus">
          <p>Special Feature Status</p>
          <label>Needs Primer</label>
          <Field name="needsPrimer" component="input" type="checkbox" />
          <label>Needs patching/repair</label>
          <Field name="needsPatching" component="input" type="checkbox" />
          <label>Needs Reshaping</label>
          <Field name="needsReshaping" component="input" type="checkbox" />
          <label>Extensive Wood Rot</label>
          <Field name="extensiveWoodRot" component="input" type="checkbox" />
          <label>Extensive Caulking</label>
          <Field name="extensiveCaulking" component="input" type="checkbox" />
          <label>Extensive Scraping</label>
          <Field name="extensiveScraping" component="input" type="checkbox" />
          <label>Other</label>
          <Field name="other" component="input" type="checkbox" />
          <label>Notes</label>
          <Field
            name="specialFeatureNotes"
            component="input"
            type="text"
            placeholder="Notes"
          />
        </div>
      </form>
      );
    }
  );
}

export default SpecialFeatureSub;




	// <Form
  //   onSubmit={onSubmit}
  //   validate={values => {
  //     const errors = {}
  //     if (!values.specialFeatureType) {
  //       errors.specialFeatureType = 'Required'
  //     }
  //     if (!values.specialFeatureProduct) {
  //       errors.specialFeatureProduct = 'Required'
  //     }
  //     if (!values.specialFeatureStatus) {
  //       errors.specialFeatureStatus = 'Required'
  //     }
  //     return errors
  //   }}
  // >      //Special Features are not required so no errors necessary