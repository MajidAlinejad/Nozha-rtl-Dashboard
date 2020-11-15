function rtl() {
  var body = document.body;
  body.classList.toggle("rtl");
}

function dark() {
  var body = document.body;
  body.classList.toggle("dark");
}




$(document).ready(function () {
  $("ul.a-collapse").click(function () {
    // console.log($(this).hasClass("short"));
    if ($(this).hasClass("short")) {
      $(".a-collapse").addClass("short");
      $(this).toggleClass("short");
      $(".side-item-container").addClass("hide animated");
      $("div.side-item-container", this).toggleClass("hide animated");
    } else {
      $(this).toggleClass("short");
      $("div.side-item-container", this).toggleClass("hide animated");
    }


  });

});






var ctx = document.getElementById('myChart2');
var ctx = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [{
        label: '# of Votes',
        data: [6, 8,  5, 2, 3],
        backgroundColor: [
            '#ff6384',
            '#4bc0c0',
            '#ffcd56',
            '#c9cbcf',
            '#36a2eb',
        ]
    }]
},
  options: {
      
  }
});




var myChart4 = document.getElementById('myChart4');
var myChart4 = new Chart(myChart4, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [{
        label: '# of Votes',
        data: [6, 8,  5, 2, 3],
        backgroundColor: [
            '#ff6384',
            '#4bc0c0',
            '#ffcd56',
            '#c9cbcf',
            '#36a2eb',
        ]
    }]
},
  options: {
     
  }
});



var mixChart = document.getElementById('myChart5');
var mixedChart = new Chart(mixChart, {
  type: 'bar',
  
  data: {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue','Red', 'Green', 'Yellow', 'Grey', 'Blue'],
      datasets: [{
          label: 'Bar Dataset',
          data: [6,8,5,2,3,10,20,30,40,50],
          backgroundColor: [
            '#ff6384',
            '#4bc0c0',
            '#ffcd56',
            '#c9cbcf',
            '#36a2eb',
            '#ff6384',
            '#4bc0c0',
            '#ffcd56',
            '#c9cbcf',
            '#36a2eb',
        ]
      }, {
          label: 'Line Dataset',
          data: [8,12,6,3,5,12,20,30,44,60],

          // Changes this dataset to become a line
          type: 'line'
      }],
  },
  options: {}
});






