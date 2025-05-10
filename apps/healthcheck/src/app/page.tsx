import { cn } from '@utils';
import { Button } from '@ui';

export default function Page() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={cn(['text-3xl'])}>
      Hello <Button variant='destructive'>World</Button>
    </div>
  );
}
