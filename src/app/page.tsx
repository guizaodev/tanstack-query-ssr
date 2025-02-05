import Filter from "@/components/filter";
import styles from "./page.module.css";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
// import { getClientIp } from "@/actions/ip-header";
import { getPerson } from "@/actions/swapi-api";

export default async function Home() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["person", "2"],
		queryFn: () => getPerson("2"),
	});
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1>Teste</h1>
				<HydrationBoundary state={dehydrate(queryClient)}>
					<Filter />
				</HydrationBoundary>
			</main>
		</div>
	);
}
