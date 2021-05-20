import { createLanguageService, LanguageService } from '@bigcommerce/checkout-sdk';
import { memoize } from '@bigcommerce/memoize';

import { DEFAULT_TRANSLATIONS } from './translations';

function getLanguageService(): LanguageService {
    return createLanguageService({
        ...(window as any).language,
        defaultTranslations: DEFAULT_TRANSLATIONS,
    });
}

export default memoize(getLanguageService);
