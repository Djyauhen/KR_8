window.onload = (e) => {
    let inputName = document.getElementById('fullName');
    let inputUserName = document.getElementById('userName');
    let inputEmail = document.getElementById('Email');
    let inputPassword = document.getElementById('password');
    let inputPasswordRepeat = document.getElementById('repeat-password');
    let inputCheckbox = document.getElementById('agreements');

    //Запрещаем вводить цифры в Full Name
    inputName.onkeydown = (e) => {
        let string = parseInt(e.key);
        if (string || e.key === '0') {
            return false;
        }
    }

    //Запрещаем вводить символы "." и "," в поле Your username
    inputUserName.onkeydown = (e) => {
        let symbols = e.key.toString();
        if (symbols === '.' || symbols === ',') {
            return false;
        }
    }

    //Проверяем изменения значения чекбокса
    inputCheckbox.onchange = (e) => {
        if (!e.target.checked) {
            console.log("Не согласен");
        } else {
            console.log("Согласен");
        }
    }

    //Кнопка Sign Up
    let buttonSubmit = document.getElementById('button');
    buttonSubmit.onclick = (e) => {
        if (inputName.value.trim() === '') {
            alert("Заполните поле Full Name");
            return
            }
            if (inputUserName.value.trim() === '') {
                alert("Заполните поле User Name");
                return
            }
            if (inputEmail.value.trim() === '') {
                alert("Заполните поле E-mail");
                return
            }
            if (inputPassword.value.length < 8) {
                alert("Пароль должен состоять не менее чем из 8 символов");
                return
            }
            if (inputPassword.value !== inputPasswordRepeat.value) {
                alert("Пароли не совпадают");
                return
            }
            if (!inputCheckbox.checked) {
                alert('Выберите пункт "Согласен с нашими Условиями предоставления услуг и Заявлением о конфиденциальности"');
        } else {
            document.getElementById('popup').classList.add('open');
        }
    }

    //Кнопка ОК в popup или ссылка
    let popupButton = document.getElementById('popup-btn');
    let linkHaveAnAccount = document.getElementById('link');

    function fn(e) {
        document.querySelector('form').reset();

        document.getElementById('popup').classList.remove('open');
        document.getElementsByTagName('h1')[0].innerText = 'Log in to the system';
        document.getElementsByClassName('full_name')[0].remove();
        document.getElementsByClassName('e-mail')[0].remove();
        document.getElementsByClassName('repeat-password')[0].remove();
        document.getElementById('repeat-password').remove();
        document.getElementsByClassName('agreements')[0].remove();
        document.getElementById('button').innerText = 'Sign In';
        document.getElementById('link').remove();
        buttonSubmit.onclick = (e) => {
            if (inputUserName.value.trim() === '') {
                    alert("Заполните поле User Name");
                    return
                }
                if (inputPassword.value.trim() === '') {
                    alert("Введите пароль");
                    return
                } else {
                    alert(`Добро пожаловать, ${inputUserName.value}!`);
                }
        }
    }

    popupButton.addEventListener('click', fn);
    linkHaveAnAccount.addEventListener('click', fn);
}


