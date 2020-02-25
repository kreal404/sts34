<?php

if ( !empty($_POST) && trim($_POST['form-name']) != '' && trim($_POST['tel']) != '' ) {

    $message =  "Вам пришло новое сообщение с сайта: \n" .
                "Название формы: " . $_POST['form-name'] . "\n" .
                "Имя отправителя: " . $_POST['your-name'] . "\n" .
                "Телефон отправителя: ". $_POST['tel'] . "\n" .
                "Сообщение: ". $_POST['message'];

    mail( 'info@rightblog.ru', "Сообщение с сайта!", $message );

    header('location: thankyou.html');

}

?>
