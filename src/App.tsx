import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";

import { Button } from "@patternfly/elements/react/pf-button/pf-button.js";
import { Card } from "@patternfly/elements/react/pf-card/pf-card.js";
import { Switch } from "@patternfly/elements/react/pf-switch/pf-switch.js";
import { Popover } from '@patternfly/elements/react/pf-popover/pf-popover.js';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [allowDec, setAllowDec] = useState(false);
  const toggle = () => setAllowDec(!allowDec);
  const reactLogoRef = useRef<HTMLImageElement>(null);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const [anim] = reactLogoRef.current?.getAnimations() ?? [];
    console.log(anim, reactLogoRef.current);
    if (anim) {
      anim.playbackRate = count;
    }
  }, [count]);

  const onMouseover = () => {
    popoverRef.current?.show()
  };

  const onMousehide = () => {
    popoverRef.current?.hide()
  };

  return (
    <div className="card">
      <Button ref={buttonRef} onMouseOver={onMouseover}
             onMouseLeave={onMousehide} >Hover to Cite</Button>
      <Popover ref={popoverRef}>
        <cite slot="body">Popover body</cite>
        <q>Popover</q>
      </Popover>
      <Card id="card" rounded>
        <h1 slot="header">React + PatternFly Elements</h1>
        <div>count is {count}</div>
        <label>
          Allow decrement?
          <Switch checked={allowDec} onChange={toggle} />
        </label>
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
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            ref={reactLogoRef}
            className="logo react"
            alt="React logo"
          />
        </a>
        </div>
    </div>
  );
}

export default App;
