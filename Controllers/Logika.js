function timeConverter(UNIX_timestamp,multi){
  var a = new Date(UNIX_timestamp * multi);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year;
  return time;
}


exports.tajm = (req,res) => {
    let date = req.params.date;

    if (isNaN(Number(date))) { 
        date = new Date(date);

        if (date == 'Invalid Date') {
            let time = "null";
            res.json({ "unix": time, "natural": time });
        }

        if (Object.prototype.toString.call(date) === "[object Date]") {
            time = timeConverter(date,1);
            res.json({ "unix": time, "natural": time });
        }
    } else 
    {
    
        if (Object.prototype.toString.call(Number(date)) === "[object Number]") {
             time = timeConverter(date,1000);
            res.json({ "unix": time, "natural": time });
        }

  
    }

}