const Categories = () => {
    const categories = ["Pizza", "Burgers", "Sushi", "Salad", "Desserts"];
    return (
        <section id="categories" className="section">
            <h3>Kategoritë</h3>
            <div className="grid">
                {categories.map((cat) => (
                    <div key={cat} className="card">{cat}</div>
                ))}
            </div>
        </section>
    );
};

export default Categories;