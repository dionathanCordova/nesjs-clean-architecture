import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityNotFoundExceptionFilter } from './src/common/filters/not-found-exception.filter';
import { QueryFailedExceptionFilter } from './src/common/filters/query-failed-exception.filter';
import { AppConfigModule } from './src/config/app/config.module';
import { SignUpModule } from './src/modules/sign-up/sign-up.module';

@Module({
  imports: [AppConfigModule, SignUpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: QueryFailedExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: EntityNotFoundExceptionFilter,
    },
  ],
})
export class AppModule {}
