//import React, {useState,useEffect}from "react";
import { useDispatch, useSelector} from "react-redux";
//import { useHistory } from "react-router-dom";
//import { Button } from "react-bootstrap";
// import {DebounceInput} from 'react-debounce-input';

function EstimateCost() {
  // ----- using this.state until connecting to database ----- //
  // const [laborAmount, setLaborAmount] = useState(0);
  // const [materialAmount, setMaterialAmount] = useState(0);
  // const [stateNum, setStateNum] = useState({
  //   laborCost: 0,
  //   materialCost: 0,
  // });

  // const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const estimateCost = useSelector((store) => store.estimateCost);


  const onChangeLaborAmount = (key) => (event) => {
    const updateLaborAmount = {
      ...estimateCost,
      [key]: event.target.value,
    };
    estimateCostReducer(updateLaborAmount);
  };

  const onChangeMaterialAmount = (key) => (event) => {
    const updateMaterialAmount = {
      ...estimateCost,
      [key]: event.target.value,
    };
    estimateCostReducer(updateMaterialAmount);
  };

  // useEffect(() => {
  //   setTotal(laborAmount + materialAmount);
  // }, [laborAmount, materialAmount, total]);

  // --- placeholders until connecting to database --- //

  const estimateCostReducer = (updateLaborAmount) => {
    dispatch({type: 'SET_COST', payload: updateLaborAmount});
    // setLaborAmount('');
    // setMaterialAmount('');
    // setTotal('');
  };

  const totalCosts =
    Number(estimateCost.exteriorestimate_laborcost) +
    Number(estimateCost.exteriorestimate_materialcost);
  // exteriorestimate_laborcost
  // exteriorestimate_materialcost
  // exteriorestimate_totalcost

  // bring total cost to the ID above //
  // need reducer to store //

  return (
    <form>
      <h1>PROJECT ESTIMATE</h1>
      <div className="container">
      <div className="mb-3">
        <label>LABOR COST: $</label>
        <input
          type="number"
          id="laborInput"
          onChange={onChangeLaborAmount(
            "exteriorestimate_laborcost"
          )}
          step="any"
        />
      </div>
      <div className="mb-3">
        <label>MATERIAL COST: $</label>
        <input
          type="number"
          id="materialsInput"
          onChange={onChangeMaterialAmount('exteriorestimate_materialcost')}
          
          step="any"
        />
        </div>
        </div>
      <br />
      <div className="totalCostClass">
        <h2>
          TOTAL COST: $
          {totalCosts.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </h2>
        {/* <Button className="myButton">
          Create
        </Button> */}
      </div>
      {/* <button onClick={() => history.push('/home')}>Create</button> */}
    </form>
  );
}
export default EstimateCost;
