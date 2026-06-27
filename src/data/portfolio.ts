export const profile = {
  name: 'Rizky',
  handle: 'zxkys',
  roles: [
    'Full-Stack Developer',
    'UI/UX Enthusiast',
    'Open Source Contributor',
    'Problem Solver',
    'Tech Blogger',
    'Vibe Coder',
  ],
  location: 'Jawa Barat, Indonesia',
  status: 'Available for work',
  email: 'zxkysikky@gmail.com',
  tagline:
    'Full-stack developer passionate about building beautiful, performant, and accessible web applications. Let\'s create something amazing together.',
  bio: [
    'Halo! Gue Rizky — atau lo bisa panggil zxkys. Seorang full-stack developer yang suka banget bikin hal-hal random, otomatisasi, dan web app yang performant.',
    'Dari nge-build SMM panel yang handle ribuan transaksi, sampai bot automation buat WhatsApp, Telegram, & Discord. Suka vibe coding pake AI, SEO, dan ngoprek hal-hal baru tiap hari.',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/Hitamlegit6777', letter: 'G' },
    { label: 'Telegram', href: 'https://t.me/zenith6666', letter: 'TG' },
    { label: 'kliksosmed', href: 'https://kliksosmed.id', letter: 'k' },
  ],
};

export const stats = [
  { value: '6+', label: 'Projects Shipped' },
  { value: '28', label: 'Skills & Tools' },
  { value: '4', label: 'Active Roles' },
  { value: '99%', label: 'Uptime Maintained' },
];

export const services = [
  {
    title: 'Web Development',
    desc: 'Building responsive, performant web applications using modern frameworks and best practices. From single-page apps to complex enterprise solutions.',
    emoji: '💻',
  },
  {
    title: 'UI/UX Design',
    desc: 'Creating intuitive and beautiful user interfaces that delight users. Wireframing, prototyping, and user testing to ensure exceptional experiences.',
    emoji: '🎨',
  },
  {
    title: 'Backend & API',
    desc: 'Designing and building robust RESTful and GraphQL APIs. Scalable architecture with comprehensive documentation and testing.',
    emoji: '⚙️',
  },
  {
    title: 'DevOps & Cloud',
    desc: 'Setting up CI/CD pipelines, containerization with Docker, and cloud deployment on AWS/GCP. Ensuring reliable and scalable infrastructure.',
    emoji: '🚀',
  },
  {
    title: 'Consulting',
    desc: 'Providing expert advice on architecture decisions, technology stack selection, and code review. Helping teams build better software.',
    emoji: '🧠',
  },
  {
    title: 'Performance',
    desc: 'Analyzing and optimizing application performance. Reducing load times, improving Core Web Vitals, and ensuring smooth user experiences.',
    emoji: '⚡',
  },
];

export const skillCats = [
  { key: 'frontend', label: 'Frontend', color: '#FFD93D', ink: '#000' },
  { key: 'backend', label: 'Backend', color: '#FF6B9D', ink: '#000' },
  { key: 'database', label: 'Database', color: '#6BCB77', ink: '#000' },
  { key: 'tools', label: 'Tools', color: '#4D96FF', ink: '#000' },
  { key: 'seo', label: 'SEO', color: '#FF9F45', ink: '#000' },
  { key: 'automation', label: 'Automation', color: '#9D4EDD', ink: '#fff' },
  { key: 'soft-skills', label: 'Soft Skills', color: '#00C2A8', ink: '#000' },
];

export const skills = [
  { name: 'React.js', cat: 'frontend', level: 85, color: '#61DAFB' },
  { name: 'Vue.js', cat: 'frontend', level: 70, color: '#4FC08D' },
  { name: 'TypeScript', cat: 'frontend', level: 75, color: '#3178C6' },
  { name: 'HTML5/CSS3', cat: 'frontend', level: 90, color: '#E34F26' },
  { name: 'Tailwind CSS', cat: 'frontend', level: 88, color: '#06B6D4' },
  { name: 'Next.js', cat: 'frontend', level: 80, color: '#000000' },
  { name: 'JavaScript', cat: 'frontend', level: 92, color: '#F7DF1E' },
  { name: 'Node.js', cat: 'backend', level: 82, color: '#339933' },
  { name: 'Express.js', cat: 'backend', level: 78, color: '#000000' },
  { name: 'Python', cat: 'backend', level: 80, color: '#3776AB' },
  { name: 'PHP', cat: 'backend', level: 65, color: '#777BB4' },
  { name: 'REST API', cat: 'backend', level: 83, color: '#5b5fef' },
  { name: 'MySQL', cat: 'database', level: 78, color: '#4479A1' },
  { name: 'MongoDB', cat: 'database', level: 72, color: '#47A248' },
  { name: 'PostgreSQL', cat: 'database', level: 68, color: '#4169E1' },
  { name: 'Firebase', cat: 'database', level: 75, color: '#FFCA28' },
  { name: 'Git & GitHub', cat: 'tools', level: 90, color: '#F05032' },
  { name: 'VS Code', cat: 'tools', level: 93, color: '#007ACC' },
  { name: 'Figma', cat: 'tools', level: 70, color: '#F24E1E' },
  { name: 'Vercel/Netlify', cat: 'tools', level: 82, color: '#000000' },
  { name: 'SEO Strategy', cat: 'seo', level: 90, color: '#5b5fef' },
  { name: 'Keyword Research', cat: 'seo', level: 88, color: '#2ea4ab' },
  { name: 'Backlink Building', cat: 'seo', level: 92, color: '#d4a247' },
  { name: 'On-Page SEO', cat: 'seo', level: 85, color: '#5b9ed4' },
  { name: 'Bot Automation', cat: 'automation', level: 88, color: '#7c7ff4' },
  { name: 'Web Scraping', cat: 'automation', level: 82, color: '#d4686a' },
  { name: 'Vibe Coding', cat: 'automation', level: 95, color: '#5b5fef' },
  { name: 'Problem Solving', cat: 'soft-skills', level: 92, color: '#d4686a' },
];

export const projects = [
  {
    title: 'kliksosmed.id — SMM Panel',
    desc: 'Full-featured SMM panel website for social media marketing services. Complete ordering system, payment gateway integration, and admin dashboard.',
    tags: ['PHP', 'MySQL', 'API', 'Payment Gateway', 'SMM'],
    live: 'https://kliksosmed.id',
    code: '',
    featured: true,
    color: '#FFD93D',
  },
  {
    title: 'WhatsApp Bot Automation',
    desc: 'Custom WhatsApp bot for automated customer service, broadcasting, and response handling using Node.js.',
    tags: ['Node.js', 'Baileys', 'Automation', 'Bot', 'WhatsApp'],
    live: '',
    code: 'https://github.com/zxkys/whatsapp-bot',
    featured: true,
    color: '#6BCB77',
  },
  {
    title: 'Telegram Auto-Forward Bot',
    desc: 'Automated Telegram bot that forwards messages between channels with smart filtering and scheduling capabilities.',
    tags: ['Python', 'Telegram API', 'Automation', 'Bot'],
    live: '',
    code: 'https://github.com/zxkys/telegram-forwarder',
    featured: true,
    color: '#4D96FF',
  },
  {
    title: 'SEO Backlink Marketplace',
    desc: 'Custom marketplace platform for buying and selling high-quality backlinks with domain metrics and pricing automation.',
    tags: ['PHP', 'MySQL', 'SEO', 'Marketplace'],
    live: '',
    code: '',
    featured: false,
    color: '#FF9F45',
  },
  {
    title: 'Discord Moderation Bot',
    desc: 'Multi-purpose Discord bot with moderation commands, music playback, leveling system, and custom commands.',
    tags: ['Node.js', 'Discord.js', 'Bot', 'Automation'],
    live: '',
    code: 'https://github.com/zxkys/discord-bot',
    featured: false,
    color: '#FF6B9D',
  },
  {
    title: 'Random Tools Collection',
    desc: 'A collection of random web tools and utilities built for fun and learning — from meme generators to productivity tools.',
    tags: ['Next.js', 'Tailwind CSS', 'Random', 'Fun'],
    live: '',
    code: 'https://github.com/zxkys/random-tools',
    featured: false,
    color: '#9D4EDD',
  },
  {
    title: 'App Kasir — POS System',
    desc: 'Aplikasi kasir (POS) lintas platform untuk mobile & desktop. Manajemen produk, transaksi cepat, struk digital, dan laporan penjualan realtime untuk UMKM dan retail.',
    tags: ['React Native', 'Electron', 'POS', 'Desktop', 'Mobile'],
    live: '',
    code: '',
    featured: false,
    color: '#00C2A8',
  },
];

export const experiences = [
  {
    role: 'Founder & Developer',
    company: 'kliksosmed.id',
    type: 'Full-time',
    period: 'Jun 2023 — Now',
    desc: 'Membangun dan mengelola SMM panel dari awal — develop fullstack website dengan sistem order otomatis, payment gateway, API reseller, dan admin dashboard.',
    points: [
      'Berhasil launch & operasikan SMM panel dengan ribuan transaksi',
      'Bangun sistem order otomatis dengan multiple payment gateway',
      'Kembangkan API untuk reseller dengan dokumentasi lengkap',
      'Handle support & maintain server reliability 99%+ uptime',
    ],
    color: '#FFD93D',
  },
  {
    role: 'Bot Automation Developer',
    company: 'Freelance',
    type: 'Freelance',
    period: 'Sep 2022 — Now',
    desc: 'Mengembangkan berbagai bot automation — WhatsApp bot, Telegram bot, Discord bot, web scraper, dan tools otomatisasi lainnya untuk berbagai kebutuhan.',
    points: [
      'Develop 10+ bot automation projects untuk berbagai platform',
      'Bangun WhatsApp auto-reply system dengan Node.js & Baileys',
      'Buat Telegram forwarder bot dengan filtering cerdas',
      'Kembangkan web scraper untuk data collection & monitoring',
    ],
    color: '#FF6B9D',
  },
  {
    role: 'SEO Specialist & Backlink Provider',
    company: 'Freelance',
    type: 'Freelance',
    period: 'Mar 2022 — Now',
    desc: 'Menyediakan jasa SEO optimization dan backlink building. Spesialisasi di keyword research, on-page optimization, dan strategi backlink berkualitas.',
    points: [
      'Bantu berbagai website naik ranking dengan strategi SEO white-hat',
      'Sediakan backlink berkualitas dengan strict niche policy (NO judi/illegal)',
      'Lakukan technical SEO audit & optimization',
      'Konsultasi SEO untuk small business & startup di Indonesia',
    ],
    color: '#6BCB77',
  },
  {
    role: 'Vibe Coder & Random Builder',
    company: 'Personal Projects',
    type: 'Part-time',
    period: 'Jan 2023 — Now',
    desc: 'Nge-build project random pake vibe coding (Claude AI/Cursor). Mulai dari tools kecil, landing page, sampe full-stack web app. Belajar sambil bikin hal yang seru.',
    points: [
      'Bangun berbagai portfolio project pake Next.js + Tailwind',
      'Eksplorasi AI-assisted development workflow',
      'Bikin tools random yang actually useful',
      'Terus belajar & eksplorasi teknologi baru dengan cara yang fun',
    ],
    color: '#4D96FF',
  },
];

export const testimonials = [
  {
    name: 'Client SMM Panel',
    role: 'User kliksosmed.id',
    quote:
      'Panelnya fast response, orderan selalu masuk cepet. Supportnya juga ramah & fast respon. Recommended buat yang nyari SMM panel reliable.',
    color: '#FFD93D',
  },
  {
    name: 'Client Backlink',
    role: 'Website Owner',
    quote:
      'Backlinknya berkualitas, DA tinggi & relevan sama niche gue. Proses order cepet & delivery tepat waktu. Gak nyangka hasil SEOnya signifikan dalam 2 bulan.',
    color: '#FF6B9D',
  },
  {
    name: 'Client Bot Automation',
    role: 'Business Owner',
    quote:
      'Bot WA yang dibikin ngebantu banget buat auto-reply customer. Gak perlu manual reply satu-satu lagi. Kerjaan jadi lebih efisien.',
    color: '#6BCB77',
  },
  {
    name: 'Teman Kolaborasi',
    role: 'Fellow Developer',
    quote:
      'Kerja bareng zxkys di project selalu seru. Cepet nangkep requirement, kode rapih, dan selalu ada ide-ide random yang kreatif. Vibe codingnya jago!',
    color: '#4D96FF',
  },
  {
    name: 'Client SEO',
    role: 'E-commerce Owner',
    quote:
      'SEO auditnya detail & actionable. Setelah implement rekomendasinya, traffic organik naik 3x dalam 4 bulan. Worth every penny!',
    color: '#FF9F45',
  },
  {
    name: 'Client Web Dev',
    role: 'Startup Founder',
    quote:
      'Cepet, responsif, & hasilnya sesuai ekspektasi. Yang paling gue suka dia selalu kasih saran improvement yang gak kepikiran sama gue sebelumnya.',
    color: '#9D4EDD',
  },
];

export const blogs = [
  {
    title: 'Cara Memulai SMM Panel dari Nol — Pengalaman Pribadi',
    slug: 'cara-memulai-smm-panel-dari-nol',
    category: 'Tutorial',
    read: '7 min',
    date: '10 Apr 2024',
    author: 'Rizky (zxkys)',
    excerpt:
      'Sharing pengalaman pribadi bagaimana membangun dan mengelola SMM panel kliksosmed.id dari awal hingga bisa beroperasi penuh.',
    color: '#FFD93D',
    content: `# Cara Memulai SMM Panel dari Nol

Jadi lu pengen bikin SMM panel sendiri? Gue bakal share pengalaman real gue bangun kliksosmed.id dari nol.

## Yang Perlu Disiapin

1. **Domain + Hosting** — Jangan pake hosting abal-abal, nanti lemot pas rame order
2. **API Provider SMM** — Cari provider reliable, jangan yang murah doang tapi sering error
3. **Payment Gateway** — Integrasiin pembayaran biar auto-deposit
4. **Sistem Order** — Flow order harus jelas: pending → processing → completed

## Tantangan

- **Stok Layanan**: Kadang provider update harga/paket tiba-tiba
- **Support**: User butuh fast response, makanya gue juga bikin bot WA auto-reply
- **Keamanan**: Banyak yang nyoba inject/exploit, wajib sanitize input

## Tips

Fokus ke niche spesifik dulu, jangan langsung semua layanan. Build trust dulu baru expand.`,
  },
  {
    title: 'Vibe Coding: Cara Seru Build Project Pakai Claude/AI',
    slug: 'vibe-coding-build-project-pakai-ai',
    category: 'Personal',
    read: '5 min',
    date: '22 May 2024',
    author: 'Rizky (zxkys)',
    excerpt:
      'Apa itu vibe coding? Pengalaman seru nge-build project cuma modal ngomong sama AI — tanpa perlu mikirin logic ribet.',
    color: '#FF6B9D',
    content: `# Vibe Coding: Ngoding Santai Pake AI

Vibe coding itu istilah buat ngoding dimana lu literally tinggal bilang ke AI apa yang lu mau, terus AI yang ngerjain. Lu tinggal deskripsiin aja.

## Kenapa Gue Suka Vibe Coding

- **Cepet banget**: Ide → jadi dalam hitungan jam
- **Gak perlu mikir detail**: AI yang handle boilerplate
- **Cocok buat prototype**: Validasi ide sebelum serius develop
- **Fun AF**: Rasanya kaya punya tim developer sendiri

## Tools Favorit

- Claude Code / Cursor — combo paling oke buat vibe coding
- Prompt engineering is key: makin jelas instruksi, makin bagus hasilnya

## Tips

Tetep perlu basic programming knowledge ya. AI bisa ngebantu tapi lu tetep harus bisa review & debugging sendiri. Vibe coding bukan berarti blindly copy-paste.

Gue personally pake vibe coding buat nge-build tools random, landing page, sama prototype project. Hemat waktu gila-gilaan.`,
  },
  {
    title: 'SEO & Backlink: Apa yang Harus Lo Tau Sebelum Beli Backlink',
    slug: 'seo-backlink-guide-pemula',
    category: 'Tutorial',
    read: '8 min',
    date: '1 Jun 2024',
    author: 'Rizky (zxkys)',
    excerpt:
      'Panduan praktis soal backlink buat pemula — cara milih backlink berkualitas, metrik yang penting, dan WARNING soal niche terlarang.',
    color: '#6BCB77',
    content: `# Backlink Guide Buat Pemula

Gue jual backlink dan gue juga SEO practitioner. Ini hal-hal yang wajib lu tau.

## Metrik yang Penting

- **DA/DR (Domain Authority/Rating)**: Semakin tinggi semakin bagus, tapi jangan cuma liat ini doang
- **Traffic**: Domainnya beneran ada traffic gak? Jangan beli backlink dari situs mati
- **Relevansi Niche**: Backlink dari situs yang relevan JAUH lebih powerful
- **Spam Score**: Pastiin rendah, kalo tinggi bisa ngerusak SEO lu

## ⚠️ WARNING PENTING ⚠️

**Gue TIDAK menerima order backlink untuk:**

- 🚫 Situs judi online / casino / slot
- 🚫 Konten judi online (segala bentuk)
- 🚫 Niche illegal apapun (obat terlarang, senjata, hacking, dll)
- 🚫 Konten scam/penipuan

**Jangan coba-coba order niche di atas, akan langsung gue tolak.**

## Jenis Backlink

1. **Guest Post**: Nulis artikel di blog orang, sisipin link lu
2. **Link Insertion**: Nambahin link lu di artikel yang udah ada
3. **PBN (Private Blog Network)**: Risky, gue personally ga rekomendasiin

## Tips Akhir

Backlink itu cuma salah satu faktor SEO. Konten berkualitas + on-page SEO yang solid tetap nomor 1.`,
  },
  {
    title: 'Bot Automation — Bikin Bot Sendiri dari Nol pake Node.js',
    slug: 'bot-automation-nodejs-guide',
    category: 'Tutorial',
    read: '10 min',
    date: '18 Mar 2024',
    author: 'Rizky (zxkys)',
    excerpt:
      'Tutorial praktis bikin bot automation pake Node.js — dari WhatsApp bot, Telegram bot, sampe web scraper.',
    color: '#4D96FF',
    content: `# Bikin Bot Sendiri Pake Node.js

Gue udah bikin banyak bot: WA bot, Telegram bot, Discord bot, sampe scraper. Ini basicnya.

## Kenapa Node.js?

- Async/non-blocking — cocok buat handle banyak request
- Banyak library siap pake (Baileys, Telegraf, discord.js)
- Ringan, bisa jalan di VPS spek rendah

## Bot WhatsApp dengan Baileys

Baileys itu library WA Web API yang gak perlu scan QR tiap saat. Bisa bikin bot auto-reply, broadcast, dll.

## Bot Telegram

Pake grammY atau Telegraf. Bisa bikin command handler, inline keyboard, file upload/download.

## Scraping dengan Puppeteer

Buat ambil data dari website yang gak punya API. Pake Puppeteer atau Playwright.

## Tips

- Selalu limit concurrency biar gak kena rate limit
- Pake proxy rotating buat scraping
- Jangan spam — respect platform rules`,
  },
  {
    title: 'Kenapa Gue Suka Bikin Hal-Hal Random',
    slug: 'suka-bikin-hal-random',
    category: 'Personal',
    read: '4 min',
    date: '14 Feb 2024',
    author: 'Rizky (zxkys)',
    excerpt:
      'Cerita random tentang kenapa gue suka banget nge-build project-project aneh dan gak jelas — dan kenapa itu actually bagus buat belajar.',
    color: '#FF9F45',
    content: `# Suka Bikin Hal Random

Gue tipe orang yang kalo kepikiran ide random, langsung pengen eksekusi. Gak peduli itu bakal dipake orang apa enggak.

## Kenapa?

1. **Belajar hal baru**: Tiap project random pasti ketemu problem baru
2. **Portfolio natural**: Project random itu nunjukin kreativitas
3. **Fun**: Gak ada pressure, pure enjoyment
4. **Kadang jadi cuan**: Beberapa project random gue malah jadi sumber income

## Contoh Project Random Gue

- Random color palette generator
- Website yang isinya cuma tombol "Jangan Ditekan" (dan kalo ditekan error lucu)
- Auto-reply bot yang reply pake quotes anime
- Landing page absurd buat jualan "udara segar pegunungan"

## Lesson Learned

Jangan takut build hal yang gak jelas. Justru dari situ lu belajar problem solving real. Dan siapa tau project random lu besok jadi startup unicorn? (oke ini lebay)

Intinya: just build stuff, have fun, and learn along the way.`,
  },
  {
    title: 'Deploy Website Gratis: Cloudflare Pages vs Vercel vs Netlify',
    slug: 'deploy-website-gratis-cloudflare-vercel-netlify',
    category: 'Tutorial',
    read: '6 min',
    date: '8 Jan 2024',
    author: 'Rizky (zxkys)',
    excerpt:
      'Perbandingan lengkap platform hosting gratis buat static site. Cocok buat yang mau deploy portfolio atau landing page.',
    color: '#9D4EDD',
    content: `# Deploy Website Gratis

Mau deploy website portfolio atau landing page tapi gak mau bayar hosting? Ini 3 opsi terbaik.

## Cloudflare Pages

- Unlimited bandwidth (yes, beneran unlimited)
- 1 build per menit
- 500 builds per bulan
- Custom domain + SSL gratis
- Branch preview deployments

## Vercel

- 100GB bandwidth per bulan
- 6000 build minutes per bulan
- Custom domain + SSL gratis
- Preview deployments
- Analytics basic gratis

## Netlify

- 100GB bandwidth
- 300 build minutes
- Custom domain + SSL
- Forms (100 submissions gratis)

## Rekomendasi Gue

Pake Cloudflare Pages kalo traffic gede. Bandwidth unlimited itu deal breaker. Plus integrasi sama Cloudflare CDN bikin website lu cepet banget.

Masing-masing oke kok. Pilih aja yang cocok sama kebutuhan.`,
  },
];
