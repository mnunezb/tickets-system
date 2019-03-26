# tickets-system

Ejercicio:
Se requiere generar un sistema de tickets para trabajos realizados por una empresa de subcontratación, la cual posee las siguientes características (por orden de prioridad)

•	Cada ticket debe tener uno o más servicios asociados

•	Cada servicio tiene un valor en UF y un tipo de servicio

•	Cada vez que se agregue/quite/modifique un servicio el valor del ticket debe ser recalculado

•	Cada ticket tiene 3 estados: pending - finished - paid

•	Cada ticket tiene un usuario de tipo técnico asociado

•	El proyecto debe poseer un sistema de roles, un técnico es capaz de auto asignarse tickets y cambiar su estado a finished, un administrador es capaz de crear tickets, editarlos y cambiar su estado a paid. La autentificación es opcional, seleccionar el rol en una pantalla inicial, bastaría.

•	Al consultar por un ticket este debe traer el total convertido a pesos con el valor de la UF del día

•	(opcional) una vez que el ticket queda como paid, el total devuelto debe ser con el valor de la UF del día en que se pagó


El ejercicio se desarrollo en nodejs y express por el lado del backend y con angular 7 la parte del frontend
