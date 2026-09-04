import "server-only";


export async function authorizeUser({ username, password }) {

    const { AUTH_URI } = process.env;

    try {
        const response = await fetch(`${AUTH_URI}/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        switch(response.status) {
			case 401:
                throw new Error("AUTH_FAILED");
				
			case 500:
                throw new Error("API_ERROR");

			case 200:
                return await response.json();

			default:
                throw new Error("UNEXPECTED_ERROR");
		}
    }
    catch (error) {
        switch(error.message) {
			case "AUTH_FAILED":
				return { success: false, message: "Brugernavn eller adgangskode er forkert." };
            case "API_ERROR":
                return { success: false, message: "Noget gik galt. Prøv igen senere." };
            default:
                return { success: false, message: "Noget uventet gik galt. Prøv at slukke din computer og tænd den igen." };
		}
    }

}