// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// function WorkOrder(props) {
//   const store = useSelector((store) => store);

//   //hooks for inputs
//   const [property, setProperty] = useState();
//   const [building, setBuilding] = useState();
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState();

//   //hooks for checkboxes
//   const [checkedInterior, setCheckedInterior] =
//     useState(false);
//   const [checkedExterior, setCheckedExterior] =
//     useState(false);
//   const [checkedCabinetry, setCheckedCabinetry] =
//     useState(false);
//   const [
//     checkedSpecialFeature,
//     setCheckedSpecialFeature,
//   ] = useState(false);

//   //------------------------------------------------------------------------------//

//   //functions for dropdown menus
//   const setPropertyType = (event) => {
//     console.log(
//       "you selected: ",
//       event.target.value,
//       " for property type"
//     );
//     setProperty(event.target.value);
//   };

//   const setBuildingType = (event) => {
//     console.log(
//       "you selected: ",
//       event.target.value,
//       " for building type"
//     );
//     setBuilding(event.target.value);
//   };

//   //function for checbox change
//   const handleInteriorCheckboxChange = (
//     event
//   ) => {
//     console.log(
//       "you selected the interior checkbox"
//     );
//     setCheckedInterior(!checkedInterior);
//   };

//   const handleExteriorCheckboxChange = (
//     event
//   ) => {
//     console.log(
//       "you selected the exterior checkbox"
//     );
//     setCheckedExterior(!checkedExterior);
//   };

//   const handleCabinetryCheckboxChange = (
//     event
//   ) => {
//     console.log(
//       "you selected the cabinetry checkbox"
//     );
//     setCheckedCabinetry(!checkedCabinetry);
//   };

//   const handleSpecialFeatureCheckboxChange = (
//     event
//   ) => {
//     console.log(
//       "you selected the special feature checkbox"
//     );
//     setCheckedSpecialFeature(
//       !checkedSpecialFeature
//     );
//   };

//   //function for date change
//   const handleStartDateChange = () => {
//     console.log(
//       "you selected the start date",
//       setStartDate
//     );
//     setStartDate(event.target.value);
//   };

//   const handleEndDateChange = () => {
//     console.log(
//       "you selected the end date",
//       setEndDate
//     );
//     setEndDate(event.target.value);
//   };

//   //function to capture all inputs
//   const handleSubmit = () => {
//     console.log("you submitted the form");
//     console.log("property: ", property);
//     console.log("building: ", building);
//     console.log("start date: ", startDate);
//     console.log("end date: ", endDate);
//     console.log("interior: ", checkedInterior);
//     console.log("exterior: ", checkedExterior);
//     console.log("cabinetry: ", checkedCabinetry);
//     console.log(
//       "special feature: ",
//       checkedSpecialFeature
//     );
//   };

//   return (
//     <div>
//       <h2>Project Component</h2>
//       <div>
//         <p>Property Type</p>
//         <select
//           className="property_type"
//           onChange={setPropertyType}
//         >
//           <option value="residential">
//             Residential
//           </option>
//           <option value="commercial">
//             Commercial
//           </option>
//           <option value="new_construction">
//             New Construction
//           </option>
//         </select>

//         <p>Bulding Type</p>

//         <select
//           className="building_type"
//           onChange={setBuildingType}
//         >
//           <option value="single_family_home">
//             Single Family Home
//           </option>
//           <option value="commercial_building">
//             Commercial Building
//           </option>
//           <option value="apartment">
//             Apartment
//           </option>
//           <option value="condo">Condo</option>
//           <option value="duplex">Duplex</option>
//           <option value="loft">Loft</option>
//           <option value="multi_tenant">
//             Multi-tenant
//           </option>
//         </select>

//         <p>Project Type</p>

//         <label>
//           <input
//             type="checkbox"
//             checked={checkedInterior}
//             onChange={
//               handleInteriorCheckboxChange
//             }
//           />
//           Interior
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={checkedExterior}
//             onChange={
//               handleExteriorCheckboxChange
//             }
//           />
//           Exterior
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={checkedCabinetry}
//             onChange={
//               handleCabinetryCheckboxChange
//             }
//           />
//           Cabinetry
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={checkedSpecialFeature}
//             onChange={
//               handleSpecialFeatureCheckboxChange
//             }
//           />
//           Special Feature
//         </label>

//         <br />
//         <br />

//         <p>Desired Project Start Date</p>
//         <input
//           type="date"
//           value={startDate}
//           onChange={handleStartDateChange}
//         ></input>

//         <br />

//         <p>Desired Project End Date</p>
//         <input
//           type="date"
//           value={endDate}
//           onChange={handleEndDateChange}
//         ></input>
//       </div>

//       <div>
//         <button onClick={handleSubmit}>
//           NEXT PAGE
//         </button>
//       </div>
//     </div>
//   );
// }

// export default WorkOrder;
