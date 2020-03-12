module.exports = {
  apps : [{
    name: 'frontend',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '100M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : "gavin",
      host : "120.55.47.104",
      ref  : 'origin/master',
      repo : "git@github.com:cnscorpions/React-Nest-Admin.git",
      path : "/home/gavin/react-nest-admin/front-end"
    }
  }
};
