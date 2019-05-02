// import redux dep... 
const { createStore } = require('redux');

// import the reducer ..  
const Custom_Reducer = require('../reducers/Custom Reducer');

// create the store .. 
const Custom_Store = createStore(Custom_Reducer);

// export the store .. 
module.exports = Custom_Store ;



