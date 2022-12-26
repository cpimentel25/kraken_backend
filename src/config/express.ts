import express, { Application, urlencoded } from 'express';
import morgan from 'morgan';

function configExpress(app: Application) {
  // Cors
  app.use(express.json());
  app.use(morgan('dev'));
};

export default configExpress;
