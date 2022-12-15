import { Route, Routes } from 'react-router-dom';
import AuctionRoom from '../pages/auction-room.tsx/auction-room';
import Home from '../pages/home/home';
import Layout from '../pages/layout';

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="auction"
					element={<AuctionRoom />}
				/>
				<Route
					path="*"
					element={<h1>Page not found</h1>}
				/>
			</Route>
		</Routes>
	);
}

export default App;
