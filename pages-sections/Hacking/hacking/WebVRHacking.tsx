import { Item } from '../../../components/Items/Item';
import { ProjectPlaceholder } from '../../MyProjects/projects-images';
import hacking from './hacking.md';

export function WebVRHacking() {
    return (
        <Item>
            <Item.Title>Web VR</Item.Title>
            <Item.Description>DevConf, CzechVRFest, Hackuj Stát</Item.Description>
            <Item.Image>
                <ProjectPlaceholder />
            </Item.Image>
        </Item>
    );
}
