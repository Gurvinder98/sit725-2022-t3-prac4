


  const submitForm = () => {
    let formData = {};
    formData.title = $("#title").val();
    formData.image = $("#image").val();
    formData.link = $("#link").val();
    formData.description = $("#description").val();
  
    console.log("Form Data Submitted: ", formData);
    addProjectToApp(formData);
  };
  
  //ajax function
  const addProjectToApp = (project) => {
    $.ajax({
      url: "/api/projects",
      data: project,
      type: "POST",
      success: (result) => {
        alert(result.message);
        location.reload();
      },
    })
  }
  
  const addCards = (items) => {
    items.forEach((item) => {
      let itemToAppend = '<div class="col s4 center-align"><div class="card blue-grey darken-1 medium"><div class="card-image wave-effects waves-block waves-light">'+
      '<img class="activator" src="'+item.image+'" /></div>' +
      '<div class="card-content white-text"><span class="card-title">' +
      item.title + '</span><p>' + item.description + '</p></div>' + 
      '<div class="card-action"><a target="_blank" href="' + item.link + '">' + item.title +
      '</a></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' + 
      'HELLO<i class="material-icons right">close</i></span><p class="card-text" style="color: black">Thank YOU</p>' + 
      '</div></div></div>';
      $("#card-section").append(itemToAppend);
    });
  };
  
const getProjects = () => {
  $.get("/api/projects", (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
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
  getProjects();
  
  $(".modal").modal();
  $('.carousel').carousel();
});
