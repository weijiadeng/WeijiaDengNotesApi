const config = {

  STRIPE_KEY: "sk_test_51IUoVZHUkyjAXMtWn0WDYQkjH8yihwfl4mXHbhnYJXWscY7JCmjswqQQEWT5tAe3cTgMzNSd8Kx1kXLiumnBNMqR00kMesmLh2",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-upload-weijia",
  },

  apiGateway: {
    REGION: "us-west-2",
    URL: "https://y4m5xqlvsc.execute-api.us-west-2.amazonaws.com/prod",
  },


  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_5q6lPCf2F",
    APP_CLIENT_ID: "1j5vc27s2rgejms8n5hji78r1m",
    IDENTITY_POOL_ID: "us-west-2:fd4cb159-a523-40e9-9528-9f6aa4b05498",
  },
};

export default config;
