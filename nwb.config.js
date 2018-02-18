module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "CodieUI",
      externals: {
        react: "React", 
        "material-ui":"material-ui"
      }
    }
  },
  webpack: {
    extra: {
      externals: ["react", "material-ui", "material-ui/Progress"]
    }
  }
};
