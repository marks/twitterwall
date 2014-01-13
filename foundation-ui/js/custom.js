var schedule_url = "http://indybigdataconference2014.sched.org/api/session/list?format=json&api_key=6fc47fd02d4c0f29d24d6327ffaf217a"
var schedule_data;

$( document ).ready(function() {
  // fetch schedule
  var getSchedule = $.getJSON(schedule_url)
    .done(processSchedule)

});

function processSchedule(data){
  // format dates
  schedule_data = data.map(function(session){
    formatted_session = session
    formatted_session["event_start"] = new Date(session.event_start)
    formatted_session["event_end"] = new Date(session.event_end)
    $.each(["description","goers","seats","event_key","invite_only","venue_id"],function(n,key){
      delete formatted_session[key]
    })
    return formatted_session
  })
  // order by session start time
  schedule_data.sort(function(a,b){
    return a.event_start<b.event_start?-1:a.event_start>b.event_start?1:0;
  });
  updateSchedule("ul#sessions")
}

function updateSchedule(selector){
  var schedule_html = ""
  $.each(schedule_data,function(n,session){
    start = moment(session.event_start)
    console.log(start)
    schedule_html += "<li>"
    // schedule_html += "<pre>"+JSON.stringify(session,undefined,2)+"</pre>"
    schedule_html += "<strong><a href='http://indybigdataconference2014.sched.org/event/"+session.id+"' target='blank'>"+session.name+"</a></strong>"
    console.log(moment(session.start_date).fromNow())
    schedule_html += "<br />"
    schedule_html += "<em>"+start.fromNow()+"</em> ("+start.format('MMM Do YYYY, h:mm a')+")"
    schedule_html += "</li>"
  })
  $(selector).html(schedule_html)
}