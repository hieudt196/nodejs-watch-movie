import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();

    console.log('Body: ', request.body);

    return next.handle().pipe(
      // completed
      map((data) => {
        return { data };
      }),

      //error
      // catchError((err) => {
      //   console.log(context.switchToHttp().getResponse());
      //   return throwError(err);
      // }),
    );
  }
}
