import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ChatHistory, ChatHistoryLoadMatch, ChatHistoryCreateData } from '../CrackedApiReferenceTypes';
declare class ChatHistoryEntity extends CrackedApiReferenceEntityBase<ChatHistory> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ChatHistoryEntity): ChatHistoryEntity;
    load(this: any, reqmatch?: ChatHistoryLoadMatch, ctrl?: Control): Promise<ChatHistoryEntity>;
    create(this: any, reqdata?: ChatHistoryCreateData, ctrl?: Control): Promise<ChatHistoryEntity>;
}
export { ChatHistoryEntity };
