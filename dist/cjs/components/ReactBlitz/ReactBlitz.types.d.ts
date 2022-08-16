import { RBlitzOptions, RBlitzProject, RBlitzVM } from '../../util.types';
export interface ReactBlitzProps {
    options?: RBlitzOptions;
    getStackBlitzInstance?: (vmInstance: RBlitzVM) => void;
    project: Partial<RBlitzProject>;
}
