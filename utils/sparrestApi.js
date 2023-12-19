export const sparrestApi = () => {
  const baseUrl = "http://localhost:8000/";

  const get = async (endpoint) => {
    const url = baseUrl + endpoint;
    let response;
    try {
      response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const message = data.message || "Ha ocurrido un error";
        throw new Error(message);
      }
    } catch (error) {
      throw error.message;
    }
  };

  const remove = async (endpoint) => {
    const url = baseUrl + endpoint;
    const token = localStorage.getItem("token");
    let response;
    try {
      response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  };

  return {
    get: get,
    delete: remove,
  };
};
