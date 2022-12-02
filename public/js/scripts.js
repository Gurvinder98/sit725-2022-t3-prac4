const cardList = [
    {
      title: "CHAMPIONS LEAGUE",
      image: "images/sports2.jpg",
      link: "https://en.wikipedia.org/wiki/UEFA_Champions_League",
      desciption: "The UEFA Champions League (abbreviated as UCL, or sometimes, UEFA CL) is an annual club football competition organised by the Union of European Football Associations (UEFA)",
    },
    {
      title: "EUROPA LEAGUE",
      image: "images/sports3.png",
      link: "https://en.wikipedia.org/wiki/UEFA_Europa_League",
      desciption: "The UEFA Europa League (abbreviated as UEL, or sometimes, UEFA EL), formerly the UEFA Cup, is an annual football club competition organised since 1971 by the Union of European Football Associations (UEFA)",
    },
  ];

  const submitForm = () => {
    let formData = {};
    formData.first_name = $("#first_name").val();
    formData.last_name = $("#last_name").val();
    formData.password = $("#password").val();
    formData.email = $("#email").val();
  
    console.log("Form Data Submitted: ", formData);
  };
  
  const addCards = (items) => {
    items.forEach((item) => {
      let itemToAppend = '<div class="col s4 center-align"><div class="card blue-grey darken-1 medium"><div class="card-image wave-effects waves-block waves-light">'+
      '<img class="activator" src="'+item.image+'" /></div>' +
      '<div class="card-content white-text"><span class="card-title">' +
      item.title + '</span><p>' + item.desciption + '</p></div>' + 
      '<div class="card-action"><a target="_blank" href="' + item.link + '">' + item.title +
      '</a></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' + 
      'HELLO<i class="material-icons right">close</i></span><p class="card-text" style="color: black">Thank YOU</p>' + 
      '</div></div></div>';
      $("#card-section").append(itemToAppend);
    });
  };
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
  });
  
  $(document).ready(function () {
    $(".materialboxed").materialbox();
    $("#formSubmit").click(() => {
      submitForm();
    });
    addCards(cardList);
    $(".modal").modal();
    $('.carousel').carousel();
  });
