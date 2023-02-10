
import axios from "axios";
const BASE_URL = '//localhost:3000/v1/places'
const BASE = 'http://localhost:3000/v1/places'


const GET = async (url) => {
	let res = null;
	try {
		res = await axios.get(url);
		return (res) || null;
	} catch (error) {
		throw (error) || errorMessage;
	}
};
const DELETE = async (url) => {
	let res = null;
	try {
		res = await axios.delete(url);
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

const PATCH = async (url, payload) => {
	let res = null;
	try {
		res = await axios.patch(url, payload);
		return (res )
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
	PATCH,
	GET,
	DELETE,
	places: `${BASE_URL}/`,
	placesURL: `${BASE}/`
};