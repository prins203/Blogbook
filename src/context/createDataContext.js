import React, {useReducer} from "react";

export default (reducer, actions, initialState) => {
// this is used by {any level of children} of the {wrapped/covered app} to get access of the
  const Context = React.createContext();

// this is to {wrap/cover the component-heirarchy} to whom the {state} will be available to access
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    
    //actions === { addBlogPost: (dispatch) => { return () => {} } }
    for (let key in actions){
        boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
