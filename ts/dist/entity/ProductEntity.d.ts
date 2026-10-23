import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Product, ProductLoadMatch, ProductListMatch, ProductCreateData, ProductUpdateData, ProductRemoveMatch } from '../CrackedApiReferenceTypes';
declare class ProductEntity extends CrackedApiReferenceEntityBase<Product> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
    load(this: any, reqmatch?: ProductLoadMatch, ctrl?: Control): Promise<ProductEntity>;
    list(this: any, reqmatch?: ProductListMatch, ctrl?: Control): Promise<ProductEntity[]>;
    create(this: any, reqdata?: ProductCreateData, ctrl?: Control): Promise<ProductEntity>;
    update(this: any, reqdata?: ProductUpdateData, ctrl?: Control): Promise<ProductEntity>;
    remove(this: any, reqmatch?: ProductRemoveMatch, ctrl?: Control): Promise<ProductEntity>;
}
export { ProductEntity };
