var random = Math.floor(Math.random() * $('.random-url').length);
$('.random-url').hide().eq(random).show();

var ds = false;
// CardSlider 1
var cardslider1 = $('.my-cardslider1').cardslider({
    swipe: true,
    dots: true,
    nav: false,
    swipe: true,
    direction: 'left',
    loop: true
}).data('cardslider1');

// CardSlider 2
var cardslider2 = $('.my-cardslider2').cardslider({
    swipe: true,
    dots: true,
    direction: 'left',
    swipe: true,
    loop: true
}).data('cardslider2');

// CardSlider 3
var cardslider3 = $('.my-cardslider3').cardslider({
    swipe: false,
    dots: false,
    direction: 'left',
    swipe: false,
    loop: false
}).data('cardslider3');

// Detect Scroll Width
function getScrollbarWidth() {
    var outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';

    // add innerdiv
    var inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll - 0;
}
//console.log(getScrollbarWidth());

// // mCustomScrollbar
// $('.fixed-menu').mCustomScrollbar({
//     theme: 'minimal-dark'
// });

var offerTemplate = '        <tr>\n' +
    '          <td>\n' +
    '            <span class="offers all active">{id}</span>\n' +
    '            <span class="offers foreign">257</span>\n' +
    '            <span class="offers rus">279</span>\n' +
    '          </td>\n' +
    '          <td>\n' +
    '            <span class="gpbd offers all active">{name}</span>\n' +
    '            <span class="gpbd offers foreign">Prostalgene - COD (IT)</span>\n' +
    '            <span class="gpbd offers rus">Сементал Бустер 347</span>\n' +
    '          </td>\n' +
    '          <td>\n' +
    '            <span class="offers all active">{category}</span>\n' +
    '            <span class="offers foreign">{{.index35}}</span>\n' +
    '            <span class="offers rus">{{.index39}}</span>\n' +
    '          </td>\n' +
    '          <td>\n' +
    '            <span class="offers all active"><span class="flag-icon flag-icon-{flag}"></span></span>\n' +
    '            <span class="offers foreign"><span class="flag-icon flag-icon-it"></span></span>\n' +
    '            <span class="offers rus"><span class="flag-icon flag-icon-ru"></span></span>\n' +
    '          </td>\n' +
    '          <td>\n' +
    '            <span class="offers all active">{decision}</span>\n' +
    '            <span class="offers foreign">COD</span>\n' +
    '            <span class="offers rus">COD</span>\n' +
    '          </td>\n' +
    '          <td>\n' +
    '            <span class="offers all active">{sum}</span>\n' +
    '            <span class="offers foreign">39€</span>\n' +
    '            <span class="offers rus">347 руб.</span>\n' +
    '          </td>\n' +
    '          <td>\n' +
    '            <span class="offers all active">{appr}</span>\n' +
    '            <span class="offers foreign">100%</span>\n' +
    '            <span class="offers rus">46%</span>\n' +
    '          </td>\n' +
    '          <td>\n' +
    '            <span class="offers all active">{rate}</span>\n' +
    '            <span class="offers foreign">17$</span>\n' +
    '            <span class="offers rus">800 р.</span>\n' +
    '          </td>\n' +
    '        </tr>'

var locale = 'en';
var locales = {
    en: {
        passwordLength: 'The password should be at least 6 characters long.',
        error:
            'Oops.. Something went wrong. We will fix everything soon. Please, try again later!',
        passwordDoNotMatch: 'The passwords do not match.',
        wrongEmailOrPassword: 'Wrong email or password',
        signUpOk: "You've been successfully registered in dr.cash",
        signin: 'Sign in',
        passwordRecovery: 'Password recovery',
        wrongEmail: 'Wrong email',
        passwordRecoveryInfo:
            'New password will be sent to specified email. You can always change it in your Profile Settings.',
        signUpOkInfo:
            'You are sent an email providing registration information and some instrustions for work with the Affiliate program.<br><br>Good luck on your business!',
        emailNotUniq: 'e-mail already exists',
        captchaError: 'Captcha error',
        toManyRequest: 'Too many requests. Try again later after 1 hour.'
    },
    ru: {
        passwordLength: 'Минимальная длина пароля 6 символов.',
        error: 'Упс.. произошла ошибка. Мы скоро все исправим, попробуйте позже!',
        passwordDoNotMatch: 'Пароли не совпадают',
        wrongEmailOrPassword: 'Неверный email или пароль',
        signUpOk: 'Регистрация прошла успешно',
        signin: 'Войти',
        passwordRecovery: 'Восстановление пароля',
        wrongEmail: 'Неверный email',
        passwordRecoveryInfo:
            'На указанную почту отправлен новый пароль для входа. Установить собственный пароль можно будет в личном кабинете партнера.',
        signUpOkInfo:
            'На указанную почту отправлено письмо с данными, а так же небольшая инструкция по работе с партнерской программой<br><br>Приятной работы!',
        emailNotUniq: 'e-mail уже занят',
        captchaError: 'Ошибка капчи',
        toManyRequest: 'Слишком много запросов. Попробуйте ещё раз, через час.'
    },
    vn: {
        passwordLength : 'Độ dài mật khẩu tối thiểu là 6 ký tự.',
        error: 'Rất tiếc .. đã xảy ra lỗi. Chúng tôi sẽ khắc phục mọi thứ sớm, xin vui lòng thử lại sau!',
        passwordDoNotMatch: 'Mật khẩu không khớp',
        wrongEmailOrPassword: 'Email hoặc mật khẩu không hợp lệ',
        signUpOk: 'Đăng ký thành công',
        signin : 'Đăng nhập',
        passwordRecovery: 'Khôi phục mật khẩu',
        wrongEmail: 'Email không hợp lệ',
        passwordRecoveryInfo:
            'Một mật khẩu mới đã được gửi đến email được chỉ định. Bạn có thể đặt mật khẩu của riêng mình trong tài khoản đối tác của bạn. ',
        signUpOkInfo:
            'dữ liệu cũng như một hướng dẫn nhỏ để bắt đầu làm việc với chương trình liên kết đã được gửi đến  email được chỉ định <br> <br> Chúc bạn thành công!',
        emailNotUniq: 'email đã được sử dụng',
        captchaError: 'Lỗi Captcha',
        toManyRequest: 'Quá nhiều yêu cầu. Vui Lòng thử lại sau một giờ nữa. '
}
};

var setCookie = function(name, val, opt) {
    var options = opt || {};
    options.path = '/';
    var value = val;
    var expires = options.expires;

    if (typeof expires === 'number' && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = d;
        options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + '=' + value;

    for (var propName in options) {
        updatedCookie += '; ' + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }

    document.cookie = updatedCookie;
};

var deleteCookie = function (name) {
    setCookie(name, '', {
        expires: -1
    });
};

var getCookie = name => {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length == 2)
        return parts
            .pop()
            .split(';')
            .shift();
};


//Validate
$(document).ready(function() {
    var api_domain = document.getElementById('API_DOMAIN').value;
    var stat_host = document.getElementById('STAT_SERVICE_HOST').value;
    var affiliate_host = document.getElementById('AFFILIATE_SERVICE_HOST').value;
    var service_host = document.getElementById('SERVICE_HOST').value;
    (function() {
        $.extend({
            unparam: function(param) {
                if (param[0] === '?') param = param.slice(1)
                var re = {}
                for (var i = 0, arr = param.split('&'), kv; kv = arr[i]; i++) {
                    kv = kv.split('=')
                    re[kv[0]] = kv[1]
                }
                return re
            }
        })
    })();

    var token = getCookie('dr-token');
    if (token) {
        $.ajax({
            url: api_domain+'/v1/profile',
            type: 'GET',
            contentType: 'application/json',
            headers: {
                Authorization: `Bearer ${token}`
            },
            success: function (response) {
                if (response.status === 'OK') {
                    $('.js-auth-type[data-id="1"]').attr('href', affiliate_host);
                    $('.js-auth-type[data-id="1"]').removeClass('dnone');
                } else {
                    $('.js-auth-type[data-id="2"]').removeClass('dnone')
                }
            },
            error: function (response) {
                // Sentry.captureException({endpoint: 'user/info', response: response});
                $('.js-auth-type[data-id="2"]').removeClass('dnone')
            }
        });
    } else {
        $('.js-auth-type[data-id="2"]').removeClass('dnone')
    }
    $.ajax({
        url: api_domain+'/v1/total',
        type: 'GET',
        contentType: 'application/json',
        success: function (response) {
            if (response.status === 'OK' && $('#stats-numbers').length) {
                $('#stats-numbers .js-item[data-id="1"]').text(response.payload.item.count_offer);
                $('#stats-numbers .js-item[data-id="2"]').text(response.payload.item.count_category);
                $('#stats-numbers .js-item[data-id="3"]').text(response.payload.item.count_user);
                $('#stats-numbers .js-item[data-id="4"]').text(response.payload.item.count_geo);
                $('#stats-numbers .js-item[data-id="5"]').text(response.payload.item.count_payment_system);
            } else {
                // alert(locales[locale].error);
            }
        },
        error: function (response) {
            // alert(locales[locale].error);
        }
    });
    $.ajax({
        url: api_domain+'/v1/offer/top',
        type: 'GET',
        contentType: 'application/json',
        success: function (response) {
            if (response.status === 'OK') {
                var items = response.payload.items.slice(0,5);
                var temp = '';
                for (var i=0;i<items.length;i++) {
                    var item = items[i];
                    temp += offerTemplate.replace('{id}', item.id).replace('{name}', item.name).replace('{category}', item.category).replace('{flag}', item.geo_code[0].toLowerCase()).replace('{decision}', item.decision).replace('{sum}', item.price + ' ' + item.price_currency).replace('{appr}', item.approved + '%').replace('{rate}', item.rate + ' ' +item.currency)
                }
                $('#topoffers-js tbody').html(temp);
            } else {
                alert(locales[locale].error);
            }
        },
        error: function (response) {
            alert(locales[locale].error);
        }
    });


    $('.logout').click((e)=>{
        e.preventDefault();
        var token = getCookie('dr-token');

        $.ajax({
            url: api_domain+'/v1/signout',
            type: 'GET',
            contentType: 'application/json',
            headers: {
                Authorization: `Bearer ${token}`
            },
            success: function(response) {
                if (response.status === 'OK') {
                    deleteCookie('dr-token');
                    window.location.href = window.location.pathname + window.location.search + window.location.hash;
                } else if (response.status === 'BAD_CREDENTIALS') {
                    alert(locales[locale].error);
                } else {
                    alert(locales[locale].error);
                    // Sentry.captureException({endpoint: 'v1/signout', response: response});
                }
            },
            error: function(response) {
                alert(locales[locale].error);
                // Sentry.captureException({endpoint: 'user/signout', response: response});
            }
        });
        return false;
    })
    $('input[id="login3"]').on('focusout', function(e) {
        var username_writed = localStorage.getItem('username_writed');
        if (e.target.value.length > 0 && !username_writed) {
            localStorage.setItem('username_writed', 'true');
        }
    });
    $('input[id="email"]').on('focusout', function(e) {
        var email_writed = localStorage.getItem('email_writed');
        if (e.target.value.length > 0 && !email_writed) {
            localStorage.setItem('email_writed', 'true');
        }
    });

    $('a')
        .filter(function() {
            return $(this).attr('href')
                ? $(this)
                    .attr('href')
                    .match(/\/(en|ru)\/advertisers/)
                : false;
        })
        .on('mouseup', function() {
            return false;
        });

    $('a')
        .filter(function() {
            return $(this).attr('href')
                ? $(this)
                    .attr('href')
                    .match(/\/(en|ru)\/#topoffers/)
                : false;
        })
        .on('mouseup', function() {
            return false;
        });

    $('a')
        .filter(function() {
            return $(this).attr('href')
                ? $(this)
                    .attr('href')
                    .match(/\/(en|ru)\/#support/)
                : false;
        })
        .on('mouseup', function() {
            return false;
        });

    $('a[href="#registration"]').click(function() {
    });

    locale = $('#locale').val();
    $('.validate').each(function() {
        // attach to all form elements on page
        $(this).validate({
            // initialize plugin on each form
            // global options for plugin
            errorPlacement: function(error, element) {
                var parent = $(element).closest('.input-container');
                parent.hasClass('input-container')
                    ? (parent.addClass('has-error'), error.insertAfter(parent))
                    : error.insertAfter(element);
            },
            submitHandler: function(form) {
                var $form = $(form);
                var email = $form.find('[name="email"]').val();
                var data = $form.serialize();
                var dataObj = $form.serializeArray();
                if (ds) return false;
                ds = true;

                if ($form.attr('id') === 'form1') {
                    var newData = {};
                    for (var i=0;i<dataObj.length;i+=1) {
                        newData[dataObj[i].name] = dataObj[i].value;
                    }
                    grecaptcha.execute('6Ld_qZMUAAAAAE0mLqU8OdTvyvnkTfwDMuYvw0vW', {action: window.location.pathname}).then(function(token) {
                        newData.grecaptcha = token;
                        $.ajax({
                            url: api_domain + '/v1/signin',
                            data: JSON.stringify(newData),
                            type: 'POST',
                            contentType: 'application/json',
                            dataType: 'json',
                            success: function (response) {
                                if (response.status === 'OK' && response.payload.item.roles.includes('affiliate')) {
                                    var registered = localStorage.getItem('registered');
                                    if (registered) {
                                        localStorage.removeItem('registered');
                                    }
                                    $form.find('input[type="text"],textarea').val('');
                                    deleteCookie('dr-token');
                                    setCookie('dr-token', response.payload.item.token, {
                                        domain: '.' + service_host,
                                        expires: 60 * 60 * 24 * 2
                                    });
                                    window.location = affiliate_host;
                                } else if (response.status === 'BAD_CREDENTIALS') {
                                    var $validate = $('#form1').validate();
                                    $validate.showErrors({
                                        email: locales[locale].wrongEmailOrPassword,
                                        password: ''
                                    });
                                } else if (response.status === 'BAD_CAPTCHA') {
                                    var $validate = $form.validate();
                                    $validate.showErrors({
                                        email: locales[locale].captchaError
                                    });
                                    ds = false;
                                } else {
                                    delete newData['password'];
                                    // Sentry.captureException({
                                    //     endpoint: 'user/signin',
                                    //     response: response,
                                    //     data: newData
                                    // });
                                    alert(locales[locale].error);
                                }
                                ds = false;
                            },
                            error: function (response) {
                                if (response.status === 429) {
                                    var $validate = $form.validate();
                                    $validate.showErrors({
                                        email: locales[locale].toManyRequest
                                    });
                                } else {
                                    alert(locales[locale].error);
                                }
                                delete newData['password'];
                                // Sentry.captureException({endpoint: 'user/signin', response: response, data: newData});
                                ds = false;
                            }
                        });
                    }, function (reason) {
                        alert('Grecaptcha error: ' + reason);
                    });
                }

                if ($form.attr('id') === 'form2') {
                    var newData = {};
                    for (var i=0;i<dataObj.length;i+=1) {
                        newData[dataObj[i].name] = dataObj[i].value;
                    }

                    grecaptcha.execute('6Ld_qZMUAAAAAE0mLqU8OdTvyvnkTfwDMuYvw0vW', {action: window.location.pathname}).then(function(token) {
                        newData.grecaptcha = token;
                        $.ajax({
                            url: api_domain + '/v1/password-restore',
                            data: JSON.stringify(newData),
                            type: 'POST',
                            contentType: "application/json",
                            dataType: 'json',
                            processData: false,
                            success: function (response) {
                                if (response.status === 'OK') {
                                    $form
                                        .parent()
                                        .removeClass('active')
                                        .slideUp();
                                    $('.fixed-menu-container').append(
                                        '<div class="alert-container"><p class="alert-heading hell px26 lh100"></p><p style="width: 350px;" class="alert-message px12"></p><button class="alert-button"></button></div>'
                                    );
                                    $('.alert-container').slideDown();
                                    $('.alert-heading').html(locales[locale].passwordRecovery);
                                    $('.alert-message').html(locales[locale].passwordRecoveryInfo);
                                    $('.alert-button').text(locales[locale].signin);
                                } else if (response.status === 'BAD_CAPTCHA') {
                                    var $validate = $form.validate();
                                    $validate.showErrors({
                                        email: locales[locale].captchaError
                                    });
                                    ds = false;
                                } else {
                                    var $validate = $('#form2').validate();
                                    $validate.showErrors({
                                        login2: locales[locale].wrongEmail
                                    });
                                }
                                ds = false;
                            },
                            error: function (response) {
                                if (response.status === 429) {
                                    var $validate = $form.validate();
                                    $validate.showErrors({
                                        email: locales[locale].toManyRequest
                                    });
                                } else {
                                    alert(locales[locale].error);
                                }
                                // Sentry.captureException({
                                //     endpoint: 'v1/password-restore',
                                //     response: response,
                                //     data: data
                                // });
                                ds = false;
                            }
                        });
                    });
                }

                if ($form.attr('id') === 'form3') {
                    if ($form.find('input[name="password"]').val().length < 6) {
                        var $validate = $form.validate();
                        $validate.showErrors({
                            password: locales[locale].passwordLength
                        });
                        ds = false;
                        return false;
                    }
                    if (
                        $form.find('input[name="password"]').val() !==
                        $form.find('input[name="password_repeat"]').val()
                    ) {
                        var $validate = $form.validate();
                        $validate.showErrors({
                            password: locales[locale].passwordDoNotMatch
                        });
                        ds = false;
                        return false;
                    }
                    var newData = {};
                    newData.messengers = [{type: '', login: ''}];
                    var queryString = location.search.substring(1);
                    var obj = {};
                    var pairs = queryString.split('&');
                    for(i in pairs){
                        var split = pairs[i].split('=');
                        obj[decodeURIComponent(split[0])] = decodeURIComponent(split[1]);
                    }
                    if (obj['utm_source'] !== undefined && obj['utm_source'] !== 'undefined') {
                        newData['utm_source'] = obj['utm_source'];
                    }
                    if (obj['utm_medium'] !== undefined && obj['utm_medium'] !== 'undefined') {
                        newData['utm_medium'] = obj['utm_medium'];
                    }
                    if (obj['utm_campaign'] !== undefined && obj['utm_campaign'] !== 'undefined') {
                        newData['utm_campaign'] = obj['utm_campaign'];
                    }
                    if (obj['utm_content'] !== undefined && obj['utm_content'] !== 'undefined') {
                        newData['utm_content'] = obj['utm_content'];
                    }
                    if (obj['utm_term'] !== undefined && obj['utm_term'] !== 'undefined') {
                        newData['utm_term'] = obj['utm_term'];
                    }
                    for (var i=0;i<dataObj.length;i+=1) {
                        if (dataObj[i].name === 'messenger_type') {
                            newData.messengers[0].type = dataObj[i].value;
                        } else if (dataObj[i].name === 'messenger_login') {
                            newData.messengers[0].login = dataObj[i].value;
                        } else {
                            newData[dataObj[i].name] = dataObj[i].value;
                        }
                    }
                    if (newData.messengers[0].type === 'whatsapp') {
                        var dialCode = $('.selected-dial-code').text();
                        var itiVal = $('#iti').val();
                        newData.messengers[0].login = dialCode + itiVal;
                    }

                    grecaptcha.execute('6Ld_qZMUAAAAAE0mLqU8OdTvyvnkTfwDMuYvw0vW', {action: window.location.pathname}).then(function(token) {
                        newData.grecaptcha = token;
                        $.ajax({
                            url: api_domain + '/v1/signup',
                            data: JSON.stringify(newData),
                            type: 'POST',
                            contentType: "application/json",
                            dataType: 'json',
                            processData: false,
                            success: function (response) {
                                if (response.status === 'OK') {
                                    deleteCookie('dr-token');
                                    setCookie('dr-token', response.payload.item.token, {
                                        domain: '.' + service_host,
                                        expires: 60 * 60 * 24 * 2
                                    });
                                    localStorage.setItem('registered', 'true');
                                    window.location = affiliate_host;
                                    $form
                                        .parent()
                                        .removeClass('active')
                                        .slideUp();
                                    $('.fixed-menu-container').append(
                                        '<div class="alert-container"><p class="alert-heading hell px26 lh100"></p><p class="alert-message px12"></p><button class="alert-button"></button></div>'
                                    );
                                    $('.alert-container').slideDown();
                                    $('.alert-heading').html(locales[locale].signUpOk);
                                    $('.alert-message').html(locales[locale].signUpOkInfo);
                                    $('.alert-button').text(locales[locale].signin);
                                } else if (response.status === 'USER_ALREADY_EXIST') {
                                    var $validate = $('#form3').validate();
                                    $validate.showErrors({
                                        email: locales[locale].emailNotUniq
                                    });
                                } else if (response.status === 'BAD_CAPTCHA') {
                                    var $validate = $form.validate();
                                    $validate.showErrors({
                                        email: locales[locale].captchaError
                                    });
                                    ds = false;
                                } else {
                                    alert(locales[locale].error);
                                    delete newData['password'];
                                    delete newData['password_repeat'];
                                    // Sentry.captureException({endpoint: 'v1/signup', response: response, data: newData});
                                }
                                ds = false;
                            },
                            error: function (response) {
                                if (response.status === 429) {
                                    var $validate = $form.validate();
                                    $validate.showErrors({
                                        email: locales[locale].toManyRequest
                                    });
                                } else {
                                    alert(locales[locale].error);
                                }
                                delete newData['password'];
                                delete newData['password_repeat'];
                                // Sentry.captureException({endpoint: 'v1/signup', response: response, data: newData});
                                ds = false;
                            }
                        });
                    });
                }
                return false;
            }
        });
    });
});

// Menu and overlay
var Forms = $('.mobile-menu, .login-form, .registration-form, .recovery-form');
$(document).on(
    'click',
    '.menu, .login, .registration, .recovery, .alert-button',
    function(e) {
        $('.bg-overlay').fadeIn();
        $('.login-registration-recovery').addClass('active');
        Forms.removeClass('active');
        $('.alert-container').remove();

        if ($(this).hasClass('menu')) {
            $('.login-registration-recovery').removeClass('active');
            $('.bg-overlay').fadeIn();
            $('.mobile-menu').addClass('active');
        }
        if ($('.mobile-menu, .login-registration-recovery').hasClass('active')) {
            $('body').css({
                overflow: 'hidden',
                'margin-right': getScrollbarWidth() + 'px'
            });
        }
        if ($(this).hasClass('login')) {
            $('.login-form').addClass('active');
        }
        if ($(this).hasClass('registration')) {
            $('.registration-form').addClass('active');
        }
        if ($(this).hasClass('recovery')) {
            $('.recovery-form').addClass('active');
        }
        if ($(this).hasClass('alert-button')) {
            $('.alert-container').remove();
            $('.login-form').addClass('active');
        } else {
            e.preventDefault();
        }
    }
);

$('.bg-overlay, .close, .mobile-menu a').click(function() {
    $('.bg-overlay').fadeOut();
    $('body').css({ overflow: 'inherit', 'margin-right': 'inherit' });
    $('.mobile-menu, .login-registration-recovery').removeClass('active');
    $('.alert-container').remove();
});

// Input/Select focus
var $focused = $('.input-container, .select-container, .textarea-container');
$focused.click(function() {
    $focused.removeClass('focused');
    $(this).toggleClass('focused');
    if ($(this).hasClass('input-container')) {
        $(this)
            .find('input')
            .focus();
    }
    if ($(this).hasClass('select-container')) {
        //console.log('select');
        //$(this).find('select option').show('slow');
        //$(this).find('select').show();
    }
    if ($(this).hasClass('textarea-container')) {
        $(this)
            .find('textarea')
            .focus();
    }
});

$(document).click(function(event) {
    if (!$(event.target).closest($focused).length) {
        $focused.removeClass('focused');
    }
});

$(document).on('change', '.select-container select', function() {
    $(this)
        .parent()
        .next()
        .slideDown();
});

// $('.fixed-menu select').change(function() {
//     var getSelect = $(this).val();
//     $(this)
//         .parent()
//         .next()
//         .find('label')
//         .html(getSelect);
//     $(this)
//         .parent()
//         .next()
//         .find('input')
//         .attr('placeholder', getSelect);
// });

// intl-tel-input and select placeholders change
var initialLanguage = $('html').attr('lang');
if (initialLanguage == 'en') {
    initialLanguage = 'us'
}
var input = document.querySelector("#iti");
var iti = window.intlTelInput(input, {
//   hiddenInput: "whatsapp_phone[full]",
  initialCountry: "auto",
  separateDialCode: true,
  // preventInvalidDialCodes: true,
  // autoHideDialCode: false,
  // nationalMode: false,
  
  preferredCountries: ["us", "ru", "vn"],

// https://ipinfo.io дает возможность на 1000
// запросов в сутки, после чего не возвращает данные =(

//   geoIpLookup: function(callback) {
//     $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
//       var countryCode = (resp && resp.country) ? resp.country : "";
//       callback(countryCode);
//     });
//   },

// https://freegeoip.app/json/ 15 000 запросов в час!

    geoIpLookup: function(callback) {
    $.get('https://freegeoip.app/json/', function() {}, "jsonp").always(function(resp) {
        var countryCode = (resp && resp.country_code) ? resp.country_code : "";
        callback(countryCode);
        });
    },
  // customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
  //   return "e.g. " + selectedCountryPlaceholder;
  // },
  // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.1.0/js/utils.js" // just for formatting/placeholders etc
});

// iti.setCountry("en");

// $('.my-intl-tel-input').find('.selected-flag').prepend('<div class="iso2">'+initialLanguage+'</div>');
$('.my-intl-tel-input').find('.selected-flag').prepend('<div class="iso2"></div>');

var number = iti.getNumber();
var numberType = iti.getNumberType();
var countryData = window.intlTelInputGlobals.getCountryData();

input.addEventListener("countrychange", function() {
  var countryData = iti.getSelectedCountryData();
  $('.my-intl-tel-input').find('.iso2').html(countryData.iso2);
});

$('.messangers-select select').change(function() {
  var getSelect = $(this).val();
  $(this).parent().next().find('label').html(getSelect);
  if (getSelect == 'whatsapp') {
    $(this).parent().next().find('.messanger').attr('name','').removeAttr('required').hide();
    $(this).parent().next('.input-container').css("overflow","inherit");
    $('.my-intl-tel-input').show();
    $('.my-intl-tel-input').find('#iti').attr('name','messenger_login').attr('required','').focus();
    var selectWidth = $('.selected-flag').outerWidth();
    // console.log(selectWidth);
    $('#iti').css('padding-left', selectWidth + 4 + 'px');
  } else {
    $(this).parent().next().find('.messanger').show();
    $(this).parent().next().find('.messanger').attr('name','messenger_login').attr('required','').attr("placeholder", getSelect);
    $(this).parent().next('.input-container').css("overflow","hidden");
    $('.my-intl-tel-input').find('#iti').attr('name','').removeAttr('required');
    $('.my-intl-tel-input').hide();
  }
});

$(document).ready(function() {
  $(".selected-flag").click(function () {
    var ICOuterWidth = $(".my-intl-tel-input").parent('.input-container').outerWidth();
    $(".country-list").css('width', ICOuterWidth + 'px');
  });
});

$(window).on("resize", function () {
  ICOuterWidth = $(".my-intl-tel-input").parent('.input-container').outerWidth();
  $(".country-list").css('width', ICOuterWidth + 'px');
}).resize();

// advertisers form
$('.advertisers-form select').change(function() {
    var getSelect = $(this).val();
    $(this)
        .parents('.mixed-container')
        .find('label .adv_messenger_type')
        .html(getSelect);
});

// Live search in geo list
$('.dropdown-list-geo label').each(function(){
    $(this).attr('data-search-geo', $(this).text().toLowerCase());
});

$('#adv_countries').on('keyup', function(){
    var searchGeo = $(this).val().toLowerCase();
    $('.dropdown-list-geo label').each(function(){
        if ($(this).filter('[data-search-geo *= ' + searchGeo + ']').length > 0 || searchGeo.length < 1) {
            $(this).parent().show();
        } else {
            $(this).parent().hide();
        }
    });
});

// Geo list dropdown menu and tooltips
var geoList = function() {
    var $geoCheckbox = $(this).is(':checked'),
    $thisData = $(this).data('geo'),
    $iso = $thisData.substr(0, 2);

    if ($geoCheckbox == true) {
        $('.geography-work').append('<span class="geo-tag" data-geo="'+ $thisData +'">'+ $iso +'</span>');
    } else if ($geoCheckbox == false) {
        $('.geography-work .geo-tag:contains('+ $iso +')').remove();
    }

    if ($(".dropdown-list-geo input[type=checkbox]:checked").length > 0) {
        $('.geography-work').removeClass('empty');
        $('.geography-work-container input').addClass('hide');
    } else {
        $('.geography-work').addClass('empty');
        $('.geography-work-container input').removeClass('hide');
    }
    
};

$(document).click(function(event) {
    if ($(event.target).hasClass('geo-tag')) {
        $('.geography-work-container').addClass('focused');
    }
});

$('.geography-work').on('click', '.geo-tag', function() {
    $(this).remove();
    $thisDataGeo = $(this).data('geo');
    $('.dropdown-list-geo input[data-geo="'+ $thisDataGeo +'"]').prop('checked', false);
    if ($('.geography-work').is(':empty')) {
        $('.geography-work').addClass('empty');
        $('.geography-work-container input').removeClass('hide');
    }
});

$('.dropdown-list-geo input[type=checkbox]:checked').each(geoList);
$('.dropdown-list-geo input[type=checkbox]').change(geoList);

// $getDataGeo = $('.dropdown-list-geo input[type=checkbox]').data('geo');
// console.log($getDataGeo);
// $('.dropdown-list-geo input[type=checkbox]').next('label').attr('data-geo', $getDataGeo);

// var $geoList = "";
// $('.dropdown-list-geo input[type=checkbox]:checked').each(function(){
//     // $geoList = $(this).data('geo');
//     console.log($geoList);
// });

// Change language selection in registration form
var changeLang = function() {
    var $langSelected = $(this).is(':selected'),
        $langNotSel = $(this).find(':not(:selected)').data('language'),
        $langSelData = $(this).find(':selected').data('language'),
        $langData = $(this).data('language');
        $langNotSelArray = $(this).find('option:not(:selected)').map(function() { return 'flag-icon-' + $(this).data('language'); }).get();

    if ($langSelected == true) {
        $(this).parent('select').addClass('flag-icon-' + $langData);
    }
    // $(this).toggleClass('flag-icon-' + $langNotSel + ' flag-icon-' + $langSelData);
    $(this).removeClass($langNotSelArray).addClass('flag-icon-' + $langSelData);
    
};

$('.change-language-flag option:selected').each(changeLang);
$('.change-language-flag').change(changeLang);

// Disable zoom for iphone devices
function isiPhone() {
    return (
        navigator.platform.indexOf('iPhone') != -1 ||
        navigator.platform.indexOf('iPod') != -1
    );
}
if (isiPhone()) {
    $('input, textarea, select')
        .on('focus', function() {
            $(this).css('font-size', '16px');
        })
        .on('blur', function() {
            $(this).css('font-size', '0.875em');
        });
}

// Flexbox polifil
/*$(document).ready(function() {
  flexibility(document.documentElement);
});*/

// Offers
$(document).ready(function() {
    $('.change-offer').click(function() {
        $('.change-offer').removeClass('active');
        $(this).addClass('active');

        if ($('.change-offer.all').hasClass('active')) {
            $('.offers').removeClass('active');
            $('.offers.all').addClass('active');
        }
        if ($('.change-offer.foreign').hasClass('active')) {
            $('.offers').removeClass('active');
            $('.offers.foreign').addClass('active');
        }
        if ($('.change-offer.rus').hasClass('active')) {
            $('.offers').removeClass('active');
            $('.offers.rus').addClass('active');
        }
    });
});


//Change language
$('.change-language-link').click(function(e) {
    e.preventDefault();
    $(this).next('.change-language-dropdown').toggle();
});
$(document).click(function(event) {
    if (!$(event.target).closest('.change-language-dropdown, .change-language-link').length) {
        $('.change-language-dropdown').hide();
    }
});