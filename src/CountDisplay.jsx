function CountDisplay({ count }) {
    //Define style for displaying count
    const countStyle = {
        fontSize: '2rem',
        fontWeight: 'bold'
    };

    //Render count display component
    return (
        <h1 className="p-5 mt-3 fw-semibold" style={countStyle}>{count}</h1>
    );
}

export default CountDisplay;
