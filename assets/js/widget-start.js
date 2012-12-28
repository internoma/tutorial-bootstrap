new TWTR.Widget({
  version: 2, type: 'profile', rpp: 15, interval: 30000, width: 'auto', height: 400,
  theme: {
    shell: {
      background: '#5894d0',
      color: 'white'
    },
    tweets: {
      background: '#ffffff',
      color: '#6f7070',
      links: '#006da3'
    }
  },
  features: {
    scrollbar: true,
    loop: false,
    live: false,
    hashtags: true,
    timestamp: true,
    avatars: false,
    toptweets: true,
    behavior: 'all'
  }

}).render().setUser('tutobootstrap').start();

