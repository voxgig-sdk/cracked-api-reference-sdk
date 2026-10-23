import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminPost, AdminPostListMatch } from '../CrackedApiReferenceTypes';
declare class AdminPostEntity extends CrackedApiReferenceEntityBase<AdminPost> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminPostEntity): AdminPostEntity;
    list(this: any, reqmatch?: AdminPostListMatch, ctrl?: Control): Promise<AdminPostEntity[]>;
}
export { AdminPostEntity };
