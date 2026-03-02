/**
 * ============================================================
 *  productImages.js — Faraz Abaya Image Registry
 * ============================================================
 *
 *  SINGLE SOURCE OF TRUTH for all product image URLs.
 *  Import this into mockData.js — never put image URLs
 *  directly inside product objects.
 *
 *  HOW TO REPLACE WITH YOUR OWN PHOTOS
 *  ─────────────────────────────────────
 *  1. Upload your product photo to any image host:
 *       • Cloudinary (free tier): cloudinary.com
 *       • Your own server/S3 bucket
 *       • Vercel's public/ folder (put images in /public/images/)
 *
 *  2. Copy the direct image URL (must end in .jpg / .png / .webp)
 *
 *  3. Replace the URL string in the correct product entry below.
 *
 *  4. Each product has exactly 3 slots:
 *       main  → shown on the product card grid
 *       alt1  → first gallery thumbnail in ProductDetail
 *       alt2  → second gallery thumbnail in ProductDetail
 *
 *  NAMING CONVENTION
 *  ─────────────────
 *  Keys follow the pattern:  PRODUCT_ID_SLOT
 *  Example:  P1_MAIN, P1_ALT1, P1_ALT2
 *
 *  IMAGE REQUIREMENTS (for consistent e-commerce look)
 *  ────────────────────────────────────────────────────
 *  • Aspect ratio : 3:4  (portrait — width:height = 3:4)
 *  • Min resolution: 600 × 800 px
 *  • Subject: full-length Islamic abaya, modest fashion only
 *  • Background: clean studio, neutral wall, or soft outdoor
 *  • NO: shoes as focal item, western dresses, crop tops,
 *         irrelevant accessories, male subjects
 *
 *  STOCK PHOTO SOURCES (free, commercial-use OK)
 *  ──────────────────────────────────────────────
 *  • Unsplash  → https://unsplash.com/s/photos/abaya
 *  • Pexels    → https://www.pexels.com/search/abaya/
 *  • Pixabay   → https://pixabay.com/images/search/abaya/
 *
 *  UNSPLASH DIRECT URL FORMAT
 *  ──────────────────────────
 *  https://images.unsplash.com/photo-{ID}?w=600&q=80&fit=crop&crop=top
 *  The `crop=top` parameter keeps the face/garment in frame.
 *
 * ============================================================
 */

// ── Base URL builder (keeps URLs DRY) ──────────────────────
const unsplash = (photoId, opts = "w=600&q=80&fit=crop&crop=top") =>
  `https://images.unsplash.com/photo-${photoId}?${opts}`;

// ── Placeholder (shown while you replace with real photos) ──
// Uses placehold.co — no external dependency, clean grey card
const ph = (label) =>
  `https://placehold.co/600x800/1C1C1E/C9A84C?text=${encodeURIComponent(label)}`;

// ════════════════════════════════════════════════════════════
//  PRODUCT 1 — Nida Pearl Abaya  (Luxury)
//  → Elegant, embellished, occasion wear
// ════════════════════════════════════════════════════════════
export const P1_MAIN = unsplash("pNs_ZQ3BoP0"); // black abaya, studio
export const P1_ALT1 = unsplash("1583391733956-3750e0ff4e8b"); // modest fashion drape
export const P1_ALT2 = unsplash("1591047139829-d91aecb6caea"); // abaya detail

// ════════════════════════════════════════════════════════════
//  PRODUCT 2 — Crepe Office Abaya  (Office)
//  → Structured, professional, clean silhouette
// ════════════════════════════════════════════════════════════
export const P2_MAIN = unsplash("SZbVjTh3klw"); // professional modest wear
export const P2_ALT1 = unsplash("1614093302611-8efc45d5f0c1"); // smart office modest style
export const P2_ALT2 = unsplash("1622495896760-3abd8e15ce6f"); // abaya side profile

// ════════════════════════════════════════════════════════════
//  PRODUCT 3 — Cotton Daily Comfort  (Daily Wear)
//  → Relaxed, breathable, everyday modest wear
// ════════════════════════════════════════════════════════════
export const P3_MAIN = unsplash("1605763240000-7e93b172d754"); // casual modest full length
export const P3_ALT1 = unsplash("1591047139829-d91aecb6caea"); // daily wear abaya
export const P3_ALT2 = unsplash("1583391733956-3750e0ff4e8b"); // fabric texture

// ════════════════════════════════════════════════════════════
//  PRODUCT 4 — Student Lite Abaya  (Students)
//  → Lightweight, youthful, practical
// ════════════════════════════════════════════════════════════
export const P4_MAIN = https://unsplash.com/photos/a-woman-in-a-white-dress-sitting-on-a-ledge-YBVF3BKtw44; // modest student look
export const P4_ALT1 = unsplash("1605763240000-7e93b172d754"); // campus modest style
export const P4_ALT2 = unsplash("1614093302611-8efc45d5f0c1"); // simple everyday abaya

// ════════════════════════════════════════════════════════════
//  PRODUCT 5 — Royal Embroidered Abaya  (Luxury)
//  → Statement piece, embroidery, wedding/Eid
// ════════════════════════════════════════════════════════════
export const P5_MAIN = unsplash("1583391733956-3750e0ff4e8b"); // luxury abaya drape
export const P5_ALT1 = unsplash("1622495896760-3abd8e15ce6f"); // embroidered detail
export const P5_ALT2 = unsplash("1591047139829-d91aecb6caea"); // occasion abaya

// ════════════════════════════════════════════════════════════
//  HOW TO ADD A NEW PRODUCT (Future Scalability)
//  ──────────────────────────────────────────────
//  1. Find your Unsplash photo ID from the URL:
//     https://unsplash.com/photos/[this-is-the-id]
//
//  2. Add 3 entries here following the same pattern:
//     export const P6_MAIN = unsplash("your-photo-id-here");
//     export const P6_ALT1 = unsplash("your-photo-id-here");
//     export const P6_ALT2 = unsplash("your-photo-id-here");
//
//  3. Add the product object to INITIAL_PRODUCTS in mockData.js
//     and reference: imgs: [P6_MAIN, P6_ALT1, P6_ALT2]
//
//  TO USE YOUR OWN HOSTED IMAGE instead of Unsplash:
//     export const P6_MAIN = "https://yoursite.com/images/product6.jpg";
// ════════════════════════════════════════════════════════════
