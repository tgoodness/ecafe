import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Index from './lib/config';

function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Index />
      </div>
    </QueryClientProvider>
  );
}

export default App;
