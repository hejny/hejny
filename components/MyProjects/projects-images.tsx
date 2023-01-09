/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 */

import placeholder from '../../public/projects/placeholder.png';
import towns from '../../public/projects/towns.jpg';

/**
 * Image of Towns projects
 */
export function ProjectTowns() {
    return (
        <div
            style={{
                backgroundImage: `url(${towns.src})` /* <- TODO: url(...) vs url('...') */,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#ccc' /* <- TODO: Create from image / project color */,
                aspectRatio: '3/2',
            }}
        />
    );
}

/**
 * Image of Towns projects
 */
export function ProjectPlaceholder() {
    return (
        <div
            style={{
                backgroundImage: `url(${placeholder.src})` /* <- TODO: url(...) vs url('...') */,
                backgroundSize: '120%',
                backgroundPosition: 'center',
                backgroundColor: '#ccc' /* <- TODO: Create from image / project color */,
                aspectRatio: '3/2',
            }}
        />
    );
}
