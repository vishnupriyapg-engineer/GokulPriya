/**
 * ✏️ ALL EDITABLE CONTENT LIVES HERE.
 *
 * Media "src" values:
 *  - Start with "/" → a file in the public/ folder (e.g. "/images/hero.jpg").
 *  - Anything else → a file path inside the matching PRIVATE storage bucket:
 *      birthday-images / birthday-videos / birthday-music
 *    These files are served to signed-in users through short-lived signed links.
 *
 * GALLERY TYPES:
 *  - "single": one photo + description
 *  - "album": cover photo + multiple photos + shared description
 *  - "music": cover photo + description + song
 *
 * For private image albums, use the exact paths inside the birthday-images bucket.
 * For private songs, use the exact paths inside the birthday-music bucket.
 */

export const site = {
  loginTitle: "Just for You ❤️",
  loginSubtitle: "Some memories are meant to be kept between two hearts.",
  loginButton: "Enter My World ❤️",
  welcome: "Welcome to our little world ❤️",
  heroCaption: "Some people become a beautiful part of our story.",
  teaser: "There's something I want you to see...",
  openHeart: "Open My Heart ❤️",
  birthdayTitle: "Happy Birthday, My Favorite Person ❤️",
  birthdayMessage: [
    "Today is your day, but somehow you have made so many of my days special too.",
  ],
  signature: "— Always yours",
};

export type GalleryType = "single" | "album" | "music";

export type Memory = {
  src: string;
  title: string;
  date: string;
  description: string;
  galleryType?: GalleryType;
  /** Extra photos for Type 2. The first cover photo can also be included here. */
  photos?: string[];
  /** Audio file path for Type 3, from public/ or private birthday-music storage. */
  song?: string;
  songTitle?: string;
  songArtist?: string;
};

export const heroMemory: Memory = {
  src: "/images/hero.jpg",
  title: "That Beautiful Moment",
  date: "DD / MM / YYYY",
  description: "One of those moments that became a beautiful memory.",
  galleryType: "single",
};

/**
 * GALLERY CONTENT
 *
 * Replace example paths with your actual uploaded image/audio paths.
 *
 * Type 1 ("single"): use src + description.
 * Type 2 ("album"): use src as the cover and photos for all images in that album.
 * Type 3 ("music"): use src + description + song.
 *
 * Existing six memories are retained as Type 1 so the gallery has content immediately.
 * Change galleryType to "album" or "music" to put a memory into another category.
 */

export const memories: Memory[] = [
  // ─────────────────────────────────────────────────────────────
  // TYPE 1 — SINGLE PHOTO + DESCRIPTION
  // ─────────────────────────────────────────────────────────────
  
  // ─────────────────────────────────────────
  // TYPE 1 — 27 INDIVIDUAL PHOTO MEMORIES ❤️
  // ─────────────────────────────────────────

  {
    src: "/images/memory-01.jpg",
    title: "Our First Memory ❤️",
    date: "DD / MM / YYYY",
    description: "Every beautiful story begins with a little moment.",
    galleryType: "single",
  },
  {
    src: "/images/memory-02.jpg",
    title: "A Little Happiness 💗",
    date: "DD / MM / YYYY",
    description: "Your happiness has always been one of my favourite sights.",
    galleryType: "single",
  },
  {
    src: "/images/memory-03.jpg",
    title: "Golden Hour 🌅",
    date: "DD / MM / YYYY",
    description: "The moment was beautiful, but the memory is even more special.",
    galleryType: "single",
  },
  {
    src: "/images/memory-04.jpg",
    title: "Just Us 🫶",
    date: "DD / MM / YYYY",
    description: "Sometimes, being together is more than enough.",
    galleryType: "single",
  },
  {
    src: "/images/memory-05.jpg",
    title: "A Day to Remember ✨",
    date: "DD / MM / YYYY",
    description: "One of those little moments I wish I could experience again.",
    galleryType: "single",
  },
  {
    src: "/images/memory-06.jpg",
    title: "Your Beautiful Smile 😊",
    date: "DD / MM / YYYY",
    description: "A smile that can make even an ordinary day feel special.",
    galleryType: "single",
  },
  {
    src: "/images/memory-07.jpg",
    title: "Little Adventures 🌸",
    date: "DD / MM / YYYY",
    description: "Every little adventure becomes special when shared with you.",
    galleryType: "single",
  },
  {
    src: "/images/memory-08.jpg",
    title: "My Favourite Moment 💕",
    date: "DD / MM / YYYY",
    description: "A little memory that still brings a smile to my face.",
    galleryType: "single",
  },
  
    
  {
    src: "/images/memory-10.jpg",
    title: "A Moment of Magic ✨",
    date: "DD / MM / YYYY",
    description: "Some moments are impossible to explain but easy to remember.",
    galleryType: "single",
  },
  {
    src: "/images/memory-11.jpg",
    title: "A Sweet Memory 💗",
    date: "DD / MM / YYYY",
    description: "A memory I would happily keep close to my heart forever.",
    galleryType: "single",
  },
  {
    src: "/images/memory-12.jpg",
    title: "Our Little World 🌎",
    date: "DD / MM / YYYY",
    description: "In a world full of things, some moments feel completely ours.",
    galleryType: "single",
  },
  {
    src: "/images/memory-13.jpg",
    title: "The Happy Days ☀️",
    date: "DD / MM / YYYY",
    description: "A little reminder of the happiness we shared.",
    galleryType: "single",
  },
  {
    src: "/images/memory-14.jpg",
    title: "A Picture Worth Keeping 📸",
    date: "DD / MM / YYYY",
    description: "Some pictures hold feelings that words cannot describe.",
    galleryType: "single",
  },
  {
    src: "/images/memory-15.jpg",
    title: "A Special Day 🌹",
    date: "DD / MM / YYYY",
    description: "An ordinary day turned into something worth remembering.",
    galleryType: "single",
  },
  {
    src: "/images/memory-16.jpg",
    title: "Forever in My Memories ❤️",
    date: "DD / MM / YYYY",
    description: "No matter how much time passes, this memory will stay special.",
    galleryType: "single",
  },
  {
    src: "/images/memory-17.jpg",
    title: "A Little Togetherness 🫶",
    date: "DD / MM / YYYY",
    description: "The simplest moments together often mean the most.",
    galleryType: "single",
  },
  {
    src: "/images/memory-18.jpg",
    title: "A Beautiful Chapter 📖",
    date: "DD / MM / YYYY",
    description: "Every memory adds another beautiful chapter to our story.",
    galleryType: "single",
  },
  {
    src: "/images/memory-19.jpg",
    title: "The Moments We Keep 💕",
    date: "DD / MM / YYYY",
    description: "A moment captured in a picture and kept forever in my heart.",
    galleryType: "single",
  },
  {
    src: "/images/memory-20.jpg",
    title: "A Memory Full of Love 💗",
    date: "DD / MM / YYYY",
    description: "Some memories become special simply because of how they make us feel.",
    galleryType: "single",
  },
  
  {
    src: "/images/memory-23.jpg",
    title: "Our Sweetest Moments ✨",
    date: "DD / MM / YYYY",
    description: "The memories we create together are the ones I treasure most.",
    galleryType: "single",
  },
  {
    src: "/images/memory-24.jpg",
    title: "A Moment to Treasure 🌷",
    date: "DD / MM / YYYY",
    description: "A beautiful memory that deserves to be remembered.",
    galleryType: "single",
  },
  {
    src: "/images/memory-25.png",
    title: "A Little Piece of Happiness 💖",
    date: "DD / MM / YYYY",
    description: "Looking at this moment always gives me a reason to smile.",
    galleryType: "single",
  },
  {
    src: "/images/memory-26.jpg",
    title: "Another Page in Our Story 📖",
    date: "DD / MM / YYYY",
    description: "Every picture tells a little part of our story.",
    galleryType: "single",
  },
  {
    src: "/images/memory-27.png",
    title: "A Memory to Keep Forever 💗",
    date: "DD / MM / YYYY",
    description: "One more beautiful memory to add to our little world.",
    galleryType: "single",
  },



  // ─────────────────────────────────────────────────────────────
  // TYPE 2 — MULTIPLE PHOTOS + ONE DESCRIPTION
  // ─────────────────────────────────────────────────────────────
  {
    src: "images/hand/main.jpg",
    title: "Our Little Coffee Date ☕",
    date: "DD / MM / YYYY",
    description: `That day became one of my favourite memories.

Every little moment felt special because I was spending it with you. The conversations, the smiles, the coffee, and even the quiet moments became things I wanted to remember.

Whenever I look at these photos, I remember how happy I felt being there with you. It wasn't about doing something big. It was about being together and making an ordinary day feel beautiful. ♡`,
    galleryType: "album",
    photos: [
      "images/hand/main.jpg",
      "images/hand/hand1.jpg",
      "images/hand/hand2.jpg",
      "images/hand/hand3.jpg",
      
    ],
  },
  {
    src: "flowers/main.jpg",
    title: "The Flower Surprise 🌹",
    date: "DD / MM / YYYY",
    description: `I still remember the happiness hidden in this little surprise.

It wasn't only about the flowers. It was the thought, the timing, and the feeling that made the moment so special. These are the little things that stay in my heart long after the day has passed. 💗`,
    galleryType: "album",
    photos: [
      "flowers/main.jpg",
      "flowers/photo-02.jpg",
      "flowers/photo-03.jpg",
      "flowers/photo-04.jpg",
      "flowers/photo-05.jpg",
      "flowers/photo-06.jpg",
      "flowers/photo-07.jpg",
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // TYPE 3 — PHOTO + DESCRIPTION + SONG
  // ─────────────────────────────────────────────────────────────
  {
    src: "music-memories/surprise.jpg",
    title: "The Day You Surprised Me 💗",
    date: "DD / MM / YYYY",
    description: `Some moments become unforgettable without even trying.

Whenever I think about this day, I remember your smile and the happiness I felt. I wish I could pause time and stay in that moment a little longer.

I chose this song because it reminds me of you and of the feelings I sometimes cannot explain in words. Whenever it plays, I hope it brings this memory back to you too. ❤️`,
    galleryType: "music",
    song: "gallery/surprise.mp3",
    songTitle: "Our Special Song",
    songArtist: "Your Favourite Artist",
  },
  {
    src: "music-memories/sunset.jpg",
    title: "Our Sunset 🌅",
    date: "DD / MM / YYYY",
    description: `The sky was beautiful, but the memory became special because I shared it with you.

I wish we could collect more evenings like this one — little adventures, peaceful moments, silly conversations, and memories that belong only to us. 🌙`,
    galleryType: "music",
    song: "gallery/sunset.mp3",
    songTitle: "A Song for Our Sunset",
    songArtist: "Your Favourite Artist",
  },

  // Add more memories of any type below whenever you want.
];

export type Video = {
  src: string;
  poster: string;
  title: string;
  description: string;
};

// Upload video-01.mp4 etc. into the private "birthday-videos" bucket.
export const videos: Video[] = [
  {
    src: "/images/video-01.mp4",
    poster: "/images/memory-21.jpg",
    title: "Our Beautiful Beginning ❤️",
    description:
      "Every little moment with you becomes a memory I want to keep forever.",
  },
  {
    src: "/images/video-02.mp4",
    poster: "/images/memory-22.jpg",
    title: "Laughing Together 💗",
    description:
      "The laughter, the silly moments, and the memories we created together will always be special.",
  },
  {
    src: "/images/video-03.mp4",
    poster: "/images/memory-23.jpg",
    title: "Our Little Adventures 🌸",
    description:
      "Every adventure with you becomes a beautiful story I want to remember.",
  },
  {
    src: "/images/video-04.mp4",
    poster: "/images/memory-24.jpg",
    title: "A Moment to Remember ✨",
    description:
      "Some moments are too special to explain. I just want to keep them close to my heart.",
  },
  {
    src: "/images/video-05.mp4",
    poster: "/images/memory-25.png",
    title: "My Favorite Memories ❤️",
    description:
      "Looking back at our memories always gives me a reason to smile.",
  },
  {
    src: "/images/video-06.mp4",
    poster: "/images/memory-26.jpg",
    title: "Little Things, Big Feelings 💕",
    description:
      "It is the smallest moments that sometimes mean the most.",
  },
  {
    src: "/images/video-07.mp4",
    poster: "/images/memory-27.png",
    title: "Our Story 🌷",
    description:
      "Every day adds another little chapter to our story.",
  },
  {
    src: "/images/video-08.mp4",
    poster: "/images/memory-033.jpg",
    title: "Moments I Treasure 💖",
    description:
      "These are the moments I want to remember, even years from now.",
  },
  {
    src: "/images/video-09.mp4",
    poster: "/images/memory-21.jpg",
    title: "Just Us 🫶",
    description:
      "Sometimes, the happiest place is simply being together.",
  },
  {
    src: "/images/video-10.mp4",
    poster: "/images/memory-22.jpg",
    title: "Forever a Favorite 💗",
    description:
      "No matter how much time passes, these memories will always be precious.",
  },
];

export type Song = {
  src: string;
  title: string;
  artist: string;
  description: string;
  dedication?: string;
};

export const songs: Song[] = [
  {
    src: "/music/song-01.mp3",
    title: "Our First Song",
    artist: "Artist Name",
    description: "The song that was playing when it all began.",
    dedication:
      "Every time I hear this song, I hope it reminds you of how special you are to me. ❤️",
  },
  {
    src: "/music/song-02.mp3",
    title: "Late Night Drives",
    artist: "Artist Name",
    description: "Windows down, hearts open.",
    dedication:
      "If I could choose one person to share all my little adventures with, it would be you. 🌙",
  },
  {
    src: "/music/song-03.mp3",
    title: "Forever Kind",
    artist: "Artist Name",
    description: "For every feeling words couldn't explain.",
    dedication:
      "Some feelings are too big for words. This little song is my way of sharing them with you. 💗",
  },

  // Add more songs below whenever you want.
];
