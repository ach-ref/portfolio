'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "94762bbc5d86fc499cd38ad429f392a3",
"version.json": "5fc10240b73452c6a64964c44206397c",
"favicon.ico": "9e619875e5f4cca34fc155e2483839f7",
"index.html": "20b0ad3089fa3a83684e7bbaccfa006b",
"/": "20b0ad3089fa3a83684e7bbaccfa006b",
"main.dart.js": "28487e72053cf1b44e7a2b82da790ebb",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "42efe5889a2413fede092dac1dcf442f",
"icons/Icon-192.png": "080f4d64560badf19b2ef529ca9df272",
"icons/Icon-maskable-192.png": "080f4d64560badf19b2ef529ca9df272",
"icons/Icon-maskable-512.png": "ce970bbdda0a275a3f060c44cd4f02df",
"icons/Icon-512.png": "ce970bbdda0a275a3f060c44cd4f02df",
"manifest.json": "2e80b11771bfece860bf33f24e3b47ca",
"assets/AssetManifest.json": "1c5aee399422e7d87d8284c822dae9a4",
"assets/NOTICES": "b601f72ae002863d8e1d26f70be32472",
"assets/FontManifest.json": "f53127c6e7c421790b65790f757a54e5",
"assets/AssetManifest.bin.json": "4e5a9d7de5a1144547ff618277ce4c99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4c4725e25740cdfe37dedf5675318337",
"assets/fonts/Merriweather-Bold.ttf": "79ea53fed59f391498dfc6f2fbea97c2",
"assets/fonts/Merriweather-Regular.ttf": "e2f219e63a575a41e10f991e9c95819a",
"assets/fonts/Merriweather-Light.ttf": "eccb6c6a243a3d44219648b6cdbc58ce",
"assets/fonts/Merriweather-BoldItalic.ttf": "fee74a810c9df73fe7218e4ff5815830",
"assets/fonts/Merriweather-BlackItalic.ttf": "4c5b0354e588a8387e588ccdd4fc2dd8",
"assets/fonts/MaterialIcons-Regular.otf": "f9bace2c50672975aeafc729b9a1751c",
"assets/fonts/Merriweather-Italic.ttf": "b974ea37b30597dbf7b8d6d0ef38de89",
"assets/fonts/Attack-Of-Monster.ttf": "13fb07da036d8379a70ac930d4636604",
"assets/fonts/Merriweather-Black.ttf": "3fc5af7aaeb3de5b417fcfbd8a8b10c2",
"assets/fonts/Merriweather-LightItalic.ttf": "e5ce4649f1b543ef4431a3e149271bea",
"assets/assets/images/background/gray.png": "31fb9bc36ec926ee64d999d3387b7e09",
"assets/assets/images/background/yellow.png": "c3f96416e21f366bc0c3635ce5b530d5",
"assets/assets/images/background/pink.png": "31b5e360eb9610c58138bb7cfdfb96a1",
"assets/assets/images/background/blue.png": "f86e07aab82505fc49710152f83cc385",
"assets/assets/images/background/green.png": "e6eeace8a9d516f2e9768e5228e824fb",
"assets/assets/images/background/brown.png": "45c9c887fa73b0ade76974de63ab9157",
"assets/assets/images/background/purple.png": "f8cc6aa8fd738e6e4db8b6607b7e6c37",
"assets/assets/images/main_characters/virtual_guy/idle_32x32.png": "1cb575929ac10fe13dfafa61d78ba28d",
"assets/assets/images/main_characters/virtual_guy/fall_32x32.png": "5eb8c32845fad5fcc7794247eb91aed0",
"assets/assets/images/main_characters/virtual_guy/run_32x32.png": "016f388a07f71a930fd79a7a806d5da8",
"assets/assets/images/main_characters/virtual_guy/jump_32x32.png": "f28e95fc98b251913baf3a21d5602381",
"assets/assets/images/main_characters/virtual_guy/wall_jump_32x32.png": "76cbdd4a22d50bd65ac02be8a5eb1547",
"assets/assets/images/main_characters/virtual_guy/hit_32x32.png": "bbd39134a77e658b0b9b64ded537972c",
"assets/assets/images/main_characters/virtual_guy/double_jump_32x32.png": "612926916a3e8c5deff2023722c465ac",
"assets/assets/images/main_characters/appearing_96x96.png": "9449bf1f8d68ac08331aa091d6095e34",
"assets/assets/images/main_characters/mask_dude/idle_32x32.png": "29c95dbb63a9bf44c42821aa0cf49de8",
"assets/assets/images/main_characters/mask_dude/fall_32x32.png": "469d2d7814fa8258325eb5d305808315",
"assets/assets/images/main_characters/mask_dude/run_32x32.png": "b04bbc82dc692516a4b13c0d9d5b9ebd",
"assets/assets/images/main_characters/mask_dude/jump_32x32.png": "99da59b514370539951a76ba1fe51821",
"assets/assets/images/main_characters/mask_dude/wall_jump_32x32.png": "552254b40eac6d10d2c3d779edb92116",
"assets/assets/images/main_characters/mask_dude/hit_32x32.png": "d03a7bbce7fbda59dd057397f86a8899",
"assets/assets/images/main_characters/mask_dude/double_jump_32x32.png": "5afb26aa4240eff1eab105eb3263ab83",
"assets/assets/images/main_characters/pink_man/idle_32x32.png": "1b35f85f1241dc1f0597cafbe1eac7f6",
"assets/assets/images/main_characters/pink_man/fall_32x32.png": "a20bd61d76132e4301fcfe7aa02ca9ba",
"assets/assets/images/main_characters/pink_man/run_32x32.png": "25fcce89dfb6673a81d384091c87353d",
"assets/assets/images/main_characters/pink_man/jump_32x32.png": "cafaf2f48f36c9a6655a37f9c1c47b4a",
"assets/assets/images/main_characters/pink_man/wall_jump_32x32.png": "955d352171a2b666ae705b6205856ce1",
"assets/assets/images/main_characters/pink_man/hit_32x32.png": "5d93268a09fb2959e1755da4ba201f9e",
"assets/assets/images/main_characters/pink_man/double_jump_32x32.png": "c76baa04d956c9d985c79643d7b2f672",
"assets/assets/images/main_characters/ninja_frog/idle_32x32.png": "cb655be6f9354444720c7ce1dbd61dae",
"assets/assets/images/main_characters/ninja_frog/fall_32x32.png": "ef8f3627041b7ae2a1dc76dfc3e419f3",
"assets/assets/images/main_characters/ninja_frog/run_32x32.png": "fb191b4e6ac599286c38e496a700cfd2",
"assets/assets/images/main_characters/ninja_frog/jump_32x32.png": "4f048ccbc783c8eb3824be9651da8a34",
"assets/assets/images/main_characters/ninja_frog/wall_jump_32x32.png": "37ec0be0f82c3750a07efa558c032ee7",
"assets/assets/images/main_characters/ninja_frog/hit_32x32.png": "4c1ba2bf4e576409abbbd1aacc91d51d",
"assets/assets/images/main_characters/ninja_frog/double_jump_32x32.png": "351c1df6eb5ac94209e8e490ab816879",
"assets/assets/images/main_characters/desappearing_96x96.png": "1284313649da02eccc0d3ed6796996a3",
"assets/assets/images/other/confetti_16x16.png": "e23a201b4bfa7999a176dc9ec004c7bc",
"assets/assets/images/other/dust_particle.png": "c72fceec8ccfcefc030fbc44ccdd68c4",
"assets/assets/images/other/transition.png": "676092b6943e94a165bea63707f4518f",
"assets/assets/images/other/shadow.png": "e0a519d1a807df82abc87e6a2375d20f",
"assets/assets/images/traps/saw/off.png": "66d27386fec46e0b052941957d9bdc22",
"assets/assets/images/traps/saw/chain.png": "69669f8f421b508058cdf1232dc49e28",
"assets/assets/images/traps/saw/on_38x38.png": "817477a39df8b330334e3866c1cb574b",
"assets/assets/images/terrain/terrain_16x16%2520copy.png": "8ccb3b05008625c774cc6477ac71b456",
"assets/assets/images/terrain/terrain_16x16.png": "df891f02449c0565d51e2bf7823a0e38",
"assets/assets/images/items/chat_bubble/!!!_out_24x8.png": "56d4a6664472718f6fa9e4aa0ac95aea",
"assets/assets/images/items/chat_bubble/dead_in_24x8.png": "285e53f8814cc6c556d9e2f1bdc0a3da",
"assets/assets/images/items/chat_bubble/hi_out_24x8.png": "95387c9999259fededf3acf19749d990",
"assets/assets/images/items/chat_bubble/boom_out_24x8.png": "b1f3c8f8592f284f0e00c74544ea36dd",
"assets/assets/images/items/chat_bubble/attack_out_24x8.png": "5f1b08568853349e61520cccb441663b",
"assets/assets/images/items/chat_bubble/wtf_out_24x8.png": "64864ad9d8eab83bd8f97e5eaa2bdd8b",
"assets/assets/images/items/chat_bubble/no_in_24x8.png": "ab9bd5b99ddb09e4aa3ab1327012b12a",
"assets/assets/images/items/chat_bubble/interrogation_out_24x8.png": "2edf4304dfd4510d74829e3a0aff402a",
"assets/assets/images/items/chat_bubble/loser_out_24x8.png": "64acd71a1f6804942e9b5f777f03955a",
"assets/assets/images/items/chat_bubble/hi_in_24x8.png": "05975787adaca0f68432ba60c49b0a2d",
"assets/assets/images/items/chat_bubble/loser_in_24x8.png": "9da2a2b04e9887993341a8f3dd193f25",
"assets/assets/images/items/chat_bubble/!!!_in_24x8.png": "58b086dbe06d6a87d4a9e47b743d255c",
"assets/assets/images/items/chat_bubble/wtf_in_24x8.png": "37188726354ecdd949dc92712726cf25",
"assets/assets/images/items/chat_bubble/hello_in_24x8.png": "a3f165561e8e914c1f31ee912f676381",
"assets/assets/images/items/chat_bubble/hello_out_24x8.png": "8e43ba609518595f598deb73e36a65e2",
"assets/assets/images/items/chat_bubble/attack_in_24x8.png": "4b1b505b59e3e2207b3000c1052318b6",
"assets/assets/images/items/chat_bubble/interrogation_in_24x8.png": "3f3f5c692c1e5ea3edc35e739a466c26",
"assets/assets/images/items/chat_bubble/no_out_24x8.png": "23f9cd7ad7a43f838c0d3d878d47ee07",
"assets/assets/images/items/chat_bubble/dead_out_24x8.png": "6615c49960963d4ce6139f8b94233030",
"assets/assets/images/items/chat_bubble/boom_in_24x8.png": "8e0c6c1fd39d57349ba52dcb9d08a437",
"assets/assets/images/items/checkpoints/checkpoint/checkpoint_no_flag_64x64.png": "9126203dc833ec3b7dfb7a05e41910e5",
"assets/assets/images/items/checkpoints/checkpoint/checkpoint_flag_out_64x64.png": "c4730e5429a75691e2d2a9351c76738e",
"assets/assets/images/items/checkpoints/checkpoint/checkpoint_flag_idle_64x64.png": "dd8752c20a0f69ab173f1ead16044462",
"assets/assets/images/items/checkpoints/start/start_moving_64x64.png": "3c1467f4bf5f1e0c877f66a8a05900b8",
"assets/assets/images/items/checkpoints/start/start_idle_64x64.png": "3b3666dde41d33e4ae75c6e614dd5f51",
"assets/assets/images/items/fruits/collected.png": "0aa8cdedde5af58d5222c2db1e0a96de",
"assets/assets/images/items/fruits/bananas.png": "03466a1dbd95724e705efe17e72c1c4e",
"assets/assets/images/items/fruits/pineapple.png": "0740bf84a38504383c80103d60582217",
"assets/assets/images/items/fruits/cherries.png": "fc2a60aee885c33d0d10e643157213e4",
"assets/assets/images/items/fruits/orange.png": "60e0f68620c442b9403a477bbe3588ed",
"assets/assets/images/items/fruits/apple.png": "de3dbfa7d33e6bb344d0560e36d8bf53",
"assets/assets/images/items/fruits/melon.png": "eb6f978fbf95d76587bcf656c649540b",
"assets/assets/images/items/fruits/strawberry.png": "568a3f91b8f6102f1b518c1aba0e8e09",
"assets/assets/images/items/fruits/kiwi.png": "3d903dd9bf3421c31a5373b0920c876e",
"assets/assets/images/enemies/mushroom/idle_32x32.png": "58e048ad4afa7199353949f5fa48c134",
"assets/assets/images/enemies/mushroom/run_32x32.png": "f4455c243603b217cbd950a3d49e62cd",
"assets/assets/images/enemies/mushroom/hit_32x32.png": "6a2f4c95e2d228163548e373a49ef680",
"assets/assets/images/enemies/bluebird/flying_32x32.png": "96b92c11650df1cb24b18b4dce30dc37",
"assets/assets/images/enemies/bluebird/hit_32x32.png": "d6f11c57b99d6eaa8e3e1c1ba8a01f28",
"assets/assets/images/enemies/chicken/run_32x34.png": "58190fdf957eaba5b783bbe2df837c2e",
"assets/assets/images/enemies/chicken/idle_32x34.png": "540724fcaccd692f5d3adb169fa8db2b",
"assets/assets/images/enemies/chicken/hit_32x34.png": "1a0b324bc2c06c132f6e17d509928a34",
"assets/assets/images/enemies/trunk/bullet.png": "4ee6624c19514d734351978ad50bcfdc",
"assets/assets/images/enemies/trunk/hit_64x32.png": "30b82b960f33a1b8be30c1a2a70c68fe",
"assets/assets/images/enemies/trunk/run_64x32.png": "4b6173eb09f0816c898e5a73edbd020f",
"assets/assets/images/enemies/trunk/idle_64x32.png": "9e4f5a2fe3ce00d4ad64859845a7ef0a",
"assets/assets/images/enemies/trunk/bullet_pieces.png": "a74632012dcebb913c092bb492628d90",
"assets/assets/images/enemies/trunk/attack_64x32.png": "f60bc0c750357fbdace60ffe687ed9fb",
"assets/assets/tiles/pixel-adventure.tiled-project": "97165873765b29a5041f09e541be15d5",
"assets/assets/tiles/map.tmx": "3c2c1b3b84e10898a441b5b0e1faedf1",
"assets/assets/tiles/pixel-adventure.tiled-session": "929cdc14d0db8ec069cc1b3b563b0f05",
"assets/assets/audio/enemy-hit.wav": "05a9b169afce603a4d7b0bdc2c5716dd",
"assets/assets/audio/jump.wav": "b2d517e6bb67634922ddc2baa4598918",
"assets/assets/audio/player-hit.wav": "54e449351a71441e195c16fee7de547b",
"assets/assets/audio/checkpoint.wav": "74981e0e8babde2fcb3e751d3e72b9ea",
"assets/assets/audio/fruit-collected.wav": "8bd09e7d6e24ae1947643ebd9796f0f3",
"assets/assets/audio/shoot.wav": "da78af6fb68ee2d5b8e50b4312e9b135",
"assets/assets/audio/menu-change.wav": "b684730012d55e42300a61f7787edcd0",
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
