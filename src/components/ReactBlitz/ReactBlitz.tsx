import React, { useEffect } from 'react';
import { ReactBlitzProps } from './ReactBlitz.types';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import {
    DefaultRBlitzHeight,
    DefaultRBlitzVerticalPadding,
    DefaultRBlitzWidth,
} from '../../constants';
import reactBlitzBridge from '../../services/reactBlitzBridge';
import { darken } from 'polished';

const StyledContainer = styled.div<Partial<ReactBlitzProps>>`
    border: 0;
    //line-height: 1;
    //font-size: 15px;
    //cursor: pointer;
    //font-weight: 700;
    //font-weight: bold;
    border-radius: 3px;
    overflow: hidden;
    display: inline-block;
    position: relative;
    background-color: ${(props) =>
        props?.options?.accentColor ? props?.options?.accentColor : '#6bedb5'};
    width: ${(props) => props?.options?.width || DefaultRBlitzWidth};
    height: ${(props) =>
        props?.options?.height || props?.options?.accentBorder
            ? DefaultRBlitzHeight + 'px'
            : DefaultRBlitzHeight - DefaultRBlitzVerticalPadding + 'px'};
    padding-top: ${(props) =>
        props?.options?.accentBorder
            ? DefaultRBlitzVerticalPadding + 'px'
            : '0px'};
    &:hover {
      background-color: ${(props) =>
          props?.options?.accentColor
              ? darken(0.2, props?.options?.accentColor)
              : darken(0.2, '#6bedb5')};
    }
    & iframe {
      margin: 0;
      padding: 0;,
      outline: none;
      border: 0px solid transparent;
    }
`;

const ReactBlitz = ({
    options,
    project,
    getStackBlitzInstance,
}: ReactBlitzProps): JSX.Element => {
    // TODO: renderWhenVisible doesn't do anything now.
    const [renderWhenVisible, setRenderWhenVisible] = useState<boolean>(
        options?.renderWhenVisible || false,
    );
    const stackBlitzContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        reactBlitzBridge(stackBlitzContainer.current!, project, options).then(
            (vmInstance) => {
                if (typeof getStackBlitzInstance === 'function') {
                    getStackBlitzInstance(vmInstance!);
                }
            },
        );
    }, [stackBlitzContainer.current !== null]);

    return (
        <StyledContainer options={options} project={project}>
            <div ref={stackBlitzContainer}></div>
        </StyledContainer>
    );
};

export default ReactBlitz;
