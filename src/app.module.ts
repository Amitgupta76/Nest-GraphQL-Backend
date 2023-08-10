import { ApolloDriver } from '@nestjs/apollo'; import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
    driver: ApolloDriver,
    playground: true,
    autoSchemaFile : join(process.cwd() , "src/schema.graphql"),
    definitions : {
      path : join(process.cwd() , "src/graphql.ts"),
    }
    }),
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}