import { ReactNode } from 'react';

interface ShuffleProps {
    children: Array<ReactNode>;
}

export function Shuffle(props: ShuffleProps) {
    const { children } = props;

    // const shuffledChildren = [...children];
    // shuffledChildren.sort(() => Math.random() - 0.5);
    // return <>{shuffledChildren}</>

    return <>{children}</>;
}

/**
 * TODO: How to do this without Next Errors
 * TODO: Deterministic random on some good seed
 */
