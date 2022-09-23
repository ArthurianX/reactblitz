import React from 'react';
import { RBlitzProject, RBlitzOptions, RBlitzVM } from '../util.types';
import { createPortal } from 'react-dom';
import ReactBlitz from '../components/ReactBlitz/ReactBlitz';

const ReactBlitzToElement = (props: {
    element: HTMLElement;
    options: Partial<RBlitzOptions> | undefined;
    project: Partial<RBlitzProject> | undefined;
    getStackBlitzInstance: (vmInstance: RBlitzVM) => void;
}) => {
    const { element, options, project, getStackBlitzInstance } = props;

    console.log('Render to element', element);
    return createPortal(
        <ReactBlitz
            options={options!}
            project={project!}
            getStackBlitzInstance={getStackBlitzInstance}
        />,
        element,
    );
};

export default ReactBlitzToElement;
