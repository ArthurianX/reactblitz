import { RBlitzOptions, RBlitzProject, RBlitzVM } from '../util.types';
declare const reactBlitzBridge: (element: HTMLElement, project?: Partial<RBlitzProject>, options?: Partial<RBlitzOptions>) => Promise<RBlitzVM | undefined>;
export default reactBlitzBridge;
