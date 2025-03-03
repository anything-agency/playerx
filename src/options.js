export const options = {
  npmCdn: 'https://cdn.jsdelivr.net/npm',
  players: {
    html: {
      type: 'video',
    },
    vimeo: {
      pattern: /vimeo\.com\/(?:video\/)?(\d+)/,
      type: 'vimeo-video',
      pkg: 'vimeo-video-element',
      version: '1.0',
      jsUrl: '{{npmCdn}}/{{pkg}}@{{version}}/+esm',
    },
    youtube: {
      pattern: /(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/,
      type: 'youtube-video',
      pkg: 'youtube-video-element',
      version: '1.0',
      jsUrl: '{{npmCdn}}/{{pkg}}@{{version}}/+esm',
    },
  },
};
