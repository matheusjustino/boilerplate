import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

// styles
import { GlobalStyles } from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);

	if (isSSR) return null;

	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}
