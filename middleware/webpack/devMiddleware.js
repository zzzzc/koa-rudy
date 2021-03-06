import devMiddleware from 'webpack-dev-middleware'

module.exports = function (compiler, opts) {
  const expressMiddleware = devMiddleware(compiler, opts)
  return async (ctx, next) => {
    await expressMiddleware(ctx.req, {
      end: (content) => {
        ctx.body = content
      },
      setHeader: (name, value) => {
        ctx.headers[name] = value
      }
    }, next)
  }
}
