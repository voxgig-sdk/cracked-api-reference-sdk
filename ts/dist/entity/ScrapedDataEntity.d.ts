import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ScrapedData, ScrapedDataCreateData } from '../CrackedApiReferenceTypes';
declare class ScrapedDataEntity extends CrackedApiReferenceEntityBase<ScrapedData> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ScrapedDataEntity): ScrapedDataEntity;
    create(this: any, reqdata?: ScrapedDataCreateData, ctrl?: Control): Promise<ScrapedDataEntity>;
}
export { ScrapedDataEntity };
