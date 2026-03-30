import Header from "../../Components/Header";
import HeroCard from "../../Components/HeroCard";
import Categories from "../../Components/Categories";
import Featured from "../../Components/Featured";
import Footer from "../../Components/Footer";

import "./index.css";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroCard />
            <Categories />
            <Featured />
            <Footer />
        </div>
    );
}

export default Home;