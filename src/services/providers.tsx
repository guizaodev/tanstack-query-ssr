import ReactQueryProvider from "./react-query";

interface PrimeProviderProps {
	children: React.ReactNode;
}

const PrimeProvider = async ({ children }: PrimeProviderProps) => {
	return (
		<>
			<ReactQueryProvider>{children}</ReactQueryProvider>
		</>
	);
};

export default PrimeProvider;
