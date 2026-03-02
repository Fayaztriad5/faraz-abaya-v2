const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --gold: #C9A84C;
    --gold-light: #E8C96A;
    --charcoal: #1C1C1E;
    --pearl: #FAF8F5;
    --pearl-dark: #F0EDE8;
    --text-muted: #8A8A8E;
    --navbar-h: 60px;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-text-size-adjust: 100%; }
  body { font-family: 'Jost', sans-serif; background: var(--pearl); overflow-x: hidden; }

  .font-display { font-family: 'Cormorant Garamond', serif !important; }

  /* ── Navbar ── */
  .navbar-blur {
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    background: rgba(250,248,245,.96);
    border-bottom: 1px solid rgba(201,168,76,.2);
  }
  .nav-desktop { display: none; }
  @media (min-width: 640px) { .nav-desktop { display: flex; } }
  .nav-hamburger { display: flex; }
  @media (min-width: 640px) { .nav-hamburger { display: none; } }

  .mobile-drawer {
    position: fixed;
    top: var(--navbar-h);
    left: 0; right: 0;
    background: rgba(250,248,245,.98);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(201,168,76,.2);
    padding: 16px 20px 24px;
    z-index: 49;
    transform: translateY(-110%);
    transition: transform .3s cubic-bezier(.4,0,.2,1);
    box-shadow: 0 12px 40px rgba(0,0,0,.12);
  }
  .mobile-drawer.open { transform: translateY(0); }

  /* ── Hero ── */
  .hero-title { font-size: clamp(30px, 8vw, 52px); }
  .hero-padding { padding: 28px 20px; }
  @media (min-width: 640px) { .hero-padding { padding: 48px 40px; } }
  .hero-badge { display: none; }
  @media (min-width: 480px) { .hero-badge { display: flex; } }

  /* ── Product Grid ── */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media (min-width: 640px) { .product-grid { gap: 16px; } }
  @media (min-width: 768px) { .product-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }
  @media (min-width: 1100px) { .product-grid { grid-template-columns: repeat(4, 1fr); } }

  /* ── Product Card ── */
  .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
  @media (hover: hover) {
    .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,.13) !important; }
  }
  .img-zoom { overflow: hidden; }
  .img-zoom img { transition: transform 0.5s ease; }
  @media (hover: hover) { .img-zoom:hover img { transform: scale(1.07); } }
  .card-name { font-size: clamp(13px, 3.5vw, 18px); }
  .card-price { font-size: clamp(15px, 4vw, 22px); }
  .btn-card-view {
    display: block;
    width: 100%;
    padding: 9px 10px;
    border-radius: 12px;
    font-size: 11px;
    font-family: 'Jost', sans-serif;
    letter-spacing: 0.06em;
    margin-top: 8px;
    text-align: center;
  }
  @media (min-width: 640px) { .btn-card-view { font-size: 12px; padding: 8px 14px; } }

  /* ── Category Pills ── */
  .pills-row {
    display: flex; gap: 8px; overflow-x: auto;
    padding-bottom: 4px; margin-bottom: 20px;
    -ms-overflow-style: none; scrollbar-width: none;
  }
  .pills-row::-webkit-scrollbar { display: none; }
  @media (min-width: 640px) { .pills-row { gap: 10px; margin-bottom: 28px; } }
  .cat-pill {
    white-space: nowrap; cursor: pointer; transition: all .25s;
    border: 1.5px solid rgba(201,168,76,.3);
    font-family: 'Jost', sans-serif; font-size: 12px; font-weight: 500;
    padding: 7px 14px; border-radius: 100px;
  }
  @media (min-width: 640px) { .cat-pill { font-size: 13px; padding: 8px 18px; } }

  /* ── Features ── */
  .features-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 36px;
  }
  @media (min-width: 640px) { .features-grid { grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 48px; } }

  /* ── Product Detail ── */
  .detail-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
  @media (min-width: 768px) { .detail-grid { grid-template-columns: 1fr 1fr; gap: 48px; } }
  .detail-title { font-size: clamp(26px, 7vw, 40px); }
  .detail-price { font-size: clamp(26px, 7vw, 38px); }

  .size-btn {
    border: 1.5px solid #D1CDC7; cursor: pointer; transition: all .2s;
    background: #fff; font-family: 'Jost', sans-serif; font-size: 14px; font-weight: 500;
    min-width: 48px; min-height: 48px; border-radius: 14px;
  }
  .size-btn.active { border-color: var(--gold); background: var(--charcoal); color: #fff; }

  /* Sticky CTA on mobile */
  .detail-cta-wrap {
    position: sticky; bottom: 0;
    background: rgba(250,248,245,.97);
    backdrop-filter: blur(12px);
    padding: 12px 0 8px; z-index: 10;
  }
  @media (min-width: 768px) { .detail-cta-wrap { position: static; background: none; backdrop-filter: none; padding: 0; } }

  /* Trust badges */
  .trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .trust-card { text-align: center; padding: 10px 6px; border-radius: 14px; background: var(--pearl-dark); }
  @media (min-width: 480px) { .trust-card { padding: 14px; } }

  /* ── Footer ── */
  .footer-grid { display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 28px; }
  @media (min-width: 640px) { .footer-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; } }

  /* ── Buttons ── */
  .btn-wa {
    background: linear-gradient(135deg,#25D366,#128C7E); color:#fff;
    border:none; cursor:pointer; transition:all .3s;
    box-shadow:0 4px 15px rgba(37,211,102,.35); min-height:48px;
  }
  @media (hover:hover) { .btn-wa:hover { transform:translateY(-2px); box-shadow:0 8px 25px rgba(37,211,102,.45); } }
  .btn-gold {
    background: linear-gradient(135deg,#C9A84C,#E8C96A); color:#1C1C1E;
    border:none; cursor:pointer; font-weight:600; transition:all .3s;
    box-shadow:0 4px 15px rgba(201,168,76,.3); min-height:44px;
  }
  @media (hover:hover) { .btn-gold:hover { transform:translateY(-2px); } }
  .btn-outline {
    background:transparent; color:var(--gold); border:1.5px solid var(--gold);
    cursor:pointer; transition:all .3s; min-height:44px;
  }
  @media (hover:hover) { .btn-outline:hover { background:var(--gold); color:var(--charcoal); } }

  /* ── Float WhatsApp ── */
  .float-wa {
    position:fixed; bottom:20px; right:16px; z-index:99;
    width:52px; height:52px; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    background:linear-gradient(135deg,#25D366,#128C7E);
    box-shadow:0 4px 20px rgba(37,211,102,.5);
    cursor:pointer; border:none; transition:transform .2s;
  }
  @media (min-width:640px) { .float-wa { bottom:24px; right:24px; width:54px; height:54px; } }
  @media (hover:hover) { .float-wa:hover { transform:scale(1.1); } }

  /* ── Misc ── */
  .badge-pill { font-family:'Jost',sans-serif; font-size:9px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; padding:3px 10px; border-radius:100px; }
  .like-btn { position:absolute; top:8px; right:8px; background:rgba(255,255,255,.92); backdrop-filter:blur(8px); border:none; cursor:pointer; border-radius:50%; width:36px; height:36px; display:flex; align-items:center; justify-content:center; transition:all .2s; }
  @media (hover:hover) { .like-btn:hover { transform:scale(1.1); } }
  .thumb { border:2px solid transparent; cursor:pointer; transition:all .2s; border-radius:8px; overflow:hidden; }
  .thumb.active { border-color:var(--gold); }
  .divider { height:1px; background:linear-gradient(90deg,transparent,var(--gold),transparent); margin:16px 0; }
  .admin-row:hover { background:rgba(201,168,76,.05) !important; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  .fade-up { animation:fadeUp .45s ease forwards; }
  input:focus,select:focus,textarea:focus { outline:none; border-color:var(--gold)!important; box-shadow:0 0 0 3px rgba(201,168,76,.15); }
  ::-webkit-scrollbar{width:5px} ::-webkit-scrollbar-thumb{background:var(--gold);border-radius:3px}
`;

export default globalStyles;
