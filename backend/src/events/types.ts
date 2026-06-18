type WSSuccessResponse<T> = {
	ok: true;
} & T;

type WSErrorResponse = {
	ok: false;
	error?: string;
};

export type WSResponse<T = void> = WSSuccessResponse<T> | WSErrorResponse;

export type RoomState = {
	hostId: string;
	slide: number;
	socketIds: Set<string>;
};
