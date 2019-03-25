import * as fastify from 'fastify';
import * as faststatic from 'fastify-static';
import { Server, IncomingMessage, ServerResponse } from 'http';
import * as path from 'path'
/**
 * Class for Fastify Server
 */

export class FastifyServer {
  private server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>
  private port: number 

  constructor(port : number) {
    this.port = port
    this.server = fastify({})

    // create routes
    // this.server.route({
    //   method: 'GET',
    //   url: '/',
    //   schema: {
    //     // request needs to have a querystring with a `name` parameter
    //     querystring: {
    //       name: { type: 'string' }
    //     },
    //     // the response needs to be an object with an `hello` property of type 'string'
    //     response: {
    //       200: {
    //         type: 'object',
    //         properties: {
    //           hello: { type: 'string' }
    //         }
    //       }
    //     }
    //   },
    //   // this function is executed for every request before the handler is executed
    //   preHandler: async (request, reply) => {
    //     console.log(request);
    //   },
    //   handler: async (request, reply) => {
    //     return { hello: 'world' }
    //   }
    // })

  }

  /**
   * Method to start the server
   */
  public startServer() : void {
    const start = async () => {
      try {
        console.log(`server listening on ${this.port}`)
        await this.server.listen(this.port)
      } catch (err) {
        console.log(err)
        process.exit(1)

      }
    }
    start()
  }

  /** 
   * Start serving static files
   */
  public serveStaticFiles() {
    this.server.register(require('fastify-static'), {
      root: path.join(__dirname, '../client'),
      // prefix: '/', // optional: default '/'
    })

    // this.server.register(require('fastify-static'), {
    //   root: path.join(__dirname, '../client/assets'),
    //   prefix: '/assets/', // optional: default '/'
    // })

  }

}

/**
 * Create and start server instance
 */

var server : FastifyServer = new FastifyServer(3000)
server.serveStaticFiles()
server.startServer()