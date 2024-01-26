import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "@components/ProtectedRoute";
import Home from "@src/pages/Home";
import AuthLayout from "@features/authentication/AuthLayout";
import Login from "@src/pages/Login";
import NotFound from "@src/pages/NotFound";
import { Toaster } from "react-hot-toast";

const queryCLient: QueryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryCLient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ProtectedRoute />}>
						<Route index element={<Home />} />
					</Route>

					{/* Unauthorized routes */}
					<Route element={<AuthLayout />}>
						<Route path="/login" element={<Login />} />
					</Route>

					<Route path="not-found" element={<NotFound />} />
					<Route path="*" element={<Navigate replace to="not-found" />} />
				</Routes>
			</BrowserRouter>

			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: {
						duration: 8000,
					},
					error: {
						duration: 10000,
					},
					style: {
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",
						backgroundColor: "#0D4959",
						color: "#FBFBFF",
						boxShadow: "0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgb(0 0 0 / 0.25)",
					},
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;
