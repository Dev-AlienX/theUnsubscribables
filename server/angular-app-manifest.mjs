
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/observable",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/observable"
  },
  {
    "renderMode": 2,
    "route": "/observer"
  },
  {
    "renderMode": 2,
    "route": "/subject"
  },
  {
    "renderMode": 2,
    "route": "/behavior-subject"
  },
  {
    "renderMode": 2,
    "route": "/replay-subject"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6547, hash: 'af2d0a2f50964ec2f6cd5e6839073a62b553a44e4241614b29a255fe59130190', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6529, hash: '409dd899babfe8c1d359818a1c36d9d256e9d5f1d21c8d300d60f492eddbb422', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'observable/index.html': {size: 19015, hash: '8d84db425f3bf942e7ce9d85790c8093612403da8d3661625332536ef67268d4', text: () => import('./assets-chunks/observable_index_html.mjs').then(m => m.default)},
    'observer/index.html': {size: 17265, hash: 'b1352a0429dde6d1f9058401005d57b717eda2ec53648c959a67cceacfd893f3', text: () => import('./assets-chunks/observer_index_html.mjs').then(m => m.default)},
    'replay-subject/index.html': {size: 17590, hash: '87f891e6f83f36b568d3f2e912366a7cb4208de60f80768883798e78fa971696', text: () => import('./assets-chunks/replay-subject_index_html.mjs').then(m => m.default)},
    'behavior-subject/index.html': {size: 17993, hash: '68a7164382f48435d05f6e290286263eec524383758d339021c5147d87b4c91b', text: () => import('./assets-chunks/behavior-subject_index_html.mjs').then(m => m.default)},
    'subject/index.html': {size: 17835, hash: 'e1ce713b738ddd30239cf1f411894e77fe0d9bb0336e33f828936f65d2388083', text: () => import('./assets-chunks/subject_index_html.mjs').then(m => m.default)},
    'styles-25OHDSAE.css': {size: 416, hash: 'SGxZ/87A45A', text: () => import('./assets-chunks/styles-25OHDSAE_css.mjs').then(m => m.default)}
  },
};
