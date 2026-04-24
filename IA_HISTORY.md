# IA_HISTORY.md — Registro de Uso de IA
Alumno/a: Ángela Lucero Álvarez

Fecha: 23 de Abril de 2026

Prompt 1

Momento del proceso:
Al inicio  cuando intentaba que las tarjetas de estadísticas (.stat-card) encajaran en una sola fila sin romperse al agregarles padding y márgenes.

Lo que le pedí a la IA:

"Actúa como un Ingeniero Frontend Senior. Necesito rehacer la estructura de datos para una ficha de personaje. Explicame la mecánica del Box Model cuando se presentan desbordamientos por padding y cómo implementar un reset global eficiente que garantice que el tamaño de las cajas sea predecible en todo el proyecto."

Análisis del resultado obtenido:

La IA propuso una estructura coherente utilizando <main> y <section>, lo cual fue un buen punto de partida para limpiar el código. Me explicó el concepto de box-sizing: border-box, que era exactamente lo que necesitaba para entender por qué las cajas se agrandaban al añadirles relleno.
El enfoque fue pedagógico y me dio una buena base para empezar a separar el CSS del HTML.

Qué debí corregir manualmente y por qué:

Tuve que hacer varios ajustes porque la IA sugirió aplicar el box-sizing solo a clases específicas, lo cual me pareció poco escalable. Decidí ignorar esa sugerencia y lo apliqué de forma global con el selector universal * para garantizar que todos los elementos del DOM se comporten igual. Además, noté que la IA usó un <h3> para el nombre del personaje, pero lo cambié manualmente a un <h1> porque técnicamente es el encabezado principal de la página. También corregí la navegación, ya que la IA mezclaba secciones genéricas y yo preferí usar <nav> con una lista <ul> para cumplir con los estándares de accesibilidad.

Prompt 2
Momento del proceso:

Durante la creación del archivo script.js, específicamente cuando estaba definiendo la lógica de combate y los estados de salud de Zara.

Lo que le pedí a la IA:

"Necesito pasar mi lógica de combate a sintaxis de Arrow Functions para que el código quede más limpio. Explicame cuándo usar el retorno implícito y generame un ejemplo de una función de daño que reste ataque y defensa, pero asegurate de que el resultado nunca sea un número negativo."

Análisis del resultado obtenido:
La IA me mostró cómo usar las funciones flecha y el ahorro de código que permiten los retornos en una sola línea. Fue útil para modernizar el estilo del script y cumplir con los requisitos del examen. Sin embargo, el ejemplo de cálculo que me dio era demasiado básico (una resta directa), ignorando que en un juego real, si la defensa es mayor al ataque, el código podría devolver un daño negativo y causar errores.

Qué debí corregir manualmente y por qué:
Tuve que intervenir en la función calculateDamage porque la IA me la dio en una sola línea que devolvía valores negativos (como -5), lo que hacía que el personaje ganara vida al ser atacado. Abrí las llaves {} manualmente y le agregué un condicional para que, si el daño es menor a cero, devuelva 0 siempre. También cambié los nombres de las variables; la IA usó letras genéricas como a y b, y yo las renombré a attack y defense para que el código sea más claro y fácil de entender para cualquiera que lo lea.

Reflexión final:
La IA es una herramienta muy buena para refrescar sintaxis o darte una estructura base, pero suele fallar en los detalles finos de la jerarquía del HTML y en la lógica de casos especiales en JS. Aprendí que sirve para acelerar el trabajo, pero siempre tengo que revisar y corregir el código para que sea escalable.