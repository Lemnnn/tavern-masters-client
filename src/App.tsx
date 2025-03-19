import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WebRouter from "./router/router";
import AuthenticatedContextProvider from "./context/authenticated-context";

export const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticatedContextProvider>
        <WebRouter />
      </AuthenticatedContextProvider>
    </QueryClientProvider>
  );
}
