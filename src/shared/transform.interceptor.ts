import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, Observable, throwError } from 'rxjs';

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
    Logger.log(JSON.stringify(request.body));

    return next.handle().pipe(
      // complete
      map((data) => {
        Logger.log(JSON.stringify(data));
        return { data };
      }),

      //error
      catchError((err) => {
        Logger.log(JSON.stringify(err));
        return throwError(() => err);
      }),
    );
  }
}
