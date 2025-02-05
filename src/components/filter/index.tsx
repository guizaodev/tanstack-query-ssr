"use client";

import { getPerson } from "@/actions/swapi-api";
import { useQuery } from "@tanstack/react-query";

const Filter = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["person", "2"],
		queryFn: () => getPerson("2"),
	});
	return (
		<div>
			<h2>Enter: {isLoading ? <span>Carregando...</span> : data?.data.name}</h2>
		</div>
	);
};

export default Filter;
