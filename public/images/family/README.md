# Family Images Directory

## Naming Convention
Use ID-based naming for consistency and reliability:

### Format: `person-{id}.{extension}`
- person-1.jpg (William Anderson)
- person-3.jpg (James Wilson)
- person-5.jpg (Charles Brown)
- person-7.jpg (George Taylor)
- etc.

### Supported formats:
- .jpg / .jpeg
- .png
- .webp

### Image Guidelines:
- Recommended size: 200x200px to 400x400px
- Keep file sizes under 500KB for better performance
- Use square aspect ratio for best display in circular nodes

### Fallback:
If no image exists for a person, the system will show initials instead.

### Example file structure:
```
family/
├── person-1.jpg      # William Anderson
├── person-3.jpg      # James Wilson
├── person-5.jpg      # Charles Brown
├── person-7.jpg      # George Taylor
├── person-9.jpg      # Robert Anderson
└── ...
```
