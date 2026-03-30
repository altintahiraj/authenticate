import { get_all_food_service } from "../services/food";
import { createContext, useContext, useState, useEffect } from "react";

const FoodContext = createContext({});
const FoodProvider = (props) => {
    const [food, setFood] = useState([]);

    const getAll = async () => {
        try {
            const result = await get_all_food_service();
            if (result.status === 200) {
                setFood(result.data);
                return result;
            }
        } catch (error) {
            throw new Error();
        }
    }

    const values = { food, getAll };

    return (
        <FoodContext.Provider value={values}>
            {props.children}
        </FoodContext.Provider>
    )
}

const useFoodContext = () => { return useContext(FoodContext) };
export { useFoodContext, FoodProvider }