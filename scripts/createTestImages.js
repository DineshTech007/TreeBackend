const fs = require('fs');
const path = require('path');

/**
 * Create simple test images using Canvas (if available) or SVG placeholders
 * This helps test the image functionality
 */

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'family');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create simple SVG placeholder images for testing
const createSVGPlaceholder = (id, name, color) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  const svg = `
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="${color}"/>
  <circle cx="100" cy="100" r="80" fill="white" opacity="0.9"/>
  <text x="100" y="110" font-family="Arial, sans-serif" font-size="36" font-weight="bold" text-anchor="middle" fill="${color}">
    ${initials}
  </text>
  <text x="100" y="180" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="${color}">
    ID: ${id}
  </text>
</svg>`.trim();
  return svg;
};

// Test data for first few family members
const testMembers = [
  { id: '1', name: 'William Anderson', color: '#3B82F6' },
  { id: '3', name: 'James Wilson', color: '#10B981' },
  { id: '5', name: 'Charles Brown', color: '#F59E0B' },
  { id: '7', name: 'George Taylor', color: '#EF4444' },
  { id: '9', name: 'Robert Anderson', color: '#8B5CF6' },
];

console.log('Creating test images...');
console.log('======================');

testMembers.forEach(member => {
  const svgContent = createSVGPlaceholder(member.id, member.name, member.color);
  const filePath = path.join(imagesDir, `person-${member.id}.svg`);
  
  fs.writeFileSync(filePath, svgContent);
  console.log(`✅ Created: person-${member.id}.svg for ${member.name}`);
});

console.log('');
console.log('Test images created successfully!');
console.log('Directory:', imagesDir);
console.log('');
console.log('Note: SVG images are created for testing. For production, use JPG/PNG images.');
console.log('You can replace these with actual photos by naming them person-{id}.jpg');
