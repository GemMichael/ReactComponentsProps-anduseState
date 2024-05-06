function CountDisplay({ count }) {
    const countStyle = {
        fontSize: '2rem',
        fontWeight: 'bold'
    };

    return (
        <h1 className="p-5 mt-3 fw-semibold" style={countStyle}>{count}</h1>
    );
}

export default CountDisplay;
