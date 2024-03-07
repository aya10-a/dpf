import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { setAuthorization } from "../helpers/api_helper";
import { useDispatch } from "react-redux";
import { useProfile } from "../Components/Hooks/UserHooks";
import { logoutUser } from "../store/actions";

//AuthProtected: Un composant qui protège les routes nécessitant une authentification.
// Il vérifie si l'utilisateur est connecté et si son profil est chargé. Si ce n'est pas le cas, 
//il redirige l'utilisateur vers la page de connexion. Sinon, il affiche le contenu protégé.

const AuthProtected = (props) => {
  const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();
  useEffect(() => {
    if (userProfile && !loading && token) {
      setAuthorization(token);
    } else if (!userProfile && loading && !token) {
      dispatch(logoutUser());
    }
  }, [token, userProfile, loading, dispatch]);


  if (!userProfile && loading && !token) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return <>{props.children}</>;
};
//AccessRoute: Un composant pour définir des routes accessibles publiquement. 
//Il rend le composant passé en tant que propriété avec les paramètres d'URL.
const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (<> <Component {...props} /> </>);
      }}
    />
  );
};
export { AuthProtected, AccessRoute };
//Ce code utilise React Router DOM pour gérer la navigation 
// Redux pour gérer l'état de l'application, en particulier pour la gestion de l'authentification.