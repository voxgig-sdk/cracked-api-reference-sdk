import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CreateVariation, CreateVariationCreateData } from '../CrackedApiReferenceTypes';
declare class CreateVariationEntity extends CrackedApiReferenceEntityBase<CreateVariation> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CreateVariationEntity): CreateVariationEntity;
    create(this: any, reqdata?: CreateVariationCreateData, ctrl?: Control): Promise<CreateVariationEntity>;
}
export { CreateVariationEntity };
