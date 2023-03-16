import { useState } from 'react';
import { Counter } from './components/Counter';

export const App = () => {
  const [value, setValue] = useState('')

  return (
    <div>
      <h1>{value}</h1>
      <input type="text" name="input" onChange={(e) => setValue(e.target.value)} value={value} />
      <Counter />
    </div>
  );
}

