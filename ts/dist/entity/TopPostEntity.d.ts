import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { TopPost, TopPostListMatch } from '../CrackedApiReferenceTypes';
declare class TopPostEntity extends CrackedApiReferenceEntityBase<TopPost> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: TopPostEntity): TopPostEntity;
    list(this: any, reqmatch?: TopPostListMatch, ctrl?: Control): Promise<TopPostEntity[]>;
}
export { TopPostEntity };
