// main function for redux with native js ..  
const Native_Redux = (type ,framework) => {
  
  // import the store .. 
  const Custom_Store = require('./store/Custom Store');

  // subscribe for all change event of the state .. 
  Custom_Store.subscribe(()=>{
          console.log('State Updated ... ');
          console.log(Custom_Store.getState());
  });

  // dispatch the action type and the data .. 
  Custom_Store.dispatch({ type , framework});

};

// exportthe fucntion for used in the entrypoint .. 
module.exports = Native_Redux ;