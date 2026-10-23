import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Stripe, StripeCreateData } from '../CrackedApiReferenceTypes';
declare class StripeEntity extends CrackedApiReferenceEntityBase<Stripe> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: StripeEntity): StripeEntity;
    create(this: any, reqdata?: StripeCreateData, ctrl?: Control): Promise<StripeEntity>;
}
export { StripeEntity };
