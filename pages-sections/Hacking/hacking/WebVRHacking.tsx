import { Item } from '../../../components/Items/Item';
import { ProjectPlaceholder } from '../../MyProjects/projects-images';

// TODO: !!! Use or remove this file
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
