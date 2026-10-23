import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CompleteChatCheckout, CompleteChatCheckoutCreateData } from '../CrackedApiReferenceTypes';
declare class CompleteChatCheckoutEntity extends CrackedApiReferenceEntityBase<CompleteChatCheckout> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CompleteChatCheckoutEntity): CompleteChatCheckoutEntity;
    create(this: any, reqdata?: CompleteChatCheckoutCreateData, ctrl?: Control): Promise<CompleteChatCheckoutEntity>;
}
export { CompleteChatCheckoutEntity };
