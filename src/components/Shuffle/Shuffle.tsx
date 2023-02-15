import { ReactNode } from 'react';

interface ShuffleProps {
    children: Array<ReactNode>;
}

export function Shuffle(props: ShuffleProps) {
    const { children } = props;

    const shuffledChildren = [...children]; // useMemo(() => [...children].sort(() => Math.random() - 0.5), [children]);

    return shuffledChildren;
}

/**
 * TODO: Maybe some smarter syntax:
 *       Instead of:
 *       > <Items>
 *       >     <Shuffle>
 *       >         <FunctionsProject />
 *       >         <LibrariesProject />
 *       >         <MapsProject />
 *       >         <ModulesProject />
 *       >         <VrArProject />
 *       >     </Shuffle>
 *       >     <AllMyProjectsProject />
 *       > </Items>
 *       Do:
 *       > <Items>
 *       >     <Shuffle keep="LAST">
 *       >         <FunctionsProject />
 *       >         <LibrariesProject />
 *       >         <MapsProject />
 *       >         <ModulesProject />
 *       >         <VrArProject />
 *       >         <AllMyProjectsProject />
 *       >     </Shuffle>
 *       > </Items>
 *       Or with the hook:
 *       > <Items ref={shuffleRef('KEEP_LAST')}>
 *       >     <FunctionsProject />
 *       >     <LibrariesProject />
 *       >     <MapsProject />
 *       >     <ModulesProject />
 *       >     <VrArProject />
 *       >     <AllMyProjectsProject />
 *       > </Items>
 * TODO: !!! How to do this without Next Errors
 * TODO: Deterministic random on some good seed
 */
