const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

/**
 * Create random JPG profile images for family members
 * This replaces the SVG placeholders with more realistic JPG images
 */

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'family');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Color palettes for different generations/genders
const colorPalettes = [
  ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
  ['#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'],
  ['#FFB6C1', '#87CEEB', '#DEB887', '#F0E68C', '#FFA07A'],
  ['#B0E0E6', '#F5DEB3', '#D8BFD8', '#FFE4E1', '#E0FFFF']
];

// Generate a random gradient background
const generateGradient = (ctx, width, height) => {
  const colors = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  
  return gradient;
};

// Create a profile-like image with initials and decorative elements
const createProfileImage = (id, name) => {
  const canvas = createCanvas(300, 300);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  ctx.fillStyle = generateGradient(ctx, 300, 300);
  ctx.fillRect(0, 0, 300, 300);
  
  // Add some decorative circles
  const numCircles = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < numCircles; i++) {
    const x = Math.random() * 300;
    const y = Math.random() * 300;
    const radius = 20 + Math.random() * 40;
    const alpha = 0.1 + Math.random() * 0.2;
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.fill();
  }
  
  // Main profile circle
  const centerX = 150;
  const centerY = 150;
  const mainRadius = 100;
  
  // Profile circle background
  ctx.beginPath();
  ctx.arc(centerX, centerY, mainRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.fill();
  
  // Profile circle border
  ctx.beginPath();
  ctx.arc(centerX, centerY, mainRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.lineWidth = 4;
  ctx.stroke();
  
  // Get initials
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);
  
  // Draw initials
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 48px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(initials, centerX, centerY - 10);
  
  // Draw name below
  ctx.fillStyle = '#34495E';
  ctx.font = '16px Arial, sans-serif';
  ctx.fillText(name, centerX, centerY + 40);
  
  // Draw ID
  ctx.fillStyle = '#7F8C8D';
  ctx.font = '12px Arial, sans-serif';
  ctx.fillText(`ID: ${id}`, centerX, centerY + 60);
  
  return canvas;
};

// Get all person IDs from the family data
const getFamilyMemberIds = () => {
  try {
    const familyDataPath = path.join(__dirname, '..', 'src', 'data', 'familyData.ts');
    const familyDataContent = fs.readFileSync(familyDataPath, 'utf8');
    
    // Extract IDs using regex
    const idMatches = familyDataContent.match(/id:\s*['"](\d+)['"]/g);
    if (!idMatches) return [];
    
    return idMatches.map(match => {
      const idMatch = match.match(/['"](\d+)['"]/);
      return idMatch ? idMatch[1] : null;
    }).filter(Boolean);
  } catch (error) {
    console.error('Error reading family data:', error);
    return [];
  }
};

// Get names for the IDs
const getFamilyMemberNames = () => {
  try {
    const familyDataPath = path.join(__dirname, '..', 'src', 'data', 'familyData.ts');
    const familyDataContent = fs.readFileSync(familyDataPath, 'utf8');
    
    // Extract person objects using regex
    const personMatches = familyDataContent.match(/{\s*id:\s*['"](\d+)['"],\s*name:\s*['"]([^'"]+)['"]/g);
    if (!personMatches) return {};
    
    const nameMap = {};
    personMatches.forEach(match => {
      const personMatch = match.match(/id:\s*['"](\d+)['"],\s*name:\s*['"]([^'"]+)['"]/);
      if (personMatch) {
        nameMap[personMatch[1]] = personMatch[2];
      }
    });
    
    return nameMap;
  } catch (error) {
    console.error('Error reading family data for names:', error);
    return {};
  }
};

// Main execution
console.log('Creating JPG profile images...');
console.log('===============================');

const memberIds = getFamilyMemberIds();
const memberNames = getFamilyMemberNames();

if (memberIds.length === 0) {
  console.log('No family member IDs found. Using default test members.');
  // Fallback to test members
  const testMembers = [
    { id: '1', name: 'William Anderson' },
    { id: '3', name: 'James Wilson' },
    { id: '5', name: 'Charles Brown' },
    { id: '7', name: 'George Taylor' },
    { id: '9', name: 'Robert Anderson' },
  ];
  
  testMembers.forEach(member => {
    const canvas = createProfileImage(member.id, member.name);
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    const filePath = path.join(imagesDir, `person-${member.id}.jpg`);
    
    fs.writeFileSync(filePath, buffer);
    console.log(`✅ Created: person-${member.id}.jpg for ${member.name}`);
  });
} else {
  console.log(`Found ${memberIds.length} family members. Creating images...`);
  
  memberIds.forEach(id => {
    const name = memberNames[id] || `Person ${id}`;
    const canvas = createProfileImage(id, name);
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    const filePath = path.join(imagesDir, `person-${id}.jpg`);
    
    fs.writeFileSync(filePath, buffer);
    console.log(`✅ Created: person-${id}.jpg for ${name}`);
  });
}

// Remove old SVG files
console.log('\nRemoving old SVG files...');
const files = fs.readdirSync(imagesDir);
files.forEach(file => {
  if (file.endsWith('.svg') && file.startsWith('person-')) {
    const filePath = path.join(imagesDir, file);
    fs.unlinkSync(filePath);
    console.log(`🗑️  Removed: ${file}`);
  }
});

console.log('\n🎉 JPG images created successfully!');
console.log('The family tree will now show JPG profile images instead of SVG.');
