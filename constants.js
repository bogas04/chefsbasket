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
  },
  public: {
    image: {
      url: '/public/img/',
      dir: __dirname + '/client/public/img/',
    }
  },
  imageExtensions: ['image/jpeg', 'image/png', 'image/jpg'],
  profaneWords: ['fuck', 'asshole', 'bitch'],
};
