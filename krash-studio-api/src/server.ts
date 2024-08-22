import Hapi from '@hapi/hapi';
import { searchRoutes } from './routes/search';

const init = async () => {
  const isDev = process.env.NODE_ENV !== 'production';
  
  const server = Hapi.server({
    port: isDev ? 3000 : 4010,
    host: isDev ? 'localhost' : '0.0.0.0',
    routes: {
      cors: true,
    },
  });

  await server.register(searchRoutes);

  await server.start();
  console.log('Server running in %s mode', isDev ? 'development' : 'production');
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
