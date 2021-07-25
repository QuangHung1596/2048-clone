'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d530d7c2725ee414f2c3673e836725c4",
".git/config": "62e82ff98b3c2ba120671c10859821a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eeb5baaa85a860e687c31e7cd7fcc207",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "94907083daa6dd0e3f0d98a2ebb18381",
".git/logs/refs/heads/main": "a6612182132beb63ed2869f630f9f22a",
".git/logs/refs/remotes/origin/main": "e75c34c926a1c3f66766704adbafe6a8",
".git/objects/03/eb123665692f2e7c3753a924b3be569a0d4205": "28b59fb5ec5b8a625774428dbf772eea",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/30/ee031048b20d9f61e6117ed955463806605bea": "ef5c1eeda50a1a617c20bb5e55f7692c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/7a3b6341e82c763599e97dcc2df9550fb05ce5": "26399c271a00911af46c55b97db5fdd3",
".git/objects/3f/68dffc7f178da2fd68a7e768b58a6b9bf14bdb": "7dd02069443e814430a5003298266042",
".git/objects/53/7c0d338ef719026fe5a245dafe02f0b85813a3": "5f4cd5fa98c2cc688fa18a5d1947a60c",
".git/objects/58/4279dc227e0d5d211b2d237ab5e6fdc74d3686": "25e7f2110bd5589faaa9db034f41c063",
".git/objects/68/230700203f8ce002384d996afce96de15b7775": "2be717a28ccc6999f46d6514da27d4df",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/c39ac88b36f4117956f94dc0e1279be3301e80": "76b1c6521e4d54fd30e5f51d528a512e",
".git/objects/87/aa5e7318e3444628422c178503c151c17918ed": "2784ca644227fd7fc07dbcf26d6df4e3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/bf0bd1fe9ab1e61db799fe7d8ea0a4d5060e29": "c0c70b9a47af2379898fe8fe75954ff2",
".git/objects/8d/c9381751e8d25f5b618b7ddb9d5c66cd185514": "ed78f6e2c7c84607d71938bab74befc5",
".git/objects/8e/0127ecc1b1751bd4b3a2e02f65b7e039dae2fa": "c2e1f68e5141e7f394fd2ed9a82382dc",
".git/objects/9d/21d775df4626b1942c4392bf76920ac08b32cb": "f0e48269db7ac0aa5453dd5705d1fbe5",
".git/objects/9e/9976ed0acd9d4c8ab50501d8bb673039dcad83": "24bd9c1a97f1dcec4c1fbf04f351abb6",
".git/objects/9e/d99e7eedac7d853c12a8edc8c0677efc5c0d97": "afec06054b878a51815a10088f5bca9b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/9d1eefaf4ea09fc7af21b4c80f67caabaaf494": "dda7e6bbf8d1eba515b543418e431c3e",
".git/objects/b1/b27c2b4dea7548dc29f395afa0d370bd59a623": "dc1d19dbca29e59339507f45913d14f9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/413476309f7c3ebbda559f71717883d636032b": "021a9366885498adcec65aebc73e08d8",
".git/objects/c0/2b01bea3c87fc83fd44c5ecb593e94102f6e65": "868343dfa32f4fdaca8dbc142f1b7c59",
".git/objects/c7/3d7741b1b9bd66015765c89ece441f89bed411": "6a5d3c3859d543b6be82f749c84e065b",
".git/objects/d3/92dd580b1710642976c7aba755dc3c5b718fc3": "f57360dad5799ec329a61710567f039a",
".git/objects/d3/bee631138206a78564aa235bd05ac4cd1f9d2d": "cbb023608b53a1e12b25138c66d07b32",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/3e6bd2141a498a3df23f812d24ab51e208d9c0": "83fea7347648eeee4565cb6e598e0fd7",
".git/objects/f2/55257a815a9f4f577c49a8cef0a818efd6a8ed": "d9f4249f1a2cf3e82c7c866ca48706e4",
".git/refs/heads/main": "ff0f706f52c17769c9666423fcf506ff",
".git/refs/remotes/origin/main": "ff0f706f52c17769c9666423fcf506ff",
"assets/AssetManifest.json": "c19be89ecc0a08563c56f02d6e78339f",
"assets/assets/fonts/Manrope-Bold.ttf": "656753569aef606dd528cc6bdf672cdc",
"assets/assets/fonts/Manrope-ExtraBold.ttf": "47e356f61dca7aa2dfba5593e000c4f1",
"assets/assets/fonts/Manrope-Light.ttf": "55aaaa1366df7c6544c2204b032a6e31",
"assets/assets/fonts/Manrope-Medium.ttf": "6196e0dab83345b15290ee22620358c1",
"assets/assets/fonts/Manrope-Regular.ttf": "0b726174d2b7e161b9e5e8125bf7751a",
"assets/assets/fonts/Manrope-SemiBold.ttf": "255d425d09667bc095e79a8bd8081aba",
"assets/assets/images/avatar_0.jpg": "d1f74224c9b344808b6fff0fb3a74cec",
"assets/assets/images/avatar_1.jpg": "fe6fa70791fa781e321497f448b00a30",
"assets/assets/images/avatar_2.jpg": "20a4a7d5cfefad16ae01847fbdaa4196",
"assets/FontManifest.json": "a877a2706f8248049264e28e9eddb1d1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3302fe79a32af7f089663d74b2bf2b67",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f76940a698d5ac171a38e58b59b7f99f",
"/": "f76940a698d5ac171a38e58b59b7f99f",
"main.dart.js": "cbd359bc34399a74efc4c7d5f7df109d",
"manifest.json": "23081b3722dd9a58eb3b0421dc25306f",
"version.json": "c1ade7eb46eeda08bfd3ac5cda92ed35"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
