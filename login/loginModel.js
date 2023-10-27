export const loginUser = async (email, password) => {
    const url = "http://localhost:8000/auth/login";

    const body = {
        username: email,
        password: password,
    }
    let response; //variable sin inicializar ya que fetch lo hace solo
    try {
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'//para saber el tipo de dato que intercambiamos con sparret
        }
    });

    const data = await response.json()
        if (!response.ok){ //para que el tryCatch capture el error y lo muestre
            throw new Error(data.message);
        }
        if (response.ok) {
            return data.accessToken;//nos devuelve del controlador el token
        }

    } catch (error) {
        if (error.message) {
            throw error.message; 
        } else{
            throw error;
        }
    };
}