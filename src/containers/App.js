import React, { Fragment, Component } from 'react';

import Button from '../components/Button';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Button>ae</Button>
        <Button kind="primary">ae</Button>
        <Button rounded kind="secondary">ae</Button>
        <Button outlined kind="primary">ae</Button>
      </Fragment>
    );
  }
}
