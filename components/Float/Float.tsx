import React from 'react';
import styled from 'styled-components';

export function Float({ children }: React.PropsWithChildren<{}>) {
    return (
        <FloatDiv className={`outer`}>
            <div className={`inner`}>{children}</div>
        </FloatDiv>
    );
}

const FloatDiv = styled.div`
    z-index: 100000;
    position: absolute;

    .inner {
        z-index: 100000;
        position: relative;
    }
`;

// !!! Float to above
// !!! Rename to <Above
