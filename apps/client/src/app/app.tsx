import { Button } from '@stack-starter/ui/components/button';
import { useEffect, useState } from 'react';

export function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/')
      .then(async (res) => {
        if (!res.ok) throw new Error('Fetch failed');
        const data = await res.json();
        setMessage(data.message);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
        <h1 className='text-3xl font-bold underline mb-4'>Hello</h1>
        <div>Error fetching data</div>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold underline mb-4'>Hello</h1>
      <Button
        className={
          message === 'check' ? 'bg-green-500' : message ? 'bg-red-500' : ''
        }
      >
        {message === 'check' ? 'check' : message ? 'error' : 'World'}
      </Button>
    </div>
  );
}
export default App;
