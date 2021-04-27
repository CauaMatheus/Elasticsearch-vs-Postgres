import { Client } from 'elasticsearch';

function getElasticSearchClient(): Client {
  const client = new Client({
    host: 'localhost:9200',
    // log: 'trace',
  });

  return client;
}
export default getElasticSearchClient;
