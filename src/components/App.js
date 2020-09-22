import React, { Fragment } from 'react';

import Editor from './Editor';

const App = () => {
  return (
    <Fragment>
      <div className='pane top-pane'>
        <Editor />
        <Editor />
        <Editor />
      </div>
      <div className='pane'>
        <iframe
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          height='100%'
          width='100%'
        />
      </div>
    </Fragment>
  );
};

export default App;
