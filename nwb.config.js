module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MyDesignComponents',
      externals: {
        react: 'React'
      }
    }
  }
}
