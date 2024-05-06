import { useState } from 'react';
import Header from './Header.jsx';
import Counter from './Counter.jsx';
import Footer from './Footer.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container-fluid d-flex flex-column min-vh-100 bg-dark text-center text-white'>
      <Header title="Your Title" count={count} />
      <Counter count={count} setCount={setCount} />
      <Footer copyright="Copyright © 2024 Developed by Gem Michael M. Nieva. All rights reserved." />
    </div>
  );
}

export default App;

