export type PageMake = (arg?: any) => Promise<string>;
export type PostMake = (arg?: any) => Promise<void>;

class Page {
	dom: PageMake;
	post: PostMake | undefined;

	constructor(maker: PageMake, postMake?: PostMake) {
		this.dom = maker;
		this.post = postMake;
	}

	public async make(arg?: any): Promise<string> {
		return await this.dom(arg);
	}

	public async postMake(arg?: any): Promise<void> {
		if(this.post == undefined) return;
		await this.post(arg);
	}
}

export default Page;
