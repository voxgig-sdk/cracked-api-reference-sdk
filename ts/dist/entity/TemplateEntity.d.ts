import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Template, TemplateLoadMatch } from '../CrackedApiReferenceTypes';
declare class TemplateEntity extends CrackedApiReferenceEntityBase<Template> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: TemplateEntity): TemplateEntity;
    load(this: any, reqmatch?: TemplateLoadMatch, ctrl?: Control): Promise<TemplateEntity>;
}
export { TemplateEntity };
