import React from 'react';
import { RBlitzProject, RBlitzOptions, RBlitzVM } from '../util.types';
declare const ReactBlitzToElement: (props: {
    element: HTMLElement;
    options: Partial<RBlitzOptions> | undefined;
    project: Partial<RBlitzProject> | undefined;
    getStackBlitzInstance: (vmInstance: RBlitzVM) => void;
}) => React.ReactPortal;
export default ReactBlitzToElement;
