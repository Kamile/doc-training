import { CHANGE_LOCALE } from "./language.constants"

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  }
}
