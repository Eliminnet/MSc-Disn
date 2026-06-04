export type APIResponse<T> = {
	data: T;
	status: number;
	time: Date;
};
