import caveOfIdeasImage from '../../public/wallpapers/Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b.png';

export function Cave() {
    return (
        <div
            style={{
                width: `100%`,
                height: `80vh`,

                display: 'grid',
                gridTemplateRows: `0 80% 15% 0`,
                gridTemplateColumns: `2fr 80% 1fr`,
                alignItems: 'stretch',
                justifyItems: 'stretch',
            }}
        >
            <div
                style={{
                    zIndex: 1,
                    gridRow: `2 / span 2`,
                    gridColumn: `2 / span 1`,

                    display: 'grid',
                    gridTemplateRows: `1fr`,
                    gridTemplateColumns: `1fr`,
                    alignItems: 'stretch',
                    justifyItems: 'stretch',
                }}
            >
                <div
                    style={{
                        zIndex: 1,
                        gridRow: `1 / span 1`,
                        gridColumn: `1 / span 1`,
                        backgroundImage: `url('${caveOfIdeasImage.src}')`,
                        backgroundSize: `90% auto`,
                        backgroundPosition: `46% 50%`,
                        backgroundRepeat: `no-repeat`,
                    }}
                ></div>

                <div
                    style={{
                        zIndex: 2,
                        gridRow: `1 / span 1`,
                        gridColumn: `1 / span 1`,
                        // !!! spaceTrim
                        background: `radial-gradient(closest-side, transparent,rgba(0,0,20,0.02), rgba(0,0,20,1) )`,
                        // background: `radial-gradient(closest-side, transparent,rgba(255,255,255,0.2), white)`,
                    }}
                ></div>
            </div>

            <div
                style={{
                    zIndex: 2,
                    // outline: '1px dotted red',

                    gridRow: `3 / span 1`,
                    gridColumn: `1 / span 4`,
                    textAlign: 'center',
                    color: 'white',
                    textShadow: `#ff5500 0px 0px 10px`,
                }}
            >
                <h1
                    style={{
                        fontFamily: '"PassionsConflict", Helvetica Neue',
                        fontSize: '50px',

                        // TODO: DRY
                        margin: 0,
                        padding: 0,
                        marginBlockStart: 0,
                        marginBlockEnd: 0,
                        marginInlineStart: 0,
                        marginInlineEnd: 0,
                    }}
                >
                    Wizard
                </h1>
                <p style={{ width: 'calc(50% + 1vw)', margin: 'auto' }}>
                    AI, Neural networks, VR/AR, WebGL, WebVR, Webassembly, WebSockets. Bitcoin, Ethereum, Cardano,
                    Crypto, Smart contracts, Web3, ...
                </p>
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
