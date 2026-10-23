import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { PublicResumeStatus, PublicResumeStatusLoadMatch } from '../CrackedApiReferenceTypes';
declare class PublicResumeStatusEntity extends CrackedApiReferenceEntityBase<PublicResumeStatus> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: PublicResumeStatusEntity): PublicResumeStatusEntity;
    load(this: any, reqmatch?: PublicResumeStatusLoadMatch, ctrl?: Control): Promise<PublicResumeStatusEntity>;
}
export { PublicResumeStatusEntity };
