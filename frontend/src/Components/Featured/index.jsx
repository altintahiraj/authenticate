const Featured = () => {
    const foods = [
        { name: "Margherita Pizza", price: "$12" },
        { name: "Cheeseburger", price: "$10" },
        { name: "California Roll", price: "$15" },
        { name: "Chocolate Cake", price: "$8" },
    ];
    return (
        <section id="featured" className="section">
            <h3>Të rekomanduara</h3>
            <div className="grid">
                {foods.map((food) => (
                    <div key={food.name} className="card">
                        <h4>{food.name}</h4>
                        <p>{food.price}</p>
                        <button className="cta-button">Porosit</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Featured;