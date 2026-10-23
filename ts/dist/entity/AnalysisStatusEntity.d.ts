import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AnalysisStatus, AnalysisStatusLoadMatch } from '../CrackedApiReferenceTypes';
declare class AnalysisStatusEntity extends CrackedApiReferenceEntityBase<AnalysisStatus> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AnalysisStatusEntity): AnalysisStatusEntity;
    load(this: any, reqmatch?: AnalysisStatusLoadMatch, ctrl?: Control): Promise<AnalysisStatusEntity>;
}
export { AnalysisStatusEntity };
