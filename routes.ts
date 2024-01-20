
// An array of public routes
// These routes don't require authentication
// @type {string[]}


export const publicRoutes = [
"i"
];

/*
This is an array of routes that are used for authentication
The routes will redirect logged in users to /settings
@types {string[]}
*/

export const authRoutes = [
  "api/auth/login",
  "api/auth/register",
];

// The prefix for the api routes
//Routes that start with this prefix are used for API authentication and authorization
// @type {string}

export const apiAuthPrefix = "api/auth";

/* 
This is the default redirect path after the user has logged in
@type {string}
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings";

