import styled from 'styled-components';
import { classNames } from '../../utils/classNames';

interface IDisplayOnProps {
    desktop?: true;
    tablet?: true;
    mobile?: true;
    children: JSX.Element;
}

/**
 * Choose on which devices (according to display size) to show certain component
 *
 * @collboard-modules-sdk
 */
export function DisplayOn({ desktop, tablet, mobile, children }: IDisplayOnProps) {
    return (
        <DisplayOnStyle className={classNames(...[desktop && 'desktop', tablet && 'tablet', mobile && 'mobile'])}>
            {children}
        </DisplayOnStyle>
    );
}

const DisplayOnStyle = styled.div`
    display: none;

    @media screen and (min-width: 851px) {
        &.desktop {
            display: initial;
        }
    }

    @media screen and (max-width: 850px) and (min-width: 576px) {
        &.tablet {
            display: initial;
        }
    }

    @media screen and (max-width: 575px) {
        &.mobile {
            display: initial;
        }
    }

    @media print and speech {
        display: initial;
    }
`;

/**
 * Note: This component was tranfered from Collboard using the styled-components - Is it a bad pattern to use both css modules and styled components at once?
 */
