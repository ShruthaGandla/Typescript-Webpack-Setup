import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// any functions that we want to make available to end users should be exported like this in index.tsx(entry file)
export { Add }  from './Addition';


ReactDOM.render(<App name='shrutha'/>, document.getElementById('root'))



