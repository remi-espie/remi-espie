import * as en from './en.ts'
import * as fr from './fr.ts'

export type Locale = 'en' | 'fr'

export const dictionaries = {
    en: en.en_dict,
    fr: fr.fr_dict,
}
