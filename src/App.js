import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from './store/reducers/contador.reducer'
import { toggleModal } from './store/reducers/modal.reducer'

function App() {
  const { contador, modal } = useSelector(state => state);
  console.log(modal)

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleToggleModal = () => {
    dispatch(toggleModal());
  }

  return (
    <div className="App">
      {contador.total}

      <button onClick={() => handleIncrement()}>Add count</button>
      <button onClick={() => handleDecrement()}>Remove count</button>

      <button onClick={() => handleToggleModal()}>{`${modal.isOpen}`}</button>
    </div>
  );
}

export default App;
