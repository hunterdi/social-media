import { Injectable, NestMiddleware, RequestMethod } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { request } from 'http';
import { RouteInfo } from '@nestjs/common/interfaces';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`req:`, {
      headers: req.headers,
      body: req.body,
      originalUrl: req.originalUrl,
    });
    if (next) {
      next();
    }
  }
}