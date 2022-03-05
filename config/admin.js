module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '811cb2e00576651858d135d2ef4ac191'),
  },
});
