/**
 * ============================================================
 *  mockData.js — Faraz Abaya Product Data
 * ============================================================
 *
 *  This file contains ONLY product data (name, price, desc…).
 *  All image URLs live in productImages.js — never add image
 *  URLs directly here.
 *
 *  TO ADD A NEW PRODUCT:
 *  1. Add image exports to productImages.js  (P6_MAIN etc.)
 *  2. Add the product object to INITIAL_PRODUCTS below
 *  3. Reference images as:  imgs: [P6_MAIN, P6_ALT1, P6_ALT2]
 * ============================================================
 */

import {
  P1_MAIN, P1_ALT1, P1_ALT2,
  P2_MAIN, P2_ALT1, P2_ALT2,
  P3_MAIN, P3_ALT1, P3_ALT2,
  P4_MAIN, P4_ALT1, P4_ALT2,
  P5_MAIN, P5_ALT1, P5_ALT2,
} from "./productImages";

// ── Store config ─────────────────────────────────────────────
export const WHATSAPP = "919543184629"; // 🔁 Replace with your WhatsApp number

// ── Category list ─────────────────────────────────────────────
export const CATS = ["All", "Daily Wear", "Office", "Luxury", "Students"];

// ── Badge styles [background, text] ──────────────────────────
export const BADGE_COLORS = {
  Bestseller:   ["#C9A84C", "#1C1C1E"],
  New:          ["#1C1C1E", "#C9A84C"],
  "Top Pick":   ["#2D6A4F", "#fff"],
  "Budget Pick":["#6B7280", "#fff"],
  Limited:      ["#9B1C1C", "#fff"],
};

// ── Products ──────────────────────────────────────────────────
export const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Nida Pearl Abaya",
    category: "Luxury",
    price: 2499,
    fabric: "Premium Nida",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 128,
    desc: "Elegantly crafted with premium Nida fabric, adorned with delicate pearl embroidery at the cuffs. Perfect for special occasions and formal gatherings.",
    imgs: [P1_MAIN, P1_ALT1, P1_ALT2],
  },
  {
    id: 2,
    name: "Crepe Office Abaya",
    category: "Office",
    price: 1899,
    fabric: "Korean Crepe",
    badge: "New",
    rating: 4.7,
    reviews: 89,
    desc: "Designed for the modern professional woman. Wrinkle-resistant Korean Crepe with a structured silhouette. Features hidden pockets for practicality.",
    imgs: [P2_MAIN, P2_ALT1, P2_ALT2],
  },
  {
    id: 3,
    name: "Cotton Daily Comfort",
    category: "Daily Wear",
    price: 999,
    fabric: "Soft Cotton",
    badge: "Top Pick",
    rating: 4.8,
    reviews: 214,
    desc: "Your everyday companion crafted from breathable soft cotton. Light, comfortable, and modest — ideal for daily errands and casual outings. Machine washable.",
    imgs: [P3_MAIN, P3_ALT1, P3_ALT2],
  },
  {
    id: 4,
    name: "Student Lite Abaya",
    category: "Students",
    price: 749,
    fabric: "Polyester Blend",
    badge: "Budget Pick",
    rating: 4.6,
    reviews: 67,
    desc: "Affordable, stylish, and durable — made for students on the go. Lightweight polyester blend that stays fresh through long college days.",
    imgs: [P4_MAIN, P4_ALT1, P4_ALT2],
  },
  {
    id: 5,
    name: "Royal Embroidered Abaya",
    category: "Luxury",
    price: 3999,
    fabric: "Nida + Chiffon",
    badge: "Limited",
    rating: 5.0,
    reviews: 42,
    desc: "The crown jewel of our collection. Hand-embroidered gold zari threadwork on premium Nida with a flowing chiffon overlay. For weddings and Eid celebrations.",
    imgs: [P5_MAIN, P5_ALT1, P5_ALT2],
  },
];
