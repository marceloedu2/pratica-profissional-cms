module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd29ab8b1786eaf96457ab5ebf301b6be'),
  },
});
