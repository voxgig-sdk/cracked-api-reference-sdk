import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CreateProduct, CreateProductCreateData } from '../CrackedApiReferenceTypes';
declare class CreateProductEntity extends CrackedApiReferenceEntityBase<CreateProduct> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CreateProductEntity): CreateProductEntity;
    create(this: any, reqdata?: CreateProductCreateData, ctrl?: Control): Promise<CreateProductEntity>;
}
export { CreateProductEntity };
