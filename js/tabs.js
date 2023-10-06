// (() => {
//     function setTabs(dataPath, dataTarget) {
//         const btns = document.querySelectorAll(`.js-tab-btn[${dataPath}]`);
//         const contents = document.querySelectorAll(`.js-tab-content[${dataTarget}]`);

//         btns.forEach((btn) => {
//             btn.addEventListener('click', function (evt) {
//                 evt.preventDefault();
//                 const path = this.getAttribute(dataPath);
//                 console.log(path);
//                 const target = document.querySelector(`.js-tab-content[${dataTarget}="${path}"]`);


//                 btns.forEach((currentBtn) => {
//                     currentBtn.classList.remove('tab-active');
//                 });

//                 this.classList.add('tab-active');

//                 contents.forEach((content) => {
//                     content.classList.remove('tab-active');
//                 });

//                 target.classList.add('tab-active');
//             });
//         });
//     }

//     window.setTabs = setTabs;
// })();


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.js-tab-btn').forEach(function(tabsBtn){
      tabsBtn.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.js-tab-content').forEach(function(tabContent){
          tabContent.classList.remove('tab-active')
        })
  
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-active')
      })
    })
  })
  