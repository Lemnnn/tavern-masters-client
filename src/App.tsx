import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WebRouter from "./router/router";

export const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WebRouter />
    </QueryClientProvider>
  );
}
