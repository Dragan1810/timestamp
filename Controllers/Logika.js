function timeConverter(date,multi){
  var a = new Date(date * multi);
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
            natural = timeConverter(date,1);
            unix = parseInt((date.getTime() / 1000).toFixed(0));
            res.json({ "unix": unix, "natural": natural });
        }
    } else 
    {
    
        if (Object.prototype.toString.call(Number(date)) === "[object Number]") {
             natural = timeConverter(date,1000);
             unix = date;
            res.json({ "unix": unix, "natural": natural });
        }

  
    }

}