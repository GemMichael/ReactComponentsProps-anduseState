import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CountDisplay from './CountDisplay.jsx';


function Counter({ count, setCount }) {
    //Function to decrement count if it's greater than 0
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    //Function to increment count
    const increment = () => {
        setCount(count + 1);
    }

    //Render Counter component
    return (
        <div className="container">
             <div className="row justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                <div className="col-md-6">
                    <div className="card text-center">
                    <CountDisplay count={count} />
                    <div className="d-flex justify-content-center">
                    <Button variant="outline-danger p-3 m-3" onClick={decrement} disabled={count === 0}>Decrement</Button>
                    <Button variant="outline-success p-3 m-3" onClick={increment}>Increment</Button>
                </div>
            </div>
        </div>
    </div>
</div>

    );
}

export default Counter;

