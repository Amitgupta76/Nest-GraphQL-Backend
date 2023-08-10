import { Module } from '@nestjs/common'
import { MessageResolver } from './message.resolver';

@Module({
    imports: [],
    controllers: [],
    providers: [MessageResolver],
})
export class MessageModule {}