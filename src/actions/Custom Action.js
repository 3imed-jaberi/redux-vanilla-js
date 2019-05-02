// List of all actions .. 
const { ADD_YOU_FAVOURITE_WEB_FRAMEWORK } = require('./List Of Actions');

// this is a basic action .. you can add more than one with IF or SWITCH .. 
const Custom_Action = (state , action) => {

          if ( action.type === ADD_YOU_FAVOURITE_WEB_FRAMEWORK ) {
             return {
                       ...state,
                       frameworks : [...state.frameworks , action.framework]
             };
          };

};

// export the action function .. 
module.exports = Custom_Action ;