// PRODUCTION (Render)
const API_BASE_URL = "https://ecodrop-backend-1w8x.onrender.com/api/v1";

// LOCAL (Change this when testing locally)
// const API_BASE_URL = "http://10.0.2.2:8000/api/v1"; // For Android Emulator
// const API_BASE_URL = "http://172.30.1.208:8000/api/v1"; // For Physical Device


export const authService = {
  signup: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          first_name: userData.firstName,
          last_name: userData.lastName,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || "Signup failed");
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Login failed");
      }

      return data;
    } catch (error) {
      throw error;
    }
  },
};
