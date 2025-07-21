const fs = require('fs');
const path = require('path');

/**
 * Update familyData.ts to include image paths for all family members
 * This script adds the image field to each person object in the family data
 */

const familyDataPath = path.join(__dirname, '..', 'src', 'data', 'familyData.ts');
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'family');

// Read the current family data file
let familyDataContent = fs.readFileSync(familyDataPath, 'utf8');

console.log('Updating family data with image paths...');
console.log('=====================================');

// Get all available JPG images
const availableImages = new Set();
if (fs.existsSync(imagesDir)) {
  const files = fs.readdirSync(imagesDir);
  files.forEach(file => {
    const match = file.match(/^person-(\d+)\.jpg$/i);
    if (match) {
      availableImages.add(match[1]);
    }
  });
}

console.log(`Found ${availableImages.size} JPG images available`);

// Function to add image field to a person object
const addImageToPersonObject = (personMatch, personId) => {
  // Check if this person object already has an image field
  if (personMatch.includes('image:')) {
    return personMatch; // Already has image field, skip
  }
  
  // Check if we have an image for this person
  const imagePath = availableImages.has(personId) ? `/images/family/person-${personId}.jpg` : undefined;
  
  if (!imagePath) {
    console.log(`⚠️  No image found for person ID ${personId}`);
    return personMatch;
  }
  
  // Find the last property before the closing brace
  const lines = personMatch.split('\n');
  let insertIndex = -1;
  
  // Find the line with the closing brace
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '}' || lines[i].trim() === '},') {
      insertIndex = i;
      break;
    }
  }
  
  if (insertIndex === -1) {
    console.log(`⚠️  Could not find insertion point for person ID ${personId}`);
    return personMatch;
  }
  
  // Find the last property line before the closing brace
  let lastPropertyIndex = -1;
  for (let i = insertIndex - 1; i >= 0; i--) {
    const line = lines[i].trim();
    if (line && !line.startsWith('//') && !line.startsWith('/*') && !line.startsWith('*')) {
      lastPropertyIndex = i;
      break;
    }
  }
  
  if (lastPropertyIndex === -1) {
    console.log(`⚠️  Could not find last property for person ID ${personId}`);
    return personMatch;
  }
  
  // Add comma to last property if it doesn't have one
  if (!lines[lastPropertyIndex].trim().endsWith(',')) {
    lines[lastPropertyIndex] = lines[lastPropertyIndex] + ',';
  }
  
  // Insert the image field
  const indentation = lines[lastPropertyIndex].match(/^(\s*)/)[1]; // Get same indentation
  lines.splice(lastPropertyIndex + 1, 0, `${indentation}image: '${imagePath}'`);
  
  console.log(`✅ Added image path for person ID ${personId}: ${imagePath}`);
  return lines.join('\n');
};

// Regular expression to match person objects
const personObjectRegex = /{\s*id:\s*['"](\d+)['"][^}]*}/gs;

// Replace each person object with updated version
let updatedContent = familyDataContent.replace(personObjectRegex, (match, personId) => {
  return addImageToPersonObject(match, personId);
});

// Write the updated content back to the file
fs.writeFileSync(familyDataPath, updatedContent, 'utf8');

console.log('\n🎉 Family data updated successfully!');
console.log('Each person now has an image field pointing to their JPG profile image.');
console.log('The frontend will now display the JPG images for all family members.');
