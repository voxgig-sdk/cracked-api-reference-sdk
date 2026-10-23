import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ChatSession, ChatSessionCreateData } from '../CrackedApiReferenceTypes';
declare class ChatSessionEntity extends CrackedApiReferenceEntityBase<ChatSession> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ChatSessionEntity): ChatSessionEntity;
    create(this: any, reqdata?: ChatSessionCreateData, ctrl?: Control): Promise<ChatSessionEntity>;
}
export { ChatSessionEntity };
