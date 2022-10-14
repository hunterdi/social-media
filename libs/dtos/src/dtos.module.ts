import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { PostProfile, UserProfile } from '.';

@Module({
  imports: [AutomapperModule],
  providers: [UserProfile, PostProfile],
  exports: [],
})
export class DtosModule {}
