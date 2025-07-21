import { Person, PersonResponse, PersonData } from '../types/Person';

export type SupportedLanguage = 'mr' | 'en';

export class TranslationService {
  /**
   * Convert multilingual Person data to single-language PersonResponse
   */
  static translatePerson(person: Person, language: SupportedLanguage = 'mr'): PersonResponse {
    return {
      id: person.id,
      name: this.translateField(person.name, language),
      x: person.x,
      y: person.y,
      parents: person.parents,
      children: person.children,
      dateOfBirth: this.translateField(person.dateOfBirth, language),
      dateOfDeath: this.translateField(person.dateOfDeath, language),
      mobileNumber: this.translateField(person.mobileNumber, language),
      address: this.translateField(person.address, language),
      image: person.image
    };
  }

  /**
   * Helper method to translate a field that can be string or PersonData
   */
  private static translateField(field: string | PersonData | undefined, language: SupportedLanguage): string {
    if (!field) return '';
    
    // If it's already a string, return as is
    if (typeof field === 'string') {
      return field;
    }
    
    // If it's PersonData, extract the requested language with fallback
    return field[language] || field.en || '';
  }

  /**
   * Convert array of multilingual Person data to single-language PersonResponse array
   */
  static translatePersonArray(persons: Person[], language: SupportedLanguage = 'mr'): PersonResponse[] {
    return persons.map(person => this.translatePerson(person, language));
  }

  /**
   * Validate if language is supported
   */
  static isSupportedLanguage(language: string): language is SupportedLanguage {
    return language === 'mr' || language === 'en';
  }

  /**
   * Get default language
   */
  static getDefaultLanguage(): SupportedLanguage {
    return 'mr'; // Marathi as default
  }

  /**
   * Extract language from request headers or query params
   */
  static extractLanguageFromRequest(req: any): SupportedLanguage {
    // Check query parameter first
    const queryLang = req.query?.lang;
    if (queryLang && this.isSupportedLanguage(queryLang)) {
      return queryLang;
    }

    // Check Accept-Language header
    const acceptLanguage = req.headers['accept-language'];
    if (acceptLanguage) {
      if (acceptLanguage.includes('mr')) return 'mr';
      if (acceptLanguage.includes('en')) return 'en';
    }

    // Default to Marathi
    return this.getDefaultLanguage();
  }
}
