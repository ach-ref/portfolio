'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c29c06aad713989850c509f48335fbc7",
"version.json": "5fc10240b73452c6a64964c44206397c",
"favicon.ico": "9e619875e5f4cca34fc155e2483839f7",
"index.html": "7baf4d114fb7ce5b147d408c56247eac",
"/": "7baf4d114fb7ce5b147d408c56247eac",
"main.dart.js": "dec7d178242a8c797fddeeed5a659e03",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "42efe5889a2413fede092dac1dcf442f",
"icons/Icon-192.png": "080f4d64560badf19b2ef529ca9df272",
"icons/Icon-maskable-192.png": "080f4d64560badf19b2ef529ca9df272",
"icons/Icon-maskable-512.png": "ce970bbdda0a275a3f060c44cd4f02df",
"icons/Icon-512.png": "ce970bbdda0a275a3f060c44cd4f02df",
"manifest.json": "2e80b11771bfece860bf33f24e3b47ca",
"assets/AssetManifest.json": "b88544f5e4ad830d9c7d5dde4b23f0e6",
"assets/NOTICES": "2167ebe7ac3572355b063b26496dff99",
"assets/FontManifest.json": "31f5935d67c63d1cb0015a7faa3cdcbc",
"assets/AssetManifest.bin.json": "562ce2eb33774a0e3a0e7fa7cacef935",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7a2ac6b4340ad9e43f6c3d38090a3562",
"assets/fonts/Merriweather-Bold.ttf": "79ea53fed59f391498dfc6f2fbea97c2",
"assets/fonts/Merriweather-Regular.ttf": "e2f219e63a575a41e10f991e9c95819a",
"assets/fonts/Merriweather-Light.ttf": "eccb6c6a243a3d44219648b6cdbc58ce",
"assets/fonts/Merriweather-BoldItalic.ttf": "fee74a810c9df73fe7218e4ff5815830",
"assets/fonts/Merriweather-BlackItalic.ttf": "4c5b0354e588a8387e588ccdd4fc2dd8",
"assets/fonts/MaterialIcons-Regular.otf": "57b5dc04776e8058d6c7a8c46d622614",
"assets/fonts/Merriweather-Italic.ttf": "b974ea37b30597dbf7b8d6d0ef38de89",
"assets/fonts/Merriweather-Black.ttf": "3fc5af7aaeb3de5b417fcfbd8a8b10c2",
"assets/fonts/Merriweather-LightItalic.ttf": "e5ce4649f1b543ef4431a3e149271bea",
"assets/fonts/SuperPixel-m2L8j.ttf": "be9001e31d526623d33b4091fa344fe3",
"assets/assets/images/11-door/opening_46x56.png": "ee0e10338434390644b7e0b9c4af51b9",
"assets/assets/images/11-door/idle_46x56.png": "d455593acbdec44163b68a8a93ca3e51",
"assets/assets/images/11-door/closing_46x56.png": "357efaebc1c91b54ccd3e44057fdafe7",
"assets/assets/images/08-box/box_pieces_3.png": "88f5407ea16a8a5315988dd0fe24177d",
"assets/assets/images/08-box/box_pieces_2.png": "56ea641e0f7adb44f63f5dc84501f092",
"assets/assets/images/08-box/idle.png": "a9876a173d24228bd4f0c73272d6a9af",
"assets/assets/images/08-box/box_pieces_1.png": "40791353c480e6e81e42da2bb621941d",
"assets/assets/images/08-box/box_pieces_4.png": "ee1b77d3de63dd0e698f97665a5267ec",
"assets/assets/images/08-box/hit.png": "8c013a1494aab17cb0d269123d18136a",
"assets/assets/images/14-tilesets/decorations_32x32.png": "57a10a1f1541b5d90b148dec7333071d",
"assets/assets/images/14-tilesets/terrain_32x32.png": "f3a309830b6c6a52a7d9db9802ce4315",
"assets/assets/images/01-king_human/fall_78x58.png": "0bfb7575ff7256bf6e07d65923eeb4ca",
"assets/assets/images/01-king_human/idle_78x58.png": "d41b7fa29493aefcb66f02ec4c3fc006",
"assets/assets/images/01-king_human/run_78x58.png": "406653b9909821ca064552e5ac0ff4e8",
"assets/assets/images/01-king_human/ground_78x58.png": "22754689f98cadba33e53b51b8914720",
"assets/assets/images/01-king_human/door_in_78x58.png": "d6586c949ff48be26e34c461de295e37",
"assets/assets/images/01-king_human/attack_78x58.png": "e7df2f63db3d5989c3b7ed1d3d1d512b",
"assets/assets/images/01-king_human/door_out_78x58.png": "bb0540b9eeccb556af4a8212452a137e",
"assets/assets/images/01-king_human/dead_78x58.png": "f74331c8916fdd3e65f28958acfeb3c1",
"assets/assets/images/01-king_human/jump_78x58.png": "0210a4274368a3244aded52594126675",
"assets/assets/images/01-king_human/hit_78x58.png": "b8f75d758e531af4a9350865cd9023fc",
"assets/assets/tiles/Terrain.tsx": "f91c416aaa43a3eb0672356c2fc9a8e6",
"assets/assets/tiles/Decorations.tsx": "00de695aa903899c1d4d73f3d644b02a",
"assets/assets/tiles/Pixel%2520Adventure.tiled-project": "97165873765b29a5041f09e541be15d5",
"assets/assets/tiles/map.tmx": "7b894e78f04d09e172ce3307b2fe5cb3",
"assets/assets/tiles/Pixel%2520Adventure.tiled-session": "5fdc786bcf1c59c507b320aabbe1982c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
