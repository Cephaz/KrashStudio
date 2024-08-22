import { Request, ResponseToolkit, Server } from '@hapi/hapi';
import Joi from 'joi';
import { searchSwapi } from '../services/swapiService';

export const searchRoutes = {
  name: 'search',
  register: async (server: Server) => {
    server.route({
      method: 'GET',
      path: '/search/{resource}',
      options: {
        validate: {
          params: Joi.object({
            resource: Joi.string().valid('people', 'planets', 'starships', 'vehicles', 'films', 'species').required(),
          }),
          query: Joi.object({
            q: Joi.string().required(),
          }),
        },
      },
      handler: async (request: Request, h: ResponseToolkit) => {
        const { resource } = request.params;
        const { q } = request.query;

        try {
          const results = await searchSwapi(resource, q as string);
          return h.response(results).code(200);
        } catch (error) {
          return h.response({ error: error }).code(500);
        }
      },
    });
  },
};
