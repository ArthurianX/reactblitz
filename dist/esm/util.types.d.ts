import { EmbedOptions, Project } from '@stackblitz/sdk/typings/interfaces';
import { VM } from '@stackblitz/sdk/typings/vm';
export interface RBlitzProject extends Project {
}
export interface RBlitzOptions extends EmbedOptions {
    renderWhenVisible?: boolean;
    accentBorder?: boolean;
    accentColor?: string;
}
export interface RBlitzVM extends VM {
}
