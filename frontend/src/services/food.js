import axios from "axios";
const URL = "http://localhost:3000/food";

const get_all_food_service = async () => {
    return axios.get(`${URL}/all`);
}

const create_food_service = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("is_active", data.is_active);
    formData.append("image", data.image);

    return axios.post(`${URL}` + '/create', formData);
}

export { get_all_food_service, create_food_service }