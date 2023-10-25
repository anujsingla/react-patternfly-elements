import { useRef, useState } from "react";

import { Button } from "@patternfly/elements/react/pf-button/pf-button.js";
import { Card } from "@patternfly/elements/react/pf-card/pf-card.js";
import { Switch } from "@patternfly/elements/react/pf-switch/pf-switch.js";
import { Popover } from "@patternfly/elements/react/pf-popover/pf-popover.js";
import { Tooltip } from "@patternfly/elements/react/pf-tooltip/pf-tooltip.js";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [allowDec, setAllowDec] = useState(false);
  const toggle = () => setAllowDec(!allowDec);
  const popoverRef = useRef(null);

  const onMouseover = () => {
    popoverRef.current?.show();
  };

  const onMousehide = () => {
    popoverRef.current?.hide();
  };

  return (
    <Card id="card" rounded>
      <h1 slot="header">React + PatternFly Elements</h1>
      <div>count is {count}</div>
      <label>
        Allow decrement?
        <Switch checked={allowDec} onChange={toggle} />
      </label>
      <p>
        <Tooltip id="tooltip" content="Tooltip text">
          <span>show tooltip on mouse over</span>
        </Tooltip>
      </p>
      <p>
        <Button onMouseOver={onMouseover} onMouseLeave={onMousehide}>
          Open Popover
        </Button>
        <Popover ref={popoverRef} body="Popover body" heading="Heading">
          <span>popover</span>
        </Popover>
      </p>

      <Button slot="footer" onClick={() => setCount((count) => count + 1)}>
        Increment
      </Button>
      <Button
        slot="footer"
        danger={allowDec}
        disabled={!allowDec}
        onClick={() => setCount((count) => count - 1)}
      >
        Decrement
      </Button>
    </Card>
  );
}

export default App;
