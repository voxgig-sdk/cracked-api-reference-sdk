import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { FailedPost, FailedPostListMatch } from '../CrackedApiReferenceTypes';
declare class FailedPostEntity extends CrackedApiReferenceEntityBase<FailedPost> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: FailedPostEntity): FailedPostEntity;
    list(this: any, reqmatch?: FailedPostListMatch, ctrl?: Control): Promise<FailedPostEntity[]>;
}
export { FailedPostEntity };
