# jsonplacholder

# asynchronous actions  


# Redux 
# store | reducer | action 

# store ---> global state (JSON javascript object)

# action creator ---> function which returns an action  
# action ---> javascript object JSON  {type:TYPE, x:blabla, y: foo}


# reducer ---> pure function : (prevState, action) => newState


# Reasons to use redux-thunk (middleware for redux):

  # asynchronous actions are difficult to deal with because we have less control over the order in which actions get dispatched

  # allow us to fire everything in the order we want because it's able to stop everything until the request or fetch call is resolved

  # reducers must be pure functions. This stops us from making web requests from within reducers

  # actions must return plain javascript objects. 
