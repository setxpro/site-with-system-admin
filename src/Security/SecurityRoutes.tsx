import { useContext } from 'react';
import { AuthContext } from '../Contexts/Auth/AuthContext';
import SignInSide from '../Pages/SystemAdmin/Login/Signin';

const SecurityRoutes = ({children}: {children: JSX.Element}) => {

    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <SignInSide/>
    }

  return children;
}

export default SecurityRoutes;