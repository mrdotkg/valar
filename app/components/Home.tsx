import * as React from 'react';
import { Link } from 'react-router-dom';
import {Button, ButtonGroup, Intent, Classes, Popover} from "@blueprintjs/core";
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

let styles = require('./Home.scss');

// use React.createElement if you're not using JSX.
const myButton = React.createElement(Button, { intent: Intent.SUCCESS }, "Button content");

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter"><Button intent={Intent.PRIMARY}>Counter</Button></Link>
          {myButton}
        </div>

	      <ButtonGroup className={Classes.ALIGN_LEFT}>
		      <Popover >
			      <Button icon="document" rightIcon="caret-down" text="File" />
		      </Popover>
		      <Popover >
			      <Button icon="edit" rightIcon="caret-down" text="Edit" />
		      </Popover>
		      <Popover >
			      <Button icon="eye-open" rightIcon="caret-down" text="View" />
		      </Popover>
	      </ButtonGroup>

      </div>
    );
  }
}
