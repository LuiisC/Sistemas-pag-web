<?php
$nombre = $_REQUEST['nombre'];
$telef = $_REQUEST['telefono'];
$mail = $_REQUEST['email'];
$mensaje = $_REQUEST['mensaje'];

echo " Datos de la solicitud ";
echo "<p>Nombre: $nombre </p>";
echo "<p>Telefono: $telef </p>";
echo "<p>Email: $mail </p>";
echo "<p>Mensaje: $mensaje </p>";
?>
