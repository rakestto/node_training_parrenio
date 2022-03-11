import express from 'express';
import ApiRouter from './Routes';

export class Server {
	private port: string;
	private express: express.Express;
	private router: ApiRouter;

	constructor(port: string, router: ApiRouter) {
		this.port = port;
		this.express = express();
		this.router = router;

		this.express.use(this.router.createRoutes());
	}

	async listen(): Promise<void> {
		return new Promise((resolve) => {
			this.express.listen(this.port, async () => {
				console.log('listen on port', this.port);
			});
			resolve();
		});
	}
}
