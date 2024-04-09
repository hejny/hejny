import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Article } from '../../components/Article/Article';

type AiTrainingVariantProps = {
    variant: `variant${1 | 2}`;
};

export function AiTrainingVariant(props: AiTrainingVariantProps) {
    const { variant } = props;
    const { t } = useTranslation();

    return (
        <div>
            <div>
                <h3>{t(`AiTraining.${variant}.title`)}</h3>
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
