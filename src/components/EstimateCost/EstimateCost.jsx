import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';
// import {DebounceInput} from 'react-debounce-input';

function EstimateCost() {
  //   const labor = document.getElementById('laborInput').value;
  //   const material = document.getElementById('materialsInput').value;
  //   const total = labor + material;
  //   const el = document.getElementById('dne');
  //   el.innerHTML = total;

  // ----- using this.state until connecting to database ----- //
  const [laborAmount, setLaborAmount] = useState(0);
  const [materialAmount, setMaterialAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const changeLaborAmount = (e) => {
    setLaborAmount(+e.target.value);
  };

  const changeMaterialAmount = (e) => {
    setMaterialAmount(+e.target.value);
  };

  useEffect(() => {
    setTotal(laborAmount + materialAmount);
  }, [laborAmount, materialAmount, total]);

  // --- placeholders until connecting to database --- //

  //   const dispatch = useDispatch;
  //   const history = useHistory;

  //   const [totalBalance, setTotalBalance] = useState(calculateTotal());

  //   function calculateTotal() {}

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
