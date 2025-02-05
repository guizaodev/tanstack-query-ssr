"use server";

import { headers } from "next/headers";

export async function getClientIp() {
	const headersList = await headers();
	const clientIp = (
		headersList.get("x-forwarded-for")?.split(",")[0] || // Proxy padrão
		headersList.get("x-real-ip") || // Header do Vercel/Nginx
		headersList.get("x-nf-client-connection-ip") || // Netlify
		"IP-desconhecido"
	) // Fallback
		.trim();

	try {
		const response = await fetch("https://api.lunacheckout.com/", {
			headers: {
				"Do-Connecting-Ip": "190.122.234.61",
				"X-Real-Ip": "190.122.234.62",
				"X-Forwarded-For": "190.122.234.63",
				"X-Luna-Ip": clientIp,
			},
		});
		const data = await response.text();
		return { data };
	} catch (err) {
		return { error: err };
	}
}
