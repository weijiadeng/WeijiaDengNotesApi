const config = {

  STRIPE_KEY: "pk_test_51IUoVZHUkyjAXMtWDH20EiKKGNKusb7Jec0fIZQ0fyO8AbjwWxAsGK4SJRm7gGnKswYwasapUt3cmoXZNSJJwHf700zqqYVqTJ",
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
