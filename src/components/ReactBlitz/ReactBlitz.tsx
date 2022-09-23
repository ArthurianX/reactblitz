import React, { useEffect } from 'react';
import { ReactBlitzProps } from './ReactBlitz.types';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import {
    DefaultAccentColor,
    DefaultLoadingColior,
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
    z-index: 1;
    background-color: ${(props) =>
        props?.options?.accentColor
            ? props?.options?.accentColor
            : DefaultAccentColor};
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
              : darken(0.2, DefaultAccentColor)};
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
    const stackBlitzContainer = useRef<HTMLDivElement>(null);
    const loadingContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const rbObserver = new IntersectionObserver((rbContainer) => {
            if (rbContainer[0].intersectionRatio <= 0) return;

            reactBlitzBridge(
                stackBlitzContainer.current!,
                project,
                options,
            ).then((vmInstance) => {
                if (typeof getStackBlitzInstance === 'function') {
                    getStackBlitzInstance(vmInstance!);
                }

                loadingContainer.current?.remove();
            });

            return () => {
                rbObserver.unobserve(rbContainer);
            };
        });

        rbObserver.observe(stackBlitzContainer.current);
    }, [stackBlitzContainer.current !== null]);

    return (
        <StyledContainer options={options} project={project}>
            <div ref={stackBlitzContainer}></div>
            <div
                ref={loadingContainer}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    backgroundColor: options?.accentColor
                        ? options?.accentColor
                        : DefaultAccentColor,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg
                    version="1.1"
                    id="L3"
                    x="0px"
                    y="0px"
                    style={{
                        width: DefaultRBlitzHeight / 2 + 'px',
                        height: DefaultRBlitzHeight / 2 + 'px',
                    }}
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 0 0"
                >
                    <circle
                        fill="none"
                        stroke="#fff"
                        stroke-width="4"
                        cx="50"
                        cy="50"
                        r="44"
                        style={{ opacity: '0.5' }}
                    />
                    <circle
                        fill="#fff"
                        stroke={
                            options?.loadingColor
                                ? options.loadingColor
                                : DefaultLoadingColior
                        }
                        stroke-width="3"
                        cx="8"
                        cy="54"
                        r="6"
                    >
                        <animateTransform
                            attributeName="transform"
                            dur="2s"
                            type="rotate"
                            from="0 50 48"
                            to="360 50 52"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            </div>
        </StyledContainer>
    );
};

export default ReactBlitz;
