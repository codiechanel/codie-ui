module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "CodieUI",
      externals: {
        react: "React", 
      }
    }
  },
  webpack: {
    config(config) {
      // Change config as you wish
      /**
       * we need to use externals in production only
       * in order to use the Demo mode
       * which would not work if externals is set
       */
      if (process.env.NODE_ENV === "production") {
        console.log('we are in production' )
        config.externals = ["react", "material-ui", "material-ui/Progress"]
      }
      else {
        console.log('we are in devt' )
      }
      // You MUST return the edited config object
      return config
    }
  },
  // webpack: {
  //   extra: {
  //     externals: ["react", "material-ui", "material-ui/Progress"]
  //   }
  // }
};
