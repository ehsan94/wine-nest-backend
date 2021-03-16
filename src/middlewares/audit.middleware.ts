import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";


@Injectable()
export class AuditMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log('Logging Delet Request Ip', req.ip);
        console.log('Logging Delet Request Path', req.path);
        console.log('Logging Delet Request Headers', req.headers);
        next();
    }

}