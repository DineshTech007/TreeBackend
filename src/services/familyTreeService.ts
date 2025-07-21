import { Person, PersonResponse, FamilyTreeResponse } from '../types/Person';
import { familyData } from '../data/familyData';
import { enhanceFamilyDataWithImages } from './imageService';
import { TranslationService, SupportedLanguage } from './translationService';

export class FamilyTreeService {
  /**
   * Get all family members with images and language support
   */
  public static getAllFamilyMembers(language: SupportedLanguage = 'mr'): FamilyTreeResponse {
    try {
      const enhancedData = enhanceFamilyDataWithImages(familyData);
      const translatedData = TranslationService.translatePersonArray(enhancedData, language);
      return {
        success: true,
        data: translatedData,
        message: 'Family tree data retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        data: [],
        message: 'Failed to retrieve family tree data'
      };
    }
  }

  /**
   * Get family member by ID
   */
  public static getFamilyMemberById(id: string): Person | null {
    return familyData.find(person => person.id === id) || null;
  }

  /**
   * Get family members by generation (based on y coordinate ranges)
   */
  public static getFamilyMembersByGeneration(generation: number): Person[] {
    const generationRanges: { [key: number]: { min: number; max: number } } = {
      1: { min: 0, max: 100 },     // Great-Great-Grandparents
      2: { min: 100, max: 250 }, // Great-Grandparents
      3: { min: 250, max: 380 }, // Grandparents
      4: { min: 380, max: 510 }, // Parents
      5: { min: 510, max: 640 }, // Current generation
      6: { min: 640, max: 770 }, // Children
      7: { min: 770, max: 900 }  // Grandchildren
    };

    const range = generationRanges[generation];
    if (!range) return [];

    return familyData.filter(person => 
      person.y >= range.min && person.y < range.max
    );
  }

  /**
   * Get children of a specific person
   */
  public static getChildren(parentId: string): Person[] {
    return familyData.filter(person => 
      person.parents && person.parents.includes(parentId)
    );
  }

  /**
   * Get parents of a specific person
   */
  public static getParents(personId: string): Person[] {
    const person = this.getFamilyMemberById(personId);
    if (!person || !person.parents) return [];

    return person.parents
      .map(parentId => this.getFamilyMemberById(parentId))
      .filter(parent => parent !== null) as Person[];
  }

  /**
   * Get siblings of a specific person
   */
  public static getSiblings(personId: string): Person[] {
    const person = this.getFamilyMemberById(personId);
    if (!person || !person.parents) return [];

    return familyData.filter(p => 
      p.id !== personId && 
      p.parents && 
      person.parents!.some(parentId => p.parents!.includes(parentId))
    );
  }

  /**
   * Search family members by name
   */
  public static searchByName(query: string): Person[] {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return [];

    return familyData.filter(person => {
      const name = typeof person.name === 'string' ? person.name : `${person.name.mr} ${person.name.en}`;
      return name.toLowerCase().includes(searchTerm);
    });
  }
}
