import { Navigate } from "react-router";
import { useUserContext } from "../../Context/User";

const AdminRoute = ({ children }) => {
    const { user, isAuthChecked } = useUserContext();
    console.log("user in admin route---", user);

    if (!isAuthChecked) {
        return <div>Loading...</div>;
    }
    const hasAccess = user?.roles === 'admin';
    return hasAccess ? children : <Navigate to="/" />;
}
export default AdminRoute;