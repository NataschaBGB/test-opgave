import "server-only";


const { API_URI } = process.env;

export async function getAnimals() {
	let output;

	try {
		const response = await fetch(API_URI + "/animals", {
			headers: {
				"accept": "application/json"
			}
		});

		if (!response.ok) throw new Error("API_ERROR");

		output = await response.json();
	} catch (error) {
		console.log(error);

		if (error.message === "API_ERROR") output = { message: "Noget gik galt på databaseserveren" }
		return { success: false, message: output };
	}
	return {
		success: true,
		animals: output
	};
}

export async function getAnimalById(id) {
	let output;
	try {
		const response = await fetch(API_URI + "/animals/" + id, {
			headers: {
				"accept": "application/json"
			}
		});

		if (!response.ok) throw new Error("API_ERROR");
		// if (response.status === 404) throw new Error("NOT_FOUND");

		const temp = await response.json();
		if (!temp) {
			throw new Error("NOT_FOUND");
		}

		output = temp;

	} catch (error) {
		return {
			success: false,
			message: ""
		}
	}

	return {
		success: true,
		animal: output
	};
}