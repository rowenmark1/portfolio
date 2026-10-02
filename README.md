# Bubu Birthday Website

A cute static birthday website for **Bubu**, made by **Dudu**.

## Files
- `index.html` – main page
- `styles.css` – design and layout
- `script.js` – interactions (days counter, modal surprise, floating hearts, confetti)

## How to use on GitHub Pages
1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save.
7. Wait a minute and GitHub will give you the website link.

## Easy things to edit
Open `index.html` and change:
- the birthday message
- the letter
- section titles
- "December 12, 2025" if needed

## If you want to add your own photos later
Replace the gallery cards in the `#gallery` section with `<img>` tags.

Example:
```html
<figure class="polaroid">
  <img src="assets/photo1.jpg" alt="Our photo together" class="real-photo">
  <figcaption>My favorite memory ♡</figcaption>
</figure>
```

Then add this CSS in `styles.css`:
```css
.real-photo {
  width: 100%;
  aspect-ratio: 1/1.1;
  object-fit: cover;
  border-radius: 18px;
}
```

## Notes
- This is a **static website** so it works well on GitHub Pages.
- No build tools needed.
- Mobile responsive.
