import { cn } from '@stack-starter/utils';
import { Button, Switch } from '@stack-starter/ui';
export default function Page() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={cn(['text-3xl'])}>
      <Switch>Hello</Switch> <Button>World</Button>
    </div>
  );
}
