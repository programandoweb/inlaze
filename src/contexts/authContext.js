import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const AUTH_TOKENS_KEY = "NEXT_JS_AUTH";

export const AuthContext = createContext({
  login: (authTokens) => {},
  logout: () => {},
  isLoggedIn: false,
  authTokens: null,
});

export default function AuthContextProvider({ children }) {
  const authTokensInLocalStorage      =   typeof window !== "undefined" ? window.localStorage.getItem(AUTH_TOKENS_KEY) : null;
  const [authTokens, setAuthTokens]   =   useState(
    authTokensInLocalStorage === null
      ? null
      : JSON.parse(authTokensInLocalStorage)
  );

  const login = useCallback(function (authTokens) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify(authTokens));
      setAuthTokens(authTokens);
    }
  }, []);

  const logout = useCallback(function () {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(AUTH_TOKENS_KEY);
      setAuthTokens(null);
    }
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      authTokens,
      isLoggedIn: authTokens !== null,
    }),
    [authTokens, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
