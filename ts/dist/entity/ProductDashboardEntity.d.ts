import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ProductDashboard, ProductDashboardListMatch } from '../CrackedApiReferenceTypes';
declare class ProductDashboardEntity extends CrackedApiReferenceEntityBase<ProductDashboard> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ProductDashboardEntity): ProductDashboardEntity;
    list(this: any, reqmatch?: ProductDashboardListMatch, ctrl?: Control): Promise<ProductDashboardEntity[]>;
}
export { ProductDashboardEntity };
