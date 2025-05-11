import { cn } from '@stack-starter/utils';
import { Button, Switch, Label } from '@stack-starter/ui';
export default function Page() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={cn(['text-3xl', 'flex items-center', 'space-x-2'])}>
      <Switch id='hello' defaultChecked={true} color='red' />
      <Label htmlFor='hello'>Hello</Label>
      <Button>World</Button>
    </div>
  );
}
