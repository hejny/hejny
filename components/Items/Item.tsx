import { ReactNode } from 'react';
import styles from './Item.module.css';

export function Item({ children }: { children: Iterable<ReactNode> }) {
    return <div className={styles.item}>{children}</div>;
}

Item.Title = function ItemTitle({ children }: { children: ReactNode }) {
    return (
        <div className={styles.title}>
            <span className={styles.inner}>{children}</span>
        </div>
    );
};

Item.Description = function ItemDescription({ children }: { children: ReactNode }) {
    return <div className={styles.description}>{children}</div>;
};

Item.Image = function ItemImage({ children }: { children: ReactNode }) {
    return (
        <>
            <div className={styles.imageContainer}>{children}</div>
            <div className={styles.overlay} />
        </>
    );
};

/**
 * TODO: Maybe mask image with text
 * TODO: Children of Item should be only and exacly Item.Title, Item.Description and Item.Image and theese components should be used only inside of <Item/> and <Item> used only inside of <Items> - How to implement and type this?
 */
