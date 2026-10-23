import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SaveSurvey, SaveSurveyCreateData } from '../CrackedApiReferenceTypes';
declare class SaveSurveyEntity extends CrackedApiReferenceEntityBase<SaveSurvey> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SaveSurveyEntity): SaveSurveyEntity;
    create(this: any, reqdata?: SaveSurveyCreateData, ctrl?: Control): Promise<SaveSurveyEntity>;
}
export { SaveSurveyEntity };
