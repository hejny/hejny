import cave_of_ideas_with_transparent_look_through from '../../../public/wallpapers/Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b.png';

interface HeadSectionProps {
    subtitle?: string;
}

export function HeadSection(props: HeadSectionProps) {
    const { subtitle } = props;

    return (
        <>
            <title>🧙‍♂️ {subtitle ? `` : `${subtitle} | `}From 0 to 1</title>
            <meta
                name="description"
                content="With the ever-evolving landscape of technology, it can be challenging to keep up to date and use it to its potential in your business. However, by incorporating cutting-edge tools such as advanced browser APIs, >Web Assembly, using TypeScript, and benefiting from GPT when writing code, you can code, you can differentiate your business and achieve new levels of efficiency, innovation and customer engagement. 🚀"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

            <meta property="og:title" content={`From 0 to 1`} />
            <meta property="og:image" content={cave_of_ideas_with_transparent_look_through.src} />

            <meta name="theme-color" content="#000000" />
        </>
    );
}

/**
 * TODO: !!! Warning: A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup 
and comments as text in the title and hydration will likely fail and fall back to client rendering
 * TODO: Create better summary
 * TODO: Maybe import from some JSON
 * TODO: What is ideal viewport value
 */
