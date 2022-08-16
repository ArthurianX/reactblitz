import sdk from '@stackblitz/sdk';
import { RBlitzOptions, RBlitzProject, RBlitzVM } from '../util.types';
import {
    DefaultDevToolsHeight,
    DefaultRBlitzHeight,
    DefaultRBlitzVerticalPadding,
    DefaultRBlitzWidth,
    DefaultTerminalHeight,
} from '../constants';

// NOTE: We're using @stackblitz/sdk to render the StackBlitz iframe
const reactBlitzBridge = async (
    element: HTMLElement,
    project?: Partial<RBlitzProject>,
    options?: Partial<RBlitzOptions>,
): Promise<RBlitzVM | undefined> => {
    const defaults = {
        options: {
            clickToLoad: false,
            openFile: 'index.js',
            terminalHeight: DefaultTerminalHeight,
            showSidebar: false,
            devToolsHeight: DefaultDevToolsHeight,
            hideExplorer: true,
            height: DefaultRBlitzHeight - DefaultRBlitzVerticalPadding,
            width: DefaultRBlitzWidth,
            accentBorder: false,
            accentColor: '#6bedb5',
        },
        project: {
            title: 'Node Starter',
            description: 'A basic Node.js project',
            template: 'typescript',
            files: {
                'index.html': '<div id="app"></div>',
                'style.css': `h1, h2 {font-family: Lato;}`,
                'index.ts': `
    function* generator(limit) {
      for (let i = 0; i < limit; i++) {
        yield i
      }
    }

    for (let i of generator(10)) {
      console.log(i)
    }
`,
                'package.json': `{
  "name": "typescript",
  "version": "0.0.0",
  "private": true,
  "dependencies": {}
}`,
            },
        },
    };
    // TODO: Do we need this try catch ?
    try {
        return await sdk.embedProject(
            element,
            { ...defaults.project, ...project } as RBlitzProject,
            { ...defaults.options, ...options } as RBlitzOptions,
        );
    } catch (e) {}
};

export default reactBlitzBridge;
