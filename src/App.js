 import { QueryClient, QueryClientProvider } from "react-query";
//  import { ReactQueryDevtools } from 'react-query/devtools';
import Header from "./components/Header";
// import Repositories from "./components/Repositories";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
     <Header />
    {/* <Repositories /> */}
      {/* The rest of your application */}


    </QueryClientProvider>
  );
};

export default App;