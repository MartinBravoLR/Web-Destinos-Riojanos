
import axios from "axios";
const BASE_URL = '//localhost:3000/v1/places'


const GET = async (url) => {
	let res = null;
	try {
		res = await axios.get(url);
		return (res) || null;
	} catch (error) {
		throw (error) || errorMessage;
	}
};

const POST = async (url, payload) => {
	let res = null;
	try {
		res = await axios.post(url, payload);
		return (res) || null;
	} catch (error) {
		throw (error) || errorMessage;
	}
};




const errorMessage = {
	message: "Error en el servidor",
	name: "serverError",
	statusCode: 500,
};

export default {
	POST,
	GET,
	places: `${BASE_URL}/`,
};