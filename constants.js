module.exports = {
  categories: ['recipes', 'people', 'entertainment', 'travel', 'ingredients'],
  userTypes: ['admin', 'editor', 'author', 'normal'],
  'default': {
    userType: 'normal',
    authorName: 'Staff Member',
  },
  production: {
    database: {
      connection: 'postgres://hfygdzhpnwtnmn:ychmR53PoD-RNJGptJdcYOtEmT@ec2-54-195-252-202.eu-west-1.compute.amazonaws.com:5432/dfqmesgbjh4pnl',
    },
  }
};
