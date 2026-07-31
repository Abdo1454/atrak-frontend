import { createContext, useContext, useEffect, useState } from "react";
import authService from "../../src/api/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);

    try {
      const response = await authService.login(credentials);

      const { user, token } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);
      setToken(token);

      return response.data;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data) => {
    setLoading(true);

    try {
      const response = await authService.register(data);

      const { user, token } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);
      setToken(token);

      return response.data;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (token) {
        await authService.logout();
      }
    } catch (error) {
      console.error(error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setUser(null);
      setToken(null);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}