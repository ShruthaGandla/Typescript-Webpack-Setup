import React from 'react';
import ReactDOM from 'react-dom';
import {Hey} from './App';
// any functions that we want to make available to end users should be exported like this in index.tsx(entry file)
export { Add }  from './Addition';
export {Hey} from './App';


ReactDOM.render(<Hey name='shrutha'/>, document.getElementById('root'))



