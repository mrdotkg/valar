import * as React from 'react';
import { Link } from 'react-router-dom';
import {Button, ButtonGroup, Intent, Spinner, AnchorButton} from "@blueprintjs/core";

let styles = require('./Home.scss');

// using JSX:
const mySpinner = <Spinner intent={Intent.PRIMARY} />;

// use React.createElement if you're not using JSX.
const myButton = React.createElement(Button, { intent: Intent.SUCCESS }, "Button content");

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {mySpinner}
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter"><Button intent={Intent.PRIMARY}>Counter</Button></Link>
          {myButton}
        </div>
	      <ButtonGroup minimal={true} large={false}>
		      <Button icon="database">Queries</Button>
		      <Button icon="function">Functions</Button>
		      <AnchorButton rightIcon="caret-down">Options</AnchorButton>
	      </ButtonGroup>
      </div>
    );
  }
}
