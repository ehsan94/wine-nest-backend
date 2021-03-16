
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class BenchMarkInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('Before...');
        const ctx = context.switchToHttp();
        const request: Request = ctx.getRequest();
        // Todo : logger can be implemented
        console.log('Endpoint', request.url);
        console.log('Method', request.method);
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => console.log(`Execution Time... ${Date.now() - now}ms`)),
            );
    }
}