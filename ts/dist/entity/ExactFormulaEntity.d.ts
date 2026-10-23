import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ExactFormula, ExactFormulaLoadMatch } from '../CrackedApiReferenceTypes';
declare class ExactFormulaEntity extends CrackedApiReferenceEntityBase<ExactFormula> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ExactFormulaEntity): ExactFormulaEntity;
    load(this: any, reqmatch?: ExactFormulaLoadMatch, ctrl?: Control): Promise<ExactFormulaEntity>;
}
export { ExactFormulaEntity };
