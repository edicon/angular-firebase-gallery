// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase_config: {
    apiKey: "AIzaSyAf4zow_dbI3KRdNFhwSozrKWFslvip7Ks",
    authDomain: "mglish-service.firebaseapp.com",
    databaseURL: "https://mglish-service.firebaseio.com",
    projectId: "mglish-service",
    storageBucket: "mglish-service.appspot.com",
    messagingSenderId: "753652227014"
  }
};
