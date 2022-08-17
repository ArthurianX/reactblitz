import { RBlitzOptions, RBlitzProject, RBlitzVM } from '../../util.types';
export interface ReactBlitzProps {
    /**
     * Options payload, extends Stackblitz types with
     */
    options?: RBlitzOptions;
    /**
     * Project payload, the actual code that will be loaded in the Stackblitz
     */
    project: Partial<RBlitzProject>;
    /**
     * Returns the Stackblitz VM instance for extra control
     */
    getStackBlitzInstance?: (vmInstance: RBlitzVM) => void;
}
