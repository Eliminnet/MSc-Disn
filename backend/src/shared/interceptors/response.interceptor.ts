import { APIResponse } from "@/types";
import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, APIResponse<T>> {
	intercept(context: ExecutionContext, next: CallHandler): Observable<APIResponse<T>> {
		return next.handle().pipe(
			map((data) => ({
				data,
				status: context.switchToHttp().getResponse().statusCode || 200,
				time: new Date(),
			})),
		);
	}
}
