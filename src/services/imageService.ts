import { Person } from '../types/Person';
import { getAllPersonImages } from '../utils/imageUtils';

/**
 * Enhance family data with image paths
 * @param familyData - Array of Person objects
 * @returns Enhanced family data with image paths
 */
export const enhanceFamilyDataWithImages = (familyData: Person[]): Person[] => {
  const imageMap = getAllPersonImages();
  
  return familyData.map(person => ({
    ...person,
    image: imageMap[person.id] || undefined
  }));
};

/**
 * Get image URL for a specific person
 * @param personId - The ID of the person
 * @returns Image URL or undefined if no image exists
 */
export const getPersonImageUrl = (personId: string): string | undefined => {
  const imageMap = getAllPersonImages();
  return imageMap[personId];
};
