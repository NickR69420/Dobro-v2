import { Event } from '../structures';
import { Dobro } from '../lib/client/Dobro';

export default new Event('ready', (client: Dobro) => {
	client.consola.log('Online!');
});
