import React from 'react';
import { RBlitzProject, RBlitzOptions, RBlitzVM } from '../util.types';
import { createPortal } from 'react-dom';
import ReactBlitz from '../components/ReactBlitz/ReactBlitz';

const reactBlitzElement = async (
    element: HTMLElement,
    options: Partial<RBlitzOptions> | undefined,
    project: Partial<RBlitzProject> | undefined,
    getStackBlitzInstance: (vmInstance: RBlitzVM) => void,
): Promise<void> => {
    createPortal(
        <ReactBlitz
            options={options!}
            project={project!}
            getStackBlitzInstance={getStackBlitzInstance}
        />,
        element,
    );
};

export default reactBlitzElement;
