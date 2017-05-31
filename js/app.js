hide_initial_content_containers();
  var nav_button_home = document.getElementById('home');
  var nav_button_music = document.getElementById('music');
  var nav_button_videos = document.getElementById('videos');
  var nav_button_photos = document.getElementById('photos');
  var nav_button_about = document.getElementById('about');
  var nav_button_contact = document.getElementById('contact');
  var landing_reveal = document.getElementsByClassName('landing__container');
  var album_reveal = document.getElementsByClassName('album');
  var calendar_reveal = document.getElementsByClassName('calendar');
  var music_reveal = document.getElementsByClassName('music');
  var music_content_reveal = document.getElementsByClassName('music__content__container');
  var about_reveal = document.getElementsByClassName('about');
  var about_content_reveal = document.getElementsByClassName('about__content__container');
  var video_reveal = document.getElementsByClassName('video');
  var video_content_reveal = document.getElementsByClassName('video__content__container');
  var photo_reveal = document.getElementsByClassName('photo');
  var photo_content_reveal = document.getElementsByClassName('photo__content__container');
  var contact_reveal = document.getElementsByClassName('contact');
  var contact_content_reveal = document.getElementsByClassName('contact__content__container');
  var link_reveal = document.getElementsByClassName('link');
  var link_content_reveal = document.getElementsByClassName('link__content__container');
  var body_flag = 0;
  function hide_content () {
    $(landing_reveal).addClass('hidden__AF');
    $(album_reveal).addClass('hidden__AF');
    $(calendar_reveal).addClass('hidden__AF');
    $(music_reveal).addClass('hidden__AF');
    $(about_reveal).addClass('hidden__AF');
    $(video_reveal).addClass('hidden__AF');
    $(photo_reveal).addClass('hidden__AF');
    $(contact_reveal).addClass('hidden__AF');
    $(link_reveal).addClass('hidden__AF');
    body_flag = 0;
  }
  function reveal_content () {
    $(landing_reveal).removeClass('hidden__AF');
    $(album_reveal).removeClass('hidden__AF');
    $(calendar_reveal).removeClass('hidden__AF');
    $(music_reveal).removeClass('hidden__AF');
    $(about_reveal).removeClass('hidden__AF');
    $(video_reveal).removeClass('hidden__AF');
    $(photo_reveal).removeClass('hidden__AF');
    $(contact_reveal).removeClass('hidden__AF');
    $(link_reveal).removeClass('hidden__AF');
    body_flag = 1;
  }
  function show_just_album () {
    if (body_flag === 0) {
      hide_content();
      console.log('now you dont');
      $(album_reveal).removeClass('hidden__AF');
      console.log('now you do');
      body_flag = 1;
      console.log(body_flag);
    } else if (body_flag === 1) {
      reveal_content();
      body_flag = 0;
      console.log(body_flag);
    }
  }
  function show_just_music () {
    if (body_flag === 0) {
      hide_content();
      console.log('now you dont');
      $(music_reveal).removeClass('hidden__AF');
      $(music_content_reveal).removeClass('hidden__AF');
      console.log('now you do');
      body_flag = 1;
      console.log(body_flag);
    } else if (body_flag === 1) {
      hide_initial_content_containers();
      reveal_content();
      body_flag = 0;
      console.log(body_flag);
    }
  }
  function show_just_about () {
    if (body_flag === 0) {
      hide_content();
      console.log('now you dont');
      $(about_reveal).removeClass('hidden__AF');
      $(about_content_reveal).removeClass('hidden__AF');
      console.log('now you do');
      body_flag = 1;
      console.log(body_flag);
    } else if (body_flag === 1) {
      hide_initial_content_containers();
      reveal_content();
      body_flag = 0;
      console.log(body_flag);
    }
  }
  function show_just_video () {
    if (body_flag === 0) {
      hide_content();
      console.log('now you dont');
      $(video_reveal).removeClass('hidden__AF');
      $(video_content_reveal).removeClass('hidden__AF');
      console.log('now you do');
      body_flag = 1;
      console.log(body_flag);
    } else if (body_flag === 1) {
      hide_initial_content_containers();
      reveal_content();
      body_flag = 0;
      console.log(body_flag);
    }
  }
  function show_just_photo () {
    if (body_flag === 0) {
      hide_content();
      $(photo_reveal).removeClass('hidden__AF');
      $(photo_content_reveal).removeClass('hidden__AF');
      body_flag = 1;
    } else if (body_flag === 1) {
      hide_initial_content_containers();
      reveal_content();
      body_flag = 0;
    }
  }
  function show_just_contact () {
    if (body_flag === 0) {
      hide_content();
      $(contact_reveal).removeClass('hidden__AF');
      $(contact_content_reveal).removeClass('hidden__AF');
      body_flag = 1;
    } else if (body_flag === 1) {
      hide_initial_content_containers();
      reveal_content();
      body_flag = 0;
    }
  }
  function show_just_link () {
    if (body_flag === 0) {
      hide_content();
      $(link_reveal).removeClass('hidden__AF');
      $(link_content_reveal).removeClass('hidden__AF');
      body_flag = 1;
    } else if (body_flag === 1) {
      hide_initial_content_containers();
      reveal_content();
      body_flag = 0;
    }
  }
  function hide_initial_content_containers() {
    console.log('working');
    $(about_content_reveal).addClass('hidden__AF');
    $('.content__container').addClass('hidden__AF');
  }
$(nav_button_home).click(function() {
  hide_initial_content_containers();
  reveal_content();
  body_flag = 0;
});
$(nav_button_music).click(function() {
  if (body_flag === 0) {
    show_just_music();
  } else {
    hide_content();
    hide_initial_content_containers();
    show_just_music();
  }
});
$(nav_button_videos).click(function() {
  if (body_flag === 0) {
    show_just_video();
  } else {
    hide_content();
    hide_initial_content_containers();
    show_just_video();
  }
});
$(nav_button_photos).click(function() {
  if (body_flag === 0) {
    show_just_photo();
  } else {
    hide_content();
    hide_initial_content_containers();
    show_just_photo();
  }
});
$(nav_button_about).click(function() {
  if (body_flag === 0) {
    show_just_about();
  } else {
    hide_content();
    hide_initial_content_containers();
    show_just_about();
  }
});
$(nav_button_contact).click(function() {
  if (body_flag === 0) {
    show_just_contact();
  } else {
    hide_content();
    hide_initial_content_containers();
    show_just_contact();
  }
});
$(album_reveal).click(show_just_album);
$(music_reveal).click(show_just_music);
$(about_reveal).click(show_just_about);
$(photo_reveal).click(show_just_photo);
$(video_reveal).click(show_just_video);
$(contact_reveal).click(show_just_contact);
$(link_reveal).click(show_just_link);
