/// <reference types="react" />
import { Project, EmbedOptions } from '@stackblitz/sdk/typings/interfaces';
import { VM } from '@stackblitz/sdk/typings/vm';

interface RBlitzProject extends Project {
}
interface RBlitzOptions extends EmbedOptions {
    renderWhenVisible?: boolean;
    accentBorder?: boolean;
    accentColor?: string;
}
interface RBlitzVM extends VM {
}

interface ReactBlitzProps {
    options?: RBlitzOptions;
    getStackBlitzInstance?: (vmInstance: RBlitzVM) => void;
    project: Partial<RBlitzProject>;
}

declare const ReactBlitz: ({ options, project, getStackBlitzInstance, }: ReactBlitzProps) => JSX.Element;

export { ReactBlitz };
