import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Chat, ChatCreateData } from '../CrackedApiReferenceTypes';
declare class ChatEntity extends CrackedApiReferenceEntityBase<Chat> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ChatEntity): ChatEntity;
    create(this: any, reqdata?: ChatCreateData, ctrl?: Control): Promise<ChatEntity>;
}
export { ChatEntity };
