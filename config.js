var config = {
  // Twitter API (Proxy) URL
  baseUrl: 'http://localhost:7890',

  debug: false,
  title: 'Indy Big Data 2014 Conference | Based on Twitter Wall by @rem',

  search: "from:@indybigdata OR 'indybigdata' OR 'indy big data' ",
  // list: 'fullfrontalconf/delegates11', // optional, just comment it out if you don't want it

  timings: {
    showNextScheduleEarlyBy: '5m', // show the next schedule 10 minutes early
    defaultNoticeHoldTime: '10s',
    showTweetsEvery: '3s'
  },

  schedule: {
    urlToJSON: 'http://indybigdataconference2014.sched.org/api/session/list?format=json&api_key=6fc47fd02d4c0f29d24d6327ffaf217a'
  }


};

// allows reuse in the node script
if (typeof exports !== 'undefined') {
  module.exports = config;
}
