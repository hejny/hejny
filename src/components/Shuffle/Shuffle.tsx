import { createContext, ReactNode, useContext } from 'react';
import seedrandom from 'seedrandom';

/**
 * This will be a seed prefix for the random number generator used in the shuffling
 */
export const ShuffleSeedContext = createContext<string | number>('');

interface ShuffleProps {
    /**
     * This will be a seed suffix for the random number generator used in the shuffling
     */
    seed?: string | number;
    children: Array<ReactNode>;
}

export function Shuffle(props: ShuffleProps) {
    const { children, seed } = props;

    const random = seedrandom(useContext(ShuffleSeedContext).toString() + (seed?.toString() || ''));

    const shuffledChildren = [...children].sort(() => (random() > 0.5 ? 1 : -1));

    return <>{shuffledChildren}</>;
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
 */
