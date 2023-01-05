import { Service } from './Service';
import styles from './Services.module.css';

export function Services() {
    return (
        <div className={styles.services}>
            <Service title="Hello1" />
            <Service title="Hello2" />
            <Service title="Hello3" />
        </div>
    );
}
