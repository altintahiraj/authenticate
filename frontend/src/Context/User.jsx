import { createContext, useContext, useEffect, useState } from "react";
import { register_user, login_user, logout_user, checkAuth_user } from "../services/user";

const UserContext = createContext({});

const UserProvider = (props) => {
    const [user, setUser] = useState({});
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        checkAuthUser();
    }, [trigger]);

    const register = async (data) => {
        try {
            const result = await register_user(data);
            if (result.status === 200) {
                setUser(result.data);
            }
        } catch (error) {
            throw error.response.data;
        }
    }

    const login = async (data) => {
        try {
            const result = await login_user(data);
            if (result.status === 201) {
                setUser(result.data);
                setTrigger(!trigger);
                return result.data;
            }
        } catch (error) {
            console.log("Login error:", error);
            throw error.response.data;
        }
    }


    const logout = async (id, data) => {
        try {
            const result = await logout_user_service();
            if (result.data.status === 201) {
                setUser({});
                setTrigger(!trigger);
            }
        } catch (error) {
            return error
        }
    }

    const checkAuthUser = async () => {
        try {
            const result = await checkAuth_user();
            if (result.status === 200) {
                setUser(...result.data);
            } else {
                setUser({});
            }
            return result;
        } catch (error) {
            setUser({});
            return error;
        } finally {
            setIsAuthChecked(true);
        }
    }

    const values = { register, login, logout, user, isAuthChecked, checkAuthUser }

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )

}


const useUserContext = () => { return (useContext(UserContext)) }
export { useUserContext, UserProvider }