'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4a5f9a5117cb815ebdee6e92effbc826",
".git/config": "33298989dd8cf0b94dd8b919b7e2b1ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3a19f77c8cb51d2a881ba9b0a9f9eef9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a682d60cac403af41bde7f75da109d55",
".git/logs/refs/heads/main": "a682d60cac403af41bde7f75da109d55",
".git/logs/refs/remotes/origin/main": "0b4cb47937ce3ec390b452553c7cda38",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/05/2536bff73d2fe09a6d67546c13ed771b7c9793": "fe347f06fe62327237dbde78ee03bbc0",
".git/objects/0d/6be5091f4c3f5f97fc0561ce6c5c9fe7b11f1e": "18ee6f1ba23a52197c7e88079d00d16b",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/1b/32ad530269d44d31d867a0623d381d13017550": "891ed7b4c4d4ca5e2c2cb39c97a84588",
".git/objects/1b/5b2e942ccb82bb269b156e241f3d4e12b98a3e": "c7a572abdfe29383dad137062b52e451",
".git/objects/1b/d726e919ff8bde85e8680b9c1b2047e8449d38": "20b8b023a6685dadec00aee25b3b0ae2",
".git/objects/1e/36e47b35fa862583b3753efeea62cc2625ae99": "2cd8ba047b347f12a3097738640a6a59",
".git/objects/1e/511d166fe01bf6f602dbc841dbca3764393af3": "9405fe7984bf852c32832c7b82d2362a",
".git/objects/22/dfad81b3f35ec0705f08d1425b36d632842b19": "1ce1d071d396f3552b3f8c26cb412a72",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/dae09b26f87b01c732cced4904f32f2a381e8d": "7d326e1e8facd1150683a5b5abeccfdb",
".git/objects/25/ad5fc695ede0f99d8f7b3a7cdf4da853a58256": "c9b4535650fd6b7aeade5402ee46f793",
".git/objects/2f/4ae7984fc35ca5589cf3cc16376f3ea0f6e13b": "3cfc053d90ad5932bbe8c1cdd16fa737",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/34/605515cdc533139a8de13de85b541196ea55c2": "b9fb323a8fb2523240f0d88357162f33",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/096667783c72be9e487495ffc0e085551dc521": "b81429618bb613954cc3725c98907db5",
".git/objects/38/80964ef0df745832b4fddaa2816b7e1b5d85ea": "2cd66fda4b389811cad4b9c773a12282",
".git/objects/38/8971d8410fcc06a0f51fc68cbbe2493c9adaaf": "8f70c26b7c725c89cf2367011286c246",
".git/objects/3a/0a6093731d5e14de611087ddd286b57157b815": "bcfb61e12157cb676ae86c10f75ed122",
".git/objects/3a/864820a458696b48aa17028f5187b02bb51c0d": "566c450147a31ddbe4593a823fc0ab1d",
".git/objects/3b/92798333d64fec62efa661f4ed8763dae4384a": "f92c55e786dc3680ccddf2c9c03505f9",
".git/objects/3e/c1c71187153fb5d8e4b2b11e42f93826c7a59c": "e9caa94bf479c29ef18a81ce56bb3aed",
".git/objects/46/92ac0e4c757454c0ee294d8681e2be96ae16b7": "ee9d2eafd745b5e7296e11c855d3a2d6",
".git/objects/48/dd7bb57cc61f116cac625656ebdf76a4ff34c2": "3afacf522ed40e77781f83f687bcf6fc",
".git/objects/4b/2c1143cc4f40f330c14f7c29347d307d752c63": "8db3591a095d5cd77b6314a98c637207",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/d7fd04881ae3527c38c6057c7a83d0a7df3ad1": "2ddc7d86c3b6c885788421c1699dc54e",
".git/objects/4e/6712f26d67784e2586e8b42e50a5e0b9e0ee16": "cba29912d15aecb020ce94409bd9ba68",
".git/objects/51/a1c7408a366d88faf2bfd10d53dfa4ba1e7200": "07bd4a000222dc4eff53063aab41c24d",
".git/objects/52/9aeb0de01b2be74535b06cd34b30f197a44056": "7b2dc65a3cf2633c173ad054688db2b4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/031085b1478121b462c9cc1dd08fb22335f393": "f018db863fd02fd4cf2d7d18d1d3a595",
".git/objects/58/93dfd99680b9faa032a7293fc672a6b06b924c": "dfc5de8625f2bd6666d3a09804221123",
".git/objects/62/59b232ad3787552bb0620313b8030775465fd0": "e10d78baa95cbcbf90f2b449a0b3be02",
".git/objects/62/c4992a7266770b85e51c8053b14953d371a007": "a677c48cc3f6917b553648fac5717280",
".git/objects/66/2ad086abd6aaeed53a4e89020aab3a04ae4869": "4c878337d028f17a66dcc97ff09549f2",
".git/objects/67/56b0b906275f606a24fa1b93a6c925c41c175c": "831158b7e0fdd0c2278aeec5b4ee71f3",
".git/objects/6f/99e23cadff126c95e225da58ced1528ca76ab8": "0f67202a7503458905b20a5d0160bd53",
".git/objects/72/0c1d49f776d110119a97c26275b6bbd3510d5b": "6131cdb2b6a0cb100995364c66b5e175",
".git/objects/72/bb3cd264302ebbd2629266fa6cf022aab9f4a3": "abf45fcdf4180229140157f021b1c8f7",
".git/objects/78/4a7b48a8043ac376ab6962a4280d81dce33933": "501eb23a44f7dfdb8f39fee8ce10d422",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/b94b8b93f5d453f1622d3f46e8bc0c373f759c": "5d684f2b60618011476a34eafd88c154",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/96/cb716b4506af05e163e480624f7ceb4975447c": "68bcdcd800754c2f41456610b36fc8b7",
".git/objects/98/e7bc47096ff3bf1abcf74fa648e141c223ac40": "410bfe4c1a2e612713a57bcf39dc091b",
".git/objects/9d/179fdcad8ff0da6b733f9492b780fcf2606b6f": "b0671154e9bb4564d6e07ecb0a1b9f28",
".git/objects/a5/a40029254c2dc51c3f1991bc093c859102b1da": "009e32ac44502675d186653a48ce228f",
".git/objects/a5/e1d53f3672a4151cfa9b3ce4480d6642800fe6": "1a7b611005256d685c8e632dbd742bc5",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/af/69afefb5025bf8abc59c0a71be4951434e3088": "9a9b0af44b6646e73bc350bdeec24e39",
".git/objects/b0/6b4644b0c8ef5fece1ce062a09c8dc57ddd1a0": "153c5e8997cf041e97b6c2cfbbd77330",
".git/objects/b2/1d640fbc37e02af7a590e056a01f48eeb43584": "24daf498b2d32973763e8632689f4e0a",
".git/objects/b3/6e09cad4ee88d20e3c09016f92cf9116624762": "c899e65a1181c118face979e86b3c3a8",
".git/objects/b3/c4aa82d135236b40fc6cd5a28824f4e2661f3f": "3ae4ddc087af821945e380c3dadd7c85",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a126189730546f1f4e385d49a48d1295a391d7": "a596e48905f9bf0063e97d0ee485d277",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/64797af33b8c218a01b273f0ae61181c9c9863": "44e7a23bdc81a00751818ca489fb2204",
".git/objects/bf/33b9060606d2fb143911a35ef2d09f226770b6": "ec5b9353e74e886546c021c97f260b1b",
".git/objects/c5/6054b28e81857567510559c3f17cdeb9168dfc": "e05ba53073a19439f779ac40906d23a1",
".git/objects/c6/e99947483479b07540eaf2e9746f906942a154": "a1d6e0076ba9f5a5ee214a7cafc34664",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c8/58d99aaf1bb61c67308d856d0f7ff7cda71454": "b10f3ea5a7392f78038f221f2be00bed",
".git/objects/c9/19980a248ac8af9687778cc4ff323e0b1199d2": "ef9b2cd66fa78e31a5ea885fec51259f",
".git/objects/cb/dd6fa9a8f0a87dd56825a6a2bb63db596ddffa": "890cd1748eb595063ff54e785c73083c",
".git/objects/cb/dee57c892800f0e46cc9ecbed08e222f868d14": "66b61f3ae9ff2c0941bdbd943e4f5320",
".git/objects/cf/5329c480b81778304c8e83e3ad677d33ef8527": "9b57f17ba05d633547095814f6532674",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e1/a668237e6f48b0d455e21487e184302b45704b": "dd0a52a8f0eb0e8e185c33f0134ee9ce",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/6eee1bd1f03ee392b6e29fc771bb0ac1efc4c4": "3177cddaee3dbe4f9b4fe1bb9e6ed3c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/66e42cdeaba7e0724c8b955842321f3aeef23d": "2d827e018db91b4f1f3f2d1d3af473f9",
".git/objects/f4/74eb2159bab34b768fc23179cee880c7db5e5e": "5acb3bd9bf08d79b9b5c6e3f7666c111",
".git/objects/f6/5e753ca8c5d2136339499eafc5d1828b56532b": "6e3be57584aa440450908e9fc8ade854",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/f5fb68357f3f959616d9b55fd3aa2e2ab72556": "4001dfc30f980da6cc48109a577ebd27",
".git/refs/heads/main": "425beef5687ad198194ba487e9ca9d36",
".git/refs/remotes/origin/main": "76c5a856284138f1dcab3746f0005798",
"assets/AssetManifest.bin": "90c0fa97168e275137ae54e8376afedd",
"assets/AssetManifest.json": "2746c3c4e5720e4694220fafb052112f",
"assets/assets/android_guy.glb": "b1754b67c87f53d59fdb2a7872bf026c",
"assets/assets/coding.png": "52581f07a07fff996d08894ea0a67a69",
"assets/assets/icons-portfolio/blender.svg": "cee746ede838646c42913949cfc18334",
"assets/assets/icons-portfolio/dart.svg": "dfdbca005e5da5061325a8245fb65580",
"assets/assets/icons-portfolio/davinci-resolve.svg": "a6ed6ee0c850d3dedb8df2fbedead7d4",
"assets/assets/icons-portfolio/figma.svg": "b3325a61e6b19911f1b26062a046e6b1",
"assets/assets/icons-portfolio/firebase.svg": "e1b3ca5c118c5327aaafe13fd80508c0",
"assets/assets/icons-portfolio/git.svg": "a7c744ac99cbe7503b98b2bb2e133004",
"assets/assets/icons-portfolio/linux.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons-portfolio/photoshop.svg": "b69ae5f6e90c3b81448fe05939649f8a",
"assets/assets/icons-portfolio/python.svg": "e06b30f731958037cf7dfa42157990aa",
"assets/assets/icons-portfolio/vs-code.svg": "a17799b66e70b9a3720d538b0a29cd00",
"assets/assets/logo/email.png": "57da3f25fc056e8a4e002179a36aa3d7",
"assets/assets/logo/file.png": "822184d8d5978eea3df7c24b826f3918",
"assets/assets/logo/fiverr.png": "c15746670dc05d6e6b61d19c05224dc8",
"assets/assets/logo/github.png": "454ba95f7db501609f6f4e9e2de0d47a",
"assets/assets/logo/gmail.png": "4e8bd7afd38ed8859e18a1b1af6bbfe5",
"assets/assets/logo/instagram.png": "cf17ea54cb237896927dd48cfd9aa8c6",
"assets/assets/logo/link.png": "b794960f250085991dd838e3e8ee9400",
"assets/assets/logo/linkedin.png": "3ed646f25481089a1347452d9507d52c",
"assets/assets/logo/twitter.png": "f1b9f624cd927f343286cbd57188dd30",
"assets/assets/mini_macbook_pro.glb": "6f786d8ec1689f3d8ecfd3f182eeb1de",
"assets/assets/roblox_minion_gangnam_style.glb": "1f848523c1cd727b257c81643bc024a7",
"assets/assets/Secure-login-pana.svg": "a082fb2fb191fc89346aeebf1083a2e8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "fe376c420dd34a03c50a70dcee8b1b8d",
"assets/NOTICES": "1249295ecbddc1b2222fca43318cb359",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "df54a7c8a00b32f4ccee2c6187c2659d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "da78ea377063edd4091cbcb6c86fab75",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "90e9fb8d5542bdedac80c6050aab199e",
"assets/packages/o3d/assets/model-viewer.min.js": "4226392bee9372f20a688343e51e7b54",
"assets/packages/o3d/assets/template.html": "24a1f29951029adea5122572451138fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ecc9265ebe1a624f7b57cab7372d5492",
"/": "ecc9265ebe1a624f7b57cab7372d5492",
"main.dart.js": "ba782cbe3f8abe1b540f2f345d63f5bf",
"manifest.json": "29619f7d8f564fd21dde37d14be56562",
"version.json": "4f02cdeb1ea35feb2bf38ad7663dfc17"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
