import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ProductLanding, ProductLandingListMatch, ProductLandingUpdateData } from '../CrackedApiReferenceTypes';
declare class ProductLandingEntity extends CrackedApiReferenceEntityBase<ProductLanding> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ProductLandingEntity): ProductLandingEntity;
    list(this: any, reqmatch?: ProductLandingListMatch, ctrl?: Control): Promise<ProductLandingEntity[]>;
    update(this: any, reqdata?: ProductLandingUpdateData, ctrl?: Control): Promise<ProductLandingEntity>;
}
export { ProductLandingEntity };
