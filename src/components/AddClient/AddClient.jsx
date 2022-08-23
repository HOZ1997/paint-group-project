// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { render } from 'react-dom';
// import {useDispatch, useSelector} from 'react-redux';
// import { Form, Field } from 'react-final-form';
// import './AddClient.css';

// // CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// const onSubmit = async values => {
//   await sleep(300)
//   window.alert(JSON.stringify(values, 0, 2))
// }

// const Error = ({ name }) => (
//   <Field name={name} subscription={{ error: true, touched: true }}>
//     {({ meta: { error, touched } }) =>
//       error && touched ? <span>{error}</span> : null
//     }
//   </Field>
// )

// const Condition = ({ when, is, children }) => (
//   <Field name={when} subscription={{ value: true }}>
//     {({ input: { value } }) => (value === is ? children : null)}
//   </Field>
// )

// const AddClient = () => (
// 	<Form
//     onSubmit={onSubmit}
//     validate={values => {
//       const errors = {}
//       if (!values.firstName) {
//         errors.firstName = 'Required'
//       }
//       if (!values.reception) {
//         errors.reception = 'Required'
//       }
//       if (values.reception === 'delivery') {
//         if (!values.street) {
//           errors.street = 'Required'
//         }
//       } else if (values.reception === 'pickup') {
//         if (!values.pickupTime) {
//           errors.pickupTime = 'Required'
//         }
//       }
//       return errors
//     }}
//   >
// 	{({ handleSubmit, form, submitting, pristine, values }) => (
//     <form onSubmit={handleSubmit}>
//       <label>New or Existing Customer?</label>
//       <div>
//         <label>
//           <Field
//             name="newOrExisting"
//             component="input"
//             type="radio"
//             value="new"
//           />{' '}
//           New
//         </label>
//         <label>
//           <Field
//             name="newOrExisting"
//             component="input"
//             type="radio"
//             value="existing"
//           />{' '}
//           Existing
//         </label>
//       </div>
//       <Condition when="newOrExisting" is="new">
//         <div>
//           <label>Client Type</label>
//           <Field name="clientType" component="select">
//             <option />
//             <option key={} value={homeowner}>
//               Homeowner
//             </option>
//             <option key={} value={businessOwner}>
//               Business Owner
//             </option>
//             <option key={} value={contractorDeveloper}>
//               Contractor/Developer
//             </option>
//             <option key={} value={realtorDesigner}>
//               Realtor/Designer
//             </option>
//             <option key={} value={LandlordPropertyOwner}>
//               Landlord/Property Owner
//             </option>
//           </Field>
//           <Error name="clientType" />
//         </div>
//       </Condition>
//       <div id="customerTextInputs">
//         <div>
//           <label>Client Name</label>
//           <Field
//             name="clientName"
//             component="input"
//             type="text"
//             placeholder="Client Name"
//           />
//           <Error name="clientName" />
//         </div>
//         <label>Is this the decision-maker?</label>
//         <div>
//           <label>
//             <Field
//               name="isDecisionMaker"
//               component="input"
//               type="radio"
//               value="yes"
//             />{' '}
//             Yes
//           </label>
//           <label>
//             <Field
//               name="isDecisionMaker"
//               component="input"
//               type="radio"
//               value="no"
//             />{' '}
//             No
//           </label>
//         </div>
//         <Condition when="isDecisionMaker" is="no">
//           <div>
//             <label>Decision Maker Name</label>
//             <Field
//               name="decisionMakerName"
//               component="input"
//               type="text"
//               placeholder="Decision Maker Name"
//             />
//             <Error name="decisionMakerName" />
//           </div>
//         </Condition>
//         <div>
//           <label>Email</label>
//           <Field
//             name="email"
//             component="input"
//             type="email"
//             placeholder="Email"
//           />
//           <Error name="email" />
//         </div>
//         <div>
//           <label>Phone #</label>
//           <Field
//             name="phone"
//             component="input"
//             type="tel"
//             placeholder="Phone #"
//           />
//           <Error name="phone" />
//         </div>
//         <div>
//           <label>Address</label>
//           <Field
//             name="address"
//             component="input"
//             type="text"
//             placeholder="Address"
//           />
//           <Error name="address" />
//         </div>
//         <div>
//           <label>Year Built</label>
//           <Field
//             name="yearBuilt"
//             component="input"
//             type="number"
//             placeholder="Year Built"
//           />
//           <Error name="yearBuilt" />
//         </div>
//         <div>
//           <label>Notes</label>
//           <Field
//             name="notes"
//             component="input"
//             type="text"
//             placeholder="Notes"
//           />
//           <Error name="notes" />
//         </div>
//       </div>
//     </form>
//   )}
// );

// export default AddClient;
