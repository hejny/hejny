import Image from 'next/image';
import caveOfIdeasImage from '../../../public/wallpapers/Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b.png';

export function Service({ title }: { title: string }) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `1fr`,
                gridTemplateRows: `5fr 1fr`,
                alignItems: 'stretch',
                justifyItems: 'stretch',
            }}
        >
            <div
                style={{
                    outline: '1px dotted red',
                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 2`,
                }}
            >
                <Image alt="!!!" src={caveOfIdeasImage} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div
                style={{
                    outline: '1px dotted red',
                    gridColumn: `1 / span 1`,
                    gridRow: `2 / span 1`,
                }}
            >
                {title}
            </div>
        </div>
    );
}
