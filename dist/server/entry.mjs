import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DncDwcQV.mjs';
import { manifest } from './manifest_CiZWzrfP.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/articles/_id_.astro.mjs');
const _page1 = () => import('./pages/articles.astro.mjs');
const pageMap = new Map([
    ["src/pages/articles/[id].astro", _page0],
    ["src/pages/articles/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/terry/Project/sympoiesis-site/dist/client/",
    "server": "file:///Users/terry/Project/sympoiesis-site/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
