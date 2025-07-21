import fs from 'fs';
import path from 'path';

/**
 * Get the image path for a person by their ID
 * @param personId - The ID of the person
 * @returns The image path if it exists, undefined otherwise
 */
export const getPersonImagePath = (personId: string): string | undefined => {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'webp', 'svg'];
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'family');
  
  for (const ext of imageExtensions) {
    const imagePath = path.join(imagesDir, `person-${personId}.${ext}`);
    if (fs.existsSync(imagePath)) {
      // Return the public URL path (not the file system path)
      return `/images/family/person-${personId}.${ext}`;
    }
  }
  
  return undefined;
};

/**
 * Get all available person images
 * @returns Object mapping person IDs to their image paths
 */
export const getAllPersonImages = (): Record<string, string> => {
  const imageMap: Record<string, string> = {};
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'family');
  
  if (!fs.existsSync(imagesDir)) {
    return imageMap;
  }
  
  const files = fs.readdirSync(imagesDir);
  
  files.forEach(file => {
    const match = file.match(/^person-(\d+)\.(jpg|jpeg|png|webp|svg)$/i);
    if (match) {
      const personId = match[1];
      imageMap[personId] = `/images/family/${file}`;
    }
  });
  
  return imageMap;
};

/**
 * Check if an image exists for a person
 * @param personId - The ID of the person
 * @returns True if image exists, false otherwise
 */
export const hasPersonImage = (personId: string): boolean => {
  return getPersonImagePath(personId) !== undefined;
};
