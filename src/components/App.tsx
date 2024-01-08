import { Suspense, useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

import ReactIcon1 from '@/assets/react.png';
import ReactIcon2 from '@/assets/react.jpeg';
import SvgComponent from '@/assets/react.svg';

// Webpack TREE-SHAKING will remove this dead unused code
function Todo() {
  Todo2();
}

function Todo2() {
  throw new Error();
}

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => Todo();
  const decrement = () => setCount((prev) => prev - 1);

  // Todo(124);

  // if (__PLATFORM__ === 'desktop') {
  //   return <h1>DESKTOP</h1>;
  // }

  // if (__PLATFORM__ === 'mobile') {
  //   return <h1>MOBILE</h1>;
  // }

  // if (__ENV__ === 'development') {
  //   // addDevtools()
  // }

  return (
    <div data-testid="App.DataTestId">
      <div data-testid="Platform">PLATFORM = {__PLATFORM__}</div>
      <div>
        <img width={100} src={ReactIcon1} />
      </div>
      <div>
        <img width={100} src={ReactIcon2} />
      </div>
      <div>
        <SvgComponent fill="red" width={50} height={50} />
      </div>
      <Link to="/about">about</Link>
      <Link to="/shop">shop</Link>
      <h1 className={classes.value}>hello world</h1>
      <h1>count = {count}</h1>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className={classes.button} onClick={increment}>
          <span>+</span>
        </button>
        <button className={classes.button} onClick={decrement}>
          <span>-</span>
        </button>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
