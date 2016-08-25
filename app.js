import {createStore} from './redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function render(value){
  const valueEl = document.getElementById('value');

  valueEl.innerHTML = value;
}

const store = createStore(counter);

store.subscribe(render);

document.getElementById('increment')
  .addEventListener('click', () => store.dispatch({ type: 'INCREMENT' }))

document.getElementById('decrement')
  .addEventListener('click', () => store.dispatch({ type: 'DECREMENT' }))
