import { RBlitzProject, RBlitzOptions, RBlitzVM } from '../util.types';
declare const reactBlitzElement: (element: HTMLElement, options: Partial<RBlitzOptions> | undefined, project: Partial<RBlitzProject> | undefined, getStackBlitzInstance: (vmInstance: RBlitzVM) => void) => Promise<void>;
export default reactBlitzElement;
