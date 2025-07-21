const fs = require('fs');
const path = require('path');

/**
 * Script to create placeholder images for family members
 * This creates simple colored placeholder images for demonstration
 */

const familyMembers = [
  { id: '1', name: 'William Anderson' },
  { id: '3', name: 'James Wilson' },
  { id: '5', name: 'Charles Brown' },
  { id: '7', name: 'George Taylor' },
  { id: '9', name: 'Robert Anderson' },
  { id: '11', name: 'Thomas Wilson' },
  { id: '13', name: 'David Brown' },
  { id: '15', name: 'Edward Taylor' },
  // Add more as needed
];

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'family');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

console.log('Image Management Script');
console.log('======================');
console.log(`Images directory: ${imagesDir}`);
console.log('');

// Check which images exist
console.log('Current image status:');
familyMembers.forEach(member => {
  const extensions = ['jpg', 'jpeg', 'png', 'webp'];
  let hasImage = false;
  
  for (const ext of extensions) {
    const imagePath = path.join(imagesDir, `person-${member.id}.${ext}`);
    if (fs.existsSync(imagePath)) {
      console.log(`✅ ${member.name} (ID: ${member.id}) - person-${member.id}.${ext}`);
      hasImage = true;
      break;
    }
  }
  
  if (!hasImage) {
    console.log(`❌ ${member.name} (ID: ${member.id}) - No image found`);
  }
});

console.log('');
console.log('To add images:');
console.log('1. Place image files in: ' + imagesDir);
console.log('2. Name them as: person-{id}.jpg (or .png, .webp)');
console.log('3. Examples:');
console.log('   - person-1.jpg for William Anderson');
console.log('   - person-3.png for James Wilson');
console.log('   - person-5.webp for Charles Brown');
console.log('');
console.log('Supported formats: .jpg, .jpeg, .png, .webp');
console.log('Recommended size: 200x200px to 400x400px');
console.log('Keep files under 500KB for best performance');
