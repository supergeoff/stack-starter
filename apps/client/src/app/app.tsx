import { Button } from '@stack-starter/ui/components/button';
import { useEffect, useState } from 'react';

export function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api')
      .then(async (res) => {
        if (!res.ok) throw new Error('Fetch failed');
        const data = await res.json();
        setMessage(data.message);
        console.log(message);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
        <h1 className='text-3xl font-bold underline mb-4'>Health Check</h1>
        <Button data-testid='checkbutton' className='bg-red-500'>
          KO
        </Button>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold underline mb-4'>Health Check</h1>
      <Button data-testid='checkbutton' className='bg-green-500'>
        {message?.toUpperCase()}
      </Button>
    </div>
  );
}
export default App;
