import React from 'react';
import { Story, Meta } from '@storybook/react';

import ReactBlitz from './ReactBlitz';
import { ReactBlitzProps } from './ReactBlitz.types';

export default {
    title: 'ReactBlitz',
    component: ReactBlitz,
    argTypes: {},
} as Meta<typeof ReactBlitz>;

const Template: Story<ReactBlitzProps> = (args) => <ReactBlitz {...args} />;

const OutOfViewportTemplate: Story<any> = (args) => (
    <div style={{ height: '460px', overflow: 'scroll' }}>
        <div
            style={{
                height: '1500px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'end',
                justifyContent: 'end',
            }}
        >
            <p
                style={{
                    position: 'absolute',
                    top: 0,
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                Scroll Down ...
            </p>
            <ReactBlitz {...args} />
        </div>
    </div>
);

export const Default = Template.bind({});

export const AccentBorder = Template.bind({});
AccentBorder.args = {
    options: {
        accentBorder: true,
    },
};

export const AccentColor = Template.bind({});
AccentColor.args = {
    options: {
        accentBorder: true,
        accentColor: '#FA4242',
    },
};

export const LightTheme = Template.bind({});
LightTheme.args = {
    options: {
        theme: 'light',
        accentBorder: true,
        accentColor: '#49d5f5',
    },
};

export const GetStackblitzInstance = Template.bind({});
GetStackblitzInstance.args = {
    getStackBlitzInstance: (instance) => {
        console.log('StackBlitz instance is ', instance);
    },
};

export const RenderWhenInViewport = OutOfViewportTemplate.bind({});
RenderWhenInViewport.args = {
    options: {
        theme: 'light',
        accentBorder: true,
        accentColor: '#49d5f5',
    },
};
