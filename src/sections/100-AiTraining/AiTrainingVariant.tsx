import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Article } from '../../components/Article/Article';

type AiTrainingVariantProps = {
    variant: `variant${1 | 2}`;
};

export function AiTrainingVariant(props: AiTrainingVariantProps) {
    const { variant } = props;
    const { t } = useTranslation();

    const [row1, row2] = t(`AiTraining.${variant}.title`).split(': ', 2);

    return (
        <div>
            <div>
                <h3>
                    {row1}
                    <br />
                    {row2}
                </h3>
                <Link
                    className="button"
                    href="#contact"
                    // <- TODO: !!! Better
                >
                    {t(`AiTraining.${variant}.price`)}
                </Link>
                <Article content={t(`AiTraining.${variant}.content`)} isEnhanced />
            </div>
        </div>
        // <- Note: [✌] Two nested divs to use <Items/> together with nice outline
    );
}
