import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { RecordDemoBooked, RecordDemoBookedCreateData } from '../CrackedApiReferenceTypes';
declare class RecordDemoBookedEntity extends CrackedApiReferenceEntityBase<RecordDemoBooked> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: RecordDemoBookedEntity): RecordDemoBookedEntity;
    create(this: any, reqdata?: RecordDemoBookedCreateData, ctrl?: Control): Promise<RecordDemoBookedEntity>;
}
export { RecordDemoBookedEntity };
