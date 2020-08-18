import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import GoTrue from 'gotrue-js';
import { useLocation } from 'react-router-dom';

const createAuthContext = () => {
  const AuthContext = createContext(undefined);
  const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('must be inside a provider with a value');
    return context;
  };
  return [useAuthContext, AuthContext.Provider];
};

const [LocalUseAuthContext, LocalAuthContextProvider] = createAuthContext();

const AuthContextProvider = ({ url, children, onAuthChange = () => {} }) => {
  const auth = useAuth(url, onAuthChange);
  return (
    <LocalAuthContextProvider value={auth}>{children}</LocalAuthContextProvider>
  );
};

const useAuth = (url, onAuthChange = () => {}) => {
  const goTrueInstance = useMemo(
    () =>
      new GoTrue({
        APIUrl: url,
        audience: '',
        setCookie: true,
      }),
    [url]
  );

  const [user, setUser] = useState(goTrueInstance.currentUser() || undefined);

  const { hash } = useLocation();

  const _setUser = useCallback(
    (_user) => {
      setUser(_user);
      onAuthChange(_user);
      return _user;
    },
    [onAuthChange]
  );

  const [tokenParam, setTokenParam] = useState(undefined);

  useEffect(() => {
    // Shortest possible termination
    if (!hash) {
      setTokenParam(undefined);
      return;
    }
    if (!hash.match(/^#(confirmation_token|recovery_token|invite_token).*$/)) {
      setTokenParam(undefined);
      return;
    }
    const hashObject = reduceHash(hash);
    setTokenParam(hashObject);
  }, [hash]);

  const signupUser = useCallback(
    (email, password, data, directLogin = true) =>
      goTrueInstance.signup(email, password, data).then((user) => {
        return user;
      }),
    [goTrueInstance]
  );

  const loginUser = useCallback(
    (email, password, remember = true) =>
      goTrueInstance
        .login(email, password, remember)
        .then((user) => _setUser(user)),
    [goTrueInstance, _setUser]
  );

  const logoutUser = useCallback(async () => {
    if (!user) {
      return Promise.reject('No user logged in');
    }
    await user.logout();
    return _setUser(undefined);
  }, [user, _setUser]);

  const confirmUser = useCallback(
    (confirmToken, remember = true) =>
      goTrueInstance.confirm(confirmToken, remember).then(setUser),
    [goTrueInstance]
  );

  const requestRecoveryEmail = useCallback(
    (email) => goTrueInstance.requestPasswordRecovery(email),
    [goTrueInstance]
  );

  const updateUser = useCallback(
    async (fields) => {
      if (!user) {
        return Promise.reject('user is empty');
      }
      await user
        .update(fields)
        .then(_setUser)
        .catch((error) => console.log(error));
    },
    [_setUser, user]
  );

  const recoverUser = useCallback(
    async (token, fields, remember = true) => {
      const user = await goTrueInstance.recover(token, remember);
      console.log('received user promise');
      if (user) {
        return user
          .update(fields)
          .then(_setUser)
          .catch((error) => console.log(error));
      }
    },
    [goTrueInstance, _setUser]
  );

  const acceptInvite = useCallback(
    async (token, password, remember = true) => {
      await goTrueInstance
        .acceptInvite(token, password, remember)
        .then(_setUser);
    },
    [goTrueInstance, _setUser]
  );

  return {
    user,
    tokenParam,
    signupUser,
    loginUser,
    logoutUser,
    confirmUser,
    requestRecoveryEmail,
    recoverUser,
    updateUser,
    acceptInvite,
  };
};

const reduceHash = (hash) => {
  const [key, value] = hash.replace('#', '').split('=');
  return { [key]: value };
};
export { LocalUseAuthContext as useAuthContext, AuthContextProvider };
