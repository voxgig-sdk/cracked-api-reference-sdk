import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ProductDemo, ProductDemoListMatch } from '../CrackedApiReferenceTypes';
declare class ProductDemoEntity extends CrackedApiReferenceEntityBase<ProductDemo> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ProductDemoEntity): ProductDemoEntity;
    list(this: any, reqmatch?: ProductDemoListMatch, ctrl?: Control): Promise<ProductDemoEntity[]>;
}
export { ProductDemoEntity };
