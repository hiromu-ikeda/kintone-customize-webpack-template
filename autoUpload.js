const { exec } = require("child_process")

class autoUploadPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapPromise("autoUploadPlugin", (compilation) => {
      exec(`npm run upload`)
      if (!compiler.options.watch) return Promise.resolve()

      return Promise.resolve()
    })
  }
}

module.exports = autoUploadPlugin
