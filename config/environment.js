/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    	thisApplicationName 			: 'Refset',
    	RegistrationEmail 				: 'register@ihtsdo.org',

    	// Refsets API
        refsetApiBaseUrl				: 'https://refset.ihtsdotools.org/refset-api/v1.0/refsets',
        conceptsApiBaseUrl				: 'https://refset.ihtsdotools.org/refset-api/v1.0/snomed/concepts',
        snomedTypesApiBaseUrl 			: 'https://refset.ihtsdotools.org/refset-api/v1.0/snomed/',

        numItemsPerPage 				: 10,
        numItemsPerPageDashboard 		: 5,

        supportedSnomedTypes :
        {
        	refsetTypes 				: ['446609009'], 			//['446609009','900000000000496009']
        	componentTypes 				: ['900000000000461009'] 	//['900000000000461009','900000000000462002']
        },

        defaultSnomedTypes :
        {
        	refsetType 					: '446609009',
        	componentType 				: '900000000000461009',
        	moduleType 					: '900000000000207008',
        },

        loginExpiry 					: 12 * 60, // minutes before you are logged out (12 hours)
        },
  };
    
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.baseURL = '/'; // Testem prefers this...    
  }


  return ENV;
};
