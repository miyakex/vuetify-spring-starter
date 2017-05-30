import axios from 'axios'

var config = require('../../config')
var apiConfig = process.env.NODE_ENV === 'production'
  ? config.build.apiConfig
  : config.dev.apiConfig

export default axios.create(apiConfig)
