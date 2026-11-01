// Site-wide constants and content for the TeddyPups clone.
// Images are hotlinked from the reference site's media paths (see README).

export const SITE = {
  name: "TeddyPups U.A.E.",
  short: "TeddyPups",
  tagline: "every puppy is family",
  phone: "+971 54 167 6733",
  phoneHref: "tel:+971541676733",
  whatsappNumber: "971541676733",
  email: "hello@teddypups.example", // placeholder: the reference site hides its email behind Cloudflare
  location: "Downtown Dubai, United Arab Emirates",
  maps: "https://maps.app.goo.gl/ZdJvwHBSQWWZT54s7",
  instagram: "https://www.instagram.com/teddypups.worldwide/",
  tiktok: "https://www.tiktok.com/@teddypupsuae",
  facebook: "https://www.facebook.com/profile.php?id=61567496944539",
};

const BASE = "https://puppy.instabizweb.com";

export const LOGO = `${BASE}/brand/logo.png`;

// media("Z0To.../abc/file.webp", 640) -> optimized image URL
export function media(path, width = 828) {
  return `${BASE}/_next/image?url=${encodeURIComponent("/media/" + path)}&w=${width}&q=75`;
}

// WhatsApp click-to-chat. All messages are URL-encoded and use the one number in SITE.
export function wa(text = "Hello! I would love to know more about your available puppies.") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function waBreed(breed) {
  return wa(`Hello! I am interested in ${breed} puppies. Please share available options.`);
}

export function waPuppy(name, breed) {
  const who = breed ? `${name} (${breed})` : name;
  return wa(`Hello! I am interested in ${who}. Please share more details and available photos.`);
}

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/puppies", label: "Puppies" },
  { href: "/happy-families", label: "Happy families" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Visit & contact" },
];

export const BREEDS = [
  { key: "maltipoo", label: "Maltipoo", match: "maltipoo" },
  { key: "pomeranian", label: "Pomeranian", match: "pomeranian" },
  { key: "poodle", label: "Poodle", match: "poodle" },
  { key: "cavapoo", label: "Cavapoo", match: "cavapoo" },
  { key: "shih-tzu", label: "Shih Tzu", match: "shih tzu" },
];

// origin: "imported" | "local". Only Max's origin is stated on the reference site;
// the rest are assumed (Korean teacup lines = imported, others = local).
export const PUPPIES = [
  {
    slug: "maltipoo-max-male",
    name: "Max",
    breed: "Maltipoo",
    gender: "boy",
    age: "3 months",
    origin: "imported",
    video: true,
    images: [
      "Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp",
      "RH7J577OfQ7f/e776d07dbd/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg",
    ],
  },
  {
    slug: "korean-teacup-maltipoo-female",
    breed: "Korean Teacup Maltipoo",
    gender: "girl",
    age: "2 months",
    origin: "imported",
    video: true,
    images: ["gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg"],
  },
  {
    slug: "korean-teacup-poodle-female",
    breed: "Korean Teacup Poodle",
    gender: "girl",
    age: "2 months",
    origin: "imported",
    images: ["xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg"],
  },
  {
    slug: "maltipoo-cavapoo-male",
    breed: "Maltipoo & Cavapoo",
    gender: "boy",
    age: "3 months Maltipoo & 2 months Cavapoo",
    origin: "local",
    video: true,
    images: ["YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg"],
  },
  {
    slug: "toy-poodle-male-female",
    breed: "Toy Poodle",
    gender: "boy & girl",
    age: "2 months",
    origin: "local",
    images: ["vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg"],
  },
  {
    slug: "maltipoo-female-2",
    breed: "Maltipoo",
    gender: "girl",
    age: "3 months",
    origin: "local",
    video: true,
    images: ["3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg"],
  },
  {
    slug: "pomeranian-female",
    breed: "Pomeranian",
    gender: "girl",
    age: "3 months",
    origin: "local",
    images: ["3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg"],
  },
  {
    slug: "copper-male",
    name: "Copper",
    breed: "Cavapoo",
    gender: "boy",
    age: "2 months",
    origin: "local",
    images: ["O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg"],
  },
  {
    slug: "shitzu-female",
    breed: "Shih Tzu",
    gender: "girl",
    age: "2 months",
    origin: "local",
    images: ["qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg"],
  },
  {
    slug: "shitzu-male",
    breed: "Shih Tzu",
    gender: "boy",
    age: "2 months",
    origin: "local",
    images: ["crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg"],
  },
  {
    slug: "maltipoo-female-1",
    breed: "Maltipoo",
    gender: "girl",
    age: "2.5 months",
    origin: "local",
    images: ["wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg"],
  },
  {
    slug: "maltipoo-female",
    breed: "Maltipoo",
    gender: "girl",
    age: "2 months",
    origin: "local",
    images: ["lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg"],
  },
  {
    slug: "korean-teacup-pomeranian-1",
    breed: "Korean Teacup Pomeranian",
    gender: "girl",
    age: "2 months",
    origin: "imported",
    images: ["EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg"],
  },
  {
    slug: "korean-teacup-pomeranian",
    breed: "Korean Teacup Pomeranian",
    gender: "girl",
    age: "2 months",
    origin: "imported",
    images: ["vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg"],
  },
  {
    slug: "korean-teacup-pomeranian-male",
    breed: "Korean Teacup Pomeranian",
    gender: "boy",
    age: "2 months",
    origin: "imported",
    images: ["nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg"],
  },
];

export const GONE_HOME = [
  { slug: "pomeranian-ace-boy", name: "Ace", breed: "Pomeranian", gender: "boy", from: "TeddyPups", image: "mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif" },
  { slug: "poodle-leo-male", name: "Leo", breed: "Poodle", gender: "boy", from: "TeddyPups", image: "QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif" },
  { slug: "maltipoo-mia-girl", name: "Mia", breed: "Maltipoo", gender: "girl", from: "Dubai showroom", image: "4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif" },
  { slug: "maltipoo-sadie-girl", name: "Sadie", breed: "Maltipoo", gender: "girl", from: "TeddyPups", image: "159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif" },
  { slug: "blue-marle-pomeranian", breed: "Pomeranian", gender: "boy", from: "TeddyPups", image: "bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif" },
  { slug: "pomsky-ollie-boy", name: "Ollie", breed: "Pomsky", gender: "boy", from: "TeddyPups", image: "Qs2IHRk7OQIm/c16bea255c/27b888_ef3324a358d64858b4873a146574c3b9-mv2.avif" },
  { slug: "maltipoo-bruno-boy", name: "Bruno", breed: "Maltipoo", gender: "boy", from: "Dubai showroom", image: "w-F8mJLs2gtj/f06147a6d3/27b888_301f58cbae624a1da36a79d46571043a-mv2.avif" },
  { slug: "maltese-buddy-male", name: "Buddy", breed: "Maltese", gender: "boy", from: "Dubai showroom", image: "5ygCaO2TQb3v/f23ade89fa/27b888_6053b478acb641d1865de22aef938977-mv2.avif" },
  { slug: "maltese-charlie-male", name: "Charlie", breed: "Maltese", gender: "boy", from: "TeddyPups", image: "0c1rFiKXQLLk/75c6a20e15/27b888_b22287e7c1594de7ab2fba46eabea376-mv2.avif" },
  { slug: "pomeranian-daisy-girl", name: "Daisy", breed: "Pomeranian", gender: "girl", from: "Dubai showroom", image: "d_ji2d9LVy0R/b19b4cf1c2/27b888_c6cbb607448f469a96d73f3bc42a992d-mv2.avif" },
  { slug: "pomeranian-bella-female", name: "Bella", breed: "Pomeranian", gender: "girl", from: "TeddyPups", image: "9jwfs8kSZW7K/9b8ae31d11/27b888_ab014eabe44c4f6ebaacb9ef1869823f-mv2.avif" },
  { slug: "poodle-teddy-male", name: "Teddy", breed: "Poodle", gender: "boy", from: "TeddyPups", image: "9XFYXsuvjIcz/8d1efc8baa/27b888_430ebbf87dc84b93bcd0b61709a2eaa7-mv2.avif" },
  { slug: "poodle-molly-female", name: "Molly", breed: "Poodle", gender: "girl", from: "Dubai showroom", image: "WZKcpiogRBW7/9ebcb8d165/27b888_2b9e32b056624a45b62f7d7b4ec7d105-mv2.avif" },
  { slug: "pomski-coco-girl", name: "Coco", breed: "Pomsky", gender: "girl", from: "TeddyPups", image: "CXIzj6hYrmuI/eff60812df/27b888_ce94335cf4714a99a78c799f666f9323-mv2.avif" },
  { slug: "pomsky-rosie-girl", name: "Rosie", breed: "Pomsky", gender: "girl", from: "Dubai showroom", image: "FhrW7pE84bji/f7c57baf49/27b888_08271c7de284451fb9c848757f4838fb-mv2.avif" },
];

export const FAMILY_PHOTOS = [
  { image: "dI8Jv0KRTiLJ/d2d7e5375b/27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg", caption: "Lulu 🧸 with her new mummy ❤️" },
  { image: "TI-WtaFssfQt/c41fb2a387/27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg", caption: "Adorable Maltipoo baby 🧸❤️" },
  { image: "j6T9eswP2eS8/59c6879a1d/27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg", caption: "My new teddy puppy 🥰🧸" },
  { image: "HJgL4rRnmReV/533701358f/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg", caption: "Our new puppies 🧸🥰🤗" },
  { image: "uc5ANs5jm7r7/7160d8b7b1/27b888_f7f4966e59e94db591784d4ec546682f-mv2.jpg", caption: "New puppy 🧸😍" },
  { image: "pRJubyqHw8p7/d58c4c07ee/27b888_b073c5815f7c4f92ad9a57741a653663-mv2.jpg", caption: "Gang of 3 😍🧸" },
  { image: "4wOJk9azop_-/65ecf66bf0/27b888_cfe895dbcc2d4bff85f890be9b496543-mv2.jpg", caption: "So happy 😍😍" },
  { image: "3h20rIasJCOa/10c307cb1c/27b888_a7e7ab6a931e4c79a798bab9927d396e-mv2.jpg", caption: "New pup 🤗💫" },
  { image: "TUslu26Ueaq-/9c3516c040/edb2f5_6627857aca7e495ea37d9f62d814d323-mv2.jpeg" },
  { image: "OcgEePeBmGuu/41fb22320b/edb2f5_adf88f7400c848249d60698fca0336e9-mv2.jpeg" },
  { image: "RYkyuv4DBCTC/d9e02a0dc8/edb2f5_7ed2ee1ba89b4230b52f5e3981b1b198-mv2.jpeg" },
  { image: "d267R4d3lMSv/96d8604ca3/edb2f5_02b95a69a2c24c7e81b60e6d8c01baf7-mv2.jpeg" },
  { image: "XqxhmNftVKic/5adf2f28fe/edb2f5_37f5218f73e842b88ee3ae0c911bcafa-mv2.jpeg" },
  { image: "1II_yVrwWdOG/c07a8ef9f1/edb2f5_258010c661f64f3b8b952c5a2f7677de-mv2.jpeg" },
  { image: "bKP7vwN0R2OU/1aa47534b5/edb2f5_b8d76dffb97f46b5a9f2aaf9c1067b4b-mv2.jpeg" },
  { image: "ToVkYw_K3UrY/81a2bd9ac1/edb2f5_582a3767e5eb408f9684a7e623229dc4-mv2.jpeg" },
  { image: "stDfO2jMfvb_/6228a11db2/edb2f5_4b08003ef57c4663b55c9ac0c4147c36-mv2.jpeg" },
  { image: "K-U7RwW9j2A9/09d7edc058/edb2f5_22d3cc4ae0e14216a0d3a1ec9796649f-mv2.jpeg" },
  { image: "s23WYu0qJQ_h/d0ad444e50/27b888_a887dbff51fb420d95774cce6a8d54fb-mv2.jpg" },
  { image: "ab5hEGUKO4aY/de923fd8eb/edb2f5_d5177ed7ae1344d7acc11e9770df7b74-mv2.jpeg" },
];

export const SHOWROOM_IMAGES = [
  "FHyoHcIosLZE/60f6e7e00a/27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg",
  "Vi-kzyvemRl4/e740ed8a24/27b888_323008bb0f6a41d4bde2a0da7206cd98f001.jpg",
  "g_e4ebbc7fyG/8276289ae7/27b888_323008bb0f6a41d4bde2a0da7206cd98f002.jpg",
  "skvodl2NZiKq/cefab5eee9/27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg",
];

export const TESTIMONIAL = {
  quote:
    "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.",
  author: "Sarah M., Dubai, UAE",
};

export const JOURNEY = [
  { title: "Choose your breed", text: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle." },
  { title: "Get photos & details", text: "Our team will share real photos, health details, and all necessary information directly on WhatsApp." },
  { title: "Secure & safe delivery", text: "Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free." },
];

export const TRUST = [
  { title: "Vet-checked & healthy", text: "Every puppy comes vaccinated, dewormed, and with a verified health certificate." },
  { title: "Korea to Dubai, safely", text: "Trusted breeders, safe travel, and premium care from start to finish." },
  { title: "Support 24/7", text: "Always here to help, from choosing your puppy to post-delivery support." },
  { title: "Trusted by families worldwide", text: "Puppies delivered to loving homes all around the world." },
];

export const INCLUDED = [
  "Vaccinated",
  "Dewormed",
  "Verified health certificate from licensed vets",
  "Thoroughly checked before joining your family",
];

export const IMPORT_STEPS = [
  { title: "Reserve your puppy", text: "Tell us which puppy has captured your heart." },
  { title: "Personalized consultation", text: "We finalize details with you and share updates on your puppy's journey." },
  { title: "Import and arrival", text: "We manage health checks, travel arrangements, and documentation." },
  { title: "Welcome home", text: "We help your new puppy settle in and ensure a smooth transition into your home." },
];

export const FAQS = [
  { q: "Are your puppies vaccinated and health-checked?", a: "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family." },
  { q: "Can I meet a puppy before I decide?", a: "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision." },
  { q: "Can I take my puppy home the same day?", a: "Local puppies are available immediately, so you can take your puppy home the same day." },
  { q: "Do you import puppies from abroad?", a: "Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you." },
  { q: "How does an imported puppy travel to Dubai?", a: "We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free." },
  { q: "Will I see photos and health details first?", a: "Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp." },
  { q: "Do you deliver?", a: "Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world." },
  { q: "Which breeds do you usually have?", a: "Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie." },
  { q: "Is there help after my puppy comes home?", a: "Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend." },
];

export function puppyTitle(p) {
  return p.name || p.breed;
}

export function puppySub(p) {
  return p.name ? `${p.breed} · ${p.gender} · ${p.age}` : `${p.gender} · ${p.age}`;
}

export function findPuppy(slug) {
  return PUPPIES.find((p) => p.slug === slug) || null;
}

export function findGone(slug) {
  return GONE_HOME.find((p) => p.slug === slug) || null;
}
