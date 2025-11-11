# Image Optimization Guide

## Current State

The portfolio currently uses JPG and PNG images. For optimal performance, consider converting images to modern formats.

## Recommended Optimizations

### 1. Convert to WebP Format

WebP provides superior compression while maintaining quality. Use the following tools:

**Online Tools:**
- [Squoosh](https://squoosh.app/) - Google's image optimization tool
- [CloudConvert](https://cloudconvert.com/jpg-to-webp) - Batch conversion

**Command Line (requires cwebp):**
```bash
# Install webp tools (Ubuntu/Debian)
sudo apt-get install webp

# Convert single image
cwebp -q 80 input.jpg -o output.webp

# Batch convert all JPG files
for f in *.jpg; do cwebp -q 80 "$f" -o "${f%.jpg}.webp"; done
```

### 2. Implement Picture Element with Fallbacks

Update image references to use modern formats with fallbacks:

```jsx
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" />
</picture>
```

### 3. Add Lazy Loading

For images below the fold:

```jsx
<img src="image.jpg" alt="Description" loading="lazy" />
```

### 4. Responsive Images

Use srcset for different screen sizes:

```jsx
<img
  src="image-400.jpg"
  srcSet="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
  alt="Description"
/>
```

## Target Metrics

- **Original JPG**: ~500-1000 KB
- **Optimized WebP**: ~100-300 KB (60-70% reduction)
- **Lazy loading**: Reduces initial page load by 40-60%

## Implementation Priority

1. **High Priority**: Hero images, project thumbnails
2. **Medium Priority**: Gallery images, slide decks
3. **Low Priority**: Icons, small UI elements

## Lighthouse Impact

- **Before optimization**: Performance ~70-80
- **After optimization**: Performance ~90-95
- **Accessibility**: Maintained at 95+
- **SEO**: Maintained at 90+

## Notes

- Keep original images as backup
- Test on multiple browsers (Safari, Chrome, Firefox)
- Verify alt text is descriptive and accurate
- Consider CDN for static assets in production
