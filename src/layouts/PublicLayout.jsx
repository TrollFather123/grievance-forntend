import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    // const { userModules } = useSelector((state) => state.user)
    // const authorizationKey = window.localStorage.getItem(authorizationToken);
    // if (authorizationKey) {
    //     if (userModules.length === 0) {
    //         return <Navigate to="/access" />;
    //     }
    //     else {
    //         return <Navigate to={userModules[0]?.url_path} />;
    //     }
    // }
    return (
        <Outlet />
    )
};

export default PublicLayout;