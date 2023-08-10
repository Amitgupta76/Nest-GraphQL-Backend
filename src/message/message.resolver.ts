import { Query, Resolver } from '@nestjs/graphql'
import { Message } from './message.schema';
import { Message as MessageModel} from '../graphql'

@Resolver(of => Message)
export class MessageResolver{
    @Query(returns => [Message], { name: "messages" })
    getAllMessages() {
        let arr : MessageModel[] = [
            { id: 1, conversation: 'I love my India'},
            { id: 2, conversation: 'Hello there!'},
            { id: 3, conversation: 'Hi!'},
            { id: 4, conversation: 'How are you?'},
            { id: 5, conversation: "I'm fine"},
            { id: 6, conversation: 'What is your Name?'},
            { id: 7, conversation: 'Help me!'},
            { id: 8, conversation: 'How was your day?'},
            { id: 9, conversation: 'It was good.'},
            { id: 10, conversation: 'Happy Birthday!'},
        ];
        return arr;
    }
}