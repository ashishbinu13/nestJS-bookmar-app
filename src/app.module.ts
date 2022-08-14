import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UserModule, BookmarksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
