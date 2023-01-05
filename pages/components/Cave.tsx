import Image from 'next/image';
import caveOfIdeasImage from '../../public/wallpapers/Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b.png';

export function Cave() {
    return (
        <div
            style={{
                /* 
        backgroundImage: `url('${caveOfIdeasImage.src}')`,
        backgroundSize: `90% auto`,
        backgroundPosition: `46% 50%`,
        backgroundRepeat: `no-repeat`,
        */

                width: `100vw`,
                height: `100vh`,

                //padding: '5vh',

                display: 'grid',
                gridTemplateRows: `repeat(5,1fr)`,
                gridTemplateColumns: `repeat(5,1fr)`,
                alignItems: 'stretch',
                justifyItems: 'stretch',
            }}
        >
            <div
                style={{
                    //outline: `1px dotted yellow`,
                    backgroundColor: 'green',
                    color: 'white',
                    gridRow: `1 / span 1`,
                    gridColumn: `1 / span 1`,
                }}
            >
                A
            </div>

            <div
                style={{
                    //outline: `1px dotted yellow`,
                    backgroundColor: 'rgba(255,0,0,0.3)',
                    color: 'white',
                    gridRow: `2 / span 1`,
                    gridColumn: `2 / span 1`,
                }}
            >
                {' '}
                A
            </div>

            <Image
                alt="!!!"
                src={caveOfIdeasImage}
                style={{
                    gridRow: `2 / span 2`,
                    gridColumn: `2 / span 3`,

                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            />

            <div
                style={{
                    //outline: `1px dotted yellow`,
                    color: 'white',
                    gridRow: `2 / span 2`,
                    gridColumn: `2 / span 3`,
                    // !!! spaceTrim
                    background: `radial-gradient(closest-side, transparent,rgba(0,0,0,0.2), black)`,
                    // background: `radial-gradient(closest-side, transparent,rgba(255,255,255,0.2), white)`,
                }}
            >
                {' '}
                A
            </div>
        </div>
    );
}

/* 

TODO: !!! Uninstall styled-components
const CaveStyle = styled.div`
    color: #000000;
`;

*/
