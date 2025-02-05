"use server";

import axios from "axios";

export async function getPeople() {
	try {
		const response = await fetch("https://swapi.dev/api/people/");
		const data = await response.json();
		return { data };
	} catch (err) {
		return { error: err };
	}
}

export async function getPerson(id: string) {
	try {
		const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
		const data = await response.data;
		return { data };
	} catch (err) {
		return { error: err };
	}
}
