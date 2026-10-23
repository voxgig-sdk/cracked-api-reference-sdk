import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminGeneratedVideo, AdminGeneratedVideoListMatch } from '../CrackedApiReferenceTypes';
declare class AdminGeneratedVideoEntity extends CrackedApiReferenceEntityBase<AdminGeneratedVideo> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminGeneratedVideoEntity): AdminGeneratedVideoEntity;
    list(this: any, reqmatch?: AdminGeneratedVideoListMatch, ctrl?: Control): Promise<AdminGeneratedVideoEntity[]>;
}
export { AdminGeneratedVideoEntity };
