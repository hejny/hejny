import Image from 'next/image';
import caveOfIdeasImage from '../../public/wallpapers/Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b.png';

// !!! Wallpapers image library

export function Cave() {
    return (
        /*
        TODO: !!! Use or loose
        <div
            style={{
                width: `100%`,
                height: `100%`,

                display: 'grid',
                gridTemplateRows: `0 80% 15% 0`,
                gridTemplateColumns: `2fr 80% 1fr`,
                alignItems: 'stretch',
                justifyItems: 'stretch',
            }}
        > </div>*/
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `1fr`,
                gridTemplateRows: `1fr`,

                transform: `translateX(3.3%)` /* <- Note: This centeres man in the image of the cave */,

                alignItems: 'stretch',
                justifyItems: 'stretch',
            }}
        >
            {/*
            TODO: !!! Use or loose
            <div
                style={{
                    zIndex: 1,
                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 1`,
                    backgroundImage: `url('${caveOfIdeasImage.src}')`,
                    backgroundSize: `contain`,
                    backgroundPosition: `46% 50%`,
                    backgroundRepeat: `no-repeat`,
                }}
            ></div>
            */}

            <div
                style={{
                    zIndex: 1,
                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 1`,
                }}
            >
                <Image alt="!!!" src={caveOfIdeasImage} style={{ width: '100%', height: 'auto' }} />
            </div>

            {/* 
            TODO: !!! Above the image NOT before
            <div
                style={{
                    zIndex: 2,

                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 1`,
                    // !!! spaceTrim
                    background: `radial-gradient(closest-side, transparent,rgba(0,0,20,0.02), rgba(0,0,20,1) )`,

                    // background: `radial-gradient(closest-side, transparent,rgba(255,255,255,0.2), white)`,
                }}
            >
                aaaaas
                <br />
                aaaaas
                <br />
                aaaaas
                <br />
                aaaaas
                <br />
                aaaaas
                <br />
            </div>
            */}
        </div>
    );
}

/* 

TODO: !!! Uninstall styled-components
const CaveStyle = styled.div`
    color: #000000;
`;

*/
