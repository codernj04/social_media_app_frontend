// sidebar
const menuItems = document.querySelectorAll('.menu-item');

//meessages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Theme

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');


//========================= sidebar =============================

// remove active class from everry menu

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove('active');
  });
};

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if (item.id != 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none';
    } else {
      document.querySelector('.notifications-popup').style.display = 'block';
      document.querySelector('#notifications .notification-count').style.display = 'none';
    }
  });
});

//========================= messages =============================
// searches charts
const searchMessage = () => {
    const val = messageSearch.Value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            User.style.display = 'flex';
        } else {
            User.style.display = 'none';
        }
    })
}

//search chart
messageSearch.addEventListener('keyup', searchMessage);

// hightlight messages when message menu is clicked
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem vae(--color-success)';
  messagesNotification.querySelector('.notification-count').style.display ='none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
});


// Theme/ Display customization
//opens modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}

// close modal
const closeThemeModal = (e) => { 
  if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = 'none';
  }
}

//closes modal
themeModal.addEventListener('click', closeThemeModal);
//opens modal
theme.addEventListener('click', openThemeModal);




// ===========================Fonts========================
// remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
}

fontSizes.forEach(size =>{

  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1')){
      fontSize = '10px';
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty('----sticky-top-right', '5.4rem');
    }
    else if(size.classList.contains('font-size-2')){
      fontSize = '13px';
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty('----sticky-top-right', '-7rem');
    }
   else if(size.classList.contains('font-size-3')){
      fontSize = '16px';
      root.style.setProperty('----sticky-top-left', '-2rem');
      root.style.setProperty('----sticky-top-right', '-17rem');
    }
    else if(size.classList.contains('font-size-4')){
      fontSize = '19px';
      root.style.setProperty('----sticky-top-left', '-5rem');
      root.style.setProperty('----sticky-top-right', '-25rem');
    }
    else if(size.classList.contains('font-size-5')){
      fontSize = '22px';
      root.style.setProperty('----sticky-top-left', '-12rem');
      root.style.setProperty('----sticky-top-right', '-35rem');
    }

    document.querySelector('html').style.fontSize = fontSize;
  })
  
})



//remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}

// change pripary colors
colorPalette.forEach(color => {
  color.addEventListener('click', () => { 
    let primaryHue;
    changeActiveColorClass();
     if(color.classList.contains('color-1')){
      primaryHue = 286;
     } else if(color.classList.contains('color-2')){
      primaryHue = 52;
     } else if(color.classList.contains('color-3')){
      primaryHue = 352;
     } else if(color.classList.contains('color-4')){
      primaryHue = 152;
     } else if(color.classList.contains('color-5')){
      primaryHue = 202;
     }
    color.classList.add('active');
     root.style.setProperty('--primary-color-hue', primaryHue);
  })
})