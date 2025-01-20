import englishFlag from '@/assets/images/flags/english.jpg';
import vietnameseFlag from '@/assets/images/flags/vietnamese.jpg';
import { Language } from '@/types/common-types';

export const languages: Record<string, Language> = {
    en: {
        imageUrl: englishFlag,
        title: 'English',
    },
    vi: {
        imageUrl: vietnameseFlag,
        title: 'Vietnamese',
    },
};
