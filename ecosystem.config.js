module.exports = {
  apps: [{
    name: "reverse-proxy",
    script: "./index.js",
    instances: "2"
  }]
}