module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CodieUI',
      externals: {
        react: 'React'
      }
    }
  }
}
