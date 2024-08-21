module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','ZOnwo9oDUUf294KJ8W25IbQ=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'c81240a55090ce76e379d5dd00bc7b7780fe26ae78436303dc257bc29dcf45be95200a335abd5b7805584d160c822778d740257968e52a54bac55a9203674daae591239d8956100f09b930f619ae9eaecdd905ff2b05bf46bf3fa5d97f10de98c32178585301cb61f32b24ce9d1d86e2ffd1d5fc3bd3458023ed26063a339c2a'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
