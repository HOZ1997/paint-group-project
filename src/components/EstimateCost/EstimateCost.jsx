import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function EstimateCost() {
  // ----- using this.state until connecting to database ----- //
  const [laborAmount, setLaborAmount] = useState(0);
  const [materialAmount, setMaterialAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const costDetails = useSelector((store) => store.costReducer);

  const changeLaborAmount = (event) => {
    setLaborAmount(+event.target.value);
    addCost();
  };

  const changeMaterialAmount = (event) => {
    setMaterialAmount(+event.target.value);
    addCost();
  };

  const onInputChange = (key) => (event) => {
    const updatedCost = {
      ...costDetails,
      [key]: event.target.value,
    };
    costReducer(updatedCost);
  };

  useEffect(() => {
    setTotal(laborAmount + materialAmount);
  }, [laborAmount, materialAmount, total]);

  // --- placeholders until connecting to database --- //

  const addCost = (event) => {
    const newCostInput = {
      exteriorestimate_laborcost: laborAmount,
      exteriorestimate_materialcost: materialAmount,
      exteriorestimate_totalcost: total,
    };
    console.log(costDetails);
    dispatch({type: 'SET_COST', payload: newCostInput.total});
    // setLaborAmount('');
    // setMaterialAmount('');
    // setTotal('');
  };

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
          value={laborAmount}
          onChange={(e) => changeLaborAmount(e)}
          step="any"
        />
      </div>
      <div className="mb-3">
        <label>Material Cost: $</label>
        <input
          type="number"
          id="materialsInput"
          value={materialAmount}
          onChange={(e) => changeMaterialAmount(e)}
          step="any"
        />
      </div>
      <br />
      <h4>
        Total Costs: $
        {total.toLocaleString(undefined, {maximumFractionDigits: 2})}
      </h4>
      <br />
      {/* <button onClick={() => history.push('/home')}>Create</button> */}
      {/* <Button className="btn btn-primary btn-sm">Create</Button> */}
    </form>
  );
}
export default EstimateCost;
