import { ReactNode } from 'react';
import { classNames } from '../../utils/classNames';
import styles from './Items.module.css';

/**
 * Renders a div container for the child components
 *
 * @param {ItemsProps} props - The props for the Items component.
 * @returns {JSX.Element} The Items component.
 */
interface ItemsProps {
    itemsOnRow?: 2 | 3;

    /**
     * The items to render
     *
     * Note: Use the <Item/> component to render the items
     */
    children: ReactNode;

    /**
     * Optional CSS class name which will be added to root element
     */
    readonly className?: string;
}

/**
 * Renders a div container for N items
 */
export function Items(props: ItemsProps) {
    const { itemsOnRow = 3, children, className } = props;
    return (
        <div className={classNames(styles.items, styles[`row-with-${itemsOnRow}-items`], className)}>{children}</div>
    );
}

/**
 * TODO: ItemsProps should contain preferedItemWidth: number
 */
