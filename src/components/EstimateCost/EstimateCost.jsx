import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function EstimateCost() {
  //   const labor = document.getElementById('laborInput').value;
  //   const material = document.getElementById('materialsInput').value;
  //   const total = labor + material;
  //   const el = document.getElementById('dne');
  //   el.innerHTML = total;
  const dispatch = useDispatch;
  const history = useHistory;

  const [laborAmount, setLaborAmount] = useState('');
  const [materialAmount, setMaterialAmount] = useState('');
  const [totalBalance, setTotalBalance] = useState();

  function calculateTotal() {}

  return (
    <form>
      <h1>Exterior Estimate Cost</h1>
      <div className="mb-3">
        <label>Labor Cost: </label>
        <input
          type="number"
          id="laborInput"
          value={laborAmount}
          onChange={(event) => setLaborAmount(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Material Cost: </label>
        <input
          type="number"
          id="materialsInput"
          value={materialAmount}
          onChange={(event) => setMaterialAmount(event.target.value)}
        />
      </div>
      <br />
      <h4>
        Total Costs: <span id="totalPrice">0</span>
      </h4>
      <br />
      <button onClick={() => history.push('/home')}>Next</button>
    </form>
  );
}
export default EstimateCost;
