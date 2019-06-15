import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL, { useNewUrlParser: true }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
