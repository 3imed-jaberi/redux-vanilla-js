// import all actions .. 
const Custom_Action = require ('../actions/Custom Action');

// the intial state .. 
const initState = {
            frameworks : [
                           'JS NATIVE',
                           'REACT JS',
                           'ANGULAR JS',
                           'JQUERY',
                           'ANGUALR 2+',
                           'VUE JS',
                           'RIOT JS',
                           'BACKBONE JS'
                        ]
      };

// the reducer .. 
//______ you can use combine for combine more than reducer in one root reducer ______// 
const Custom_Reducer = (state = initState , action) => Custom_Action(state , action);

// export the reducer function .. 
module.exports = Custom_Reducer ;