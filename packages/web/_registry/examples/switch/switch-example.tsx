import {Switch} from '@fatcn-ui'
import { useState } from 'react';


function SwitchExample(){

  const [isChecked, setIsChecked] = useState(false);

return <Switch checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked)}>
  Toggle me
</Switch>
}

export default SwitchExample