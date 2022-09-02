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
      <h1>Project Estimate</h1>
      <div className="mb-3">
        <label>Labor Cost: $</label>
        <input
          type="number"
          id="laborInput"
          onChange={onChangeLaborAmount('exteriorestimate_laborcost')}
          step="any"
        />
      </div>
      <div className="mb-3">
        <label>Material Cost: $</label>
        <input
          type="number"
          id="materialsInput"
          onChange={onChangeMaterialAmount('exteriorestimate_materialcost')}
          step="any"
        />
      </div>
      <br />
      <h4>
        Total Costs: $
        {totalCosts.toLocaleString(undefined, {maximumFractionDigits: 2})}
      </h4>
      <br />
      {/* <button onClick={() => history.push('/home')}>Create</button> */}
      {/* <Button className="btn btn-primary btn-sm">Create</Button> */}
    </form>
  );
}
export default EstimateCost;
