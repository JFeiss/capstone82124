module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','ZOnwo9oDUUf294KJ8W25IbQ=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'a3da8ef22ff499a66456726e97085a57'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
