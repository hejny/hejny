import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import styles from './BookingCalendar.module.css';

export function BookingCalendar() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: 'meet' });
            cal('ui', {
                theme: 'dark',
                styles: { branding: { brandColor: '#81500F' } },
                hideEventTypeDetails: false,
                layout: 'month_view',
            });
        })();
    }, []);

    return (
        <Cal
            namespace="meet"
            calLink="hejny/meet"
            className={styles.BookingCalendar}
            // style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            config={{ layout: 'month_view', theme: 'dark' }}
        />
    );
}
