document.addEventListener("DOMContentLoaded", () => {


  const validation = new JustValidate('.contacts__form', {
    tooltip: {
      position: 'top'
    },

  });

  validation
    .addField('#name', [

      {
        rule: 'required',
        errorMessage: 'Введитете ваше имя',
      },

      {
        rule: 'customRegexp',
        value: /(^[A-Za-zА-Яа-яЁё\s]+$)/,
        errorMessage: 'Недопустимый формат'
      }

    ])

    .addField('#phone', [

      {
        rule: 'required',
        errorMessage: 'Введите ваш телефон'
      },

      {
        rule: 'minLength',
        value: 10,
        errorMessage: 'Недопустимый формат'
      }

    ])


    

}

)