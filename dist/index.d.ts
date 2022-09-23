/// <reference types="react" />
import { Project, EmbedOptions } from '@stackblitz/sdk/typings/interfaces';
import { VM } from '@stackblitz/sdk/typings/vm';
import React from 'react';

interface RBlitzProject extends Project {
}
interface RBlitzOptions extends EmbedOptions {
    renderWhenVisible?: boolean;
    accentBorder?: boolean;
    accentColor?: string;
    loadingColor?: string;
}
interface RBlitzVM extends VM {
}

interface ReactBlitzProps {
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

declare const ReactBlitz: ({ options, project, getStackBlitzInstance, }: ReactBlitzProps) => JSX.Element;

declare const ReactBlitzToElement: (props: {
    element: HTMLElement;
    options: Partial<RBlitzOptions> | undefined;
    project: Partial<RBlitzProject> | undefined;
    getStackBlitzInstance: (vmInstance: RBlitzVM) => void;
}) => React.ReactPortal;

export { ReactBlitz, ReactBlitzToElement };
