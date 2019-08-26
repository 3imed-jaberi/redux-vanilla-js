// import redux dep... 
const { createStore } = require('redux');

// import redx-devtools-extension for chrome | fireforx ..
// const { composeWithDevTools } = require('redux-devtools-extension');


// import the reducer ..  
const Custom_Reducer = require('../reducers/Custom Reducer');

// create the store .. 
const Custom_Store = createStore(Custom_Reducer/*, composeWithDevTools()*/);

// export the store .. 
module.exports = Custom_Store ;



