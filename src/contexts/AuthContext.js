import { Auth } from "aws-amplify";
import { createContext, useState, useEffect, useContext } from "react";
import GROUPS from "../constants/groups";

const AuthContext = createContext({});
export const getGroupName = (groups) => {
  let groupName = "";
  if (groups.includes(GROUPS.CLIENTES)) {
    groupName = GROUPS.CLIENTES;
  }
  return groupName;
};

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const fetchUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      console.log(authUser);
      setAuthUser(authUser);
    } catch (error) {
      // Handle any errors here
      console.error("Error fetching user:", error);
      setAuthUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const sub = authUser?.attributes?.sub;
  const authEmail = authUser?.attributes?.email;
  const userName = authUser?.username;

  const groups =
    authUser?.signInUserSession?.idToken?.payload["cognito:groups"] ?? [];
  const groupName = getGroupName(groups);

  return (
    <AuthContext.Provider
      value={{ authEmail, userName, groupName, groups, sub, fetchUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
