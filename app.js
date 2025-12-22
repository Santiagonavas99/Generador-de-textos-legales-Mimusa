// ================== ELEMENTOS ==================
const form = document.getElementById("form");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");
const statusEl = document.getElementById("status");

const brandEl = document.getElementById("brand");
const legalNameEl = document.getElementById("legalName");
const dniEl = document.getElementById("dni");
const addressEl = document.getElementById("address");
const phoneEl = document.getElementById("phone");
const emailEl = document.getElementById("email");

const templateSelectEl = document.getElementById("templateSelect");
const formatSelectEl = document.getElementById("formatSelect");

function setStatus(msg) {
  statusEl.textContent = msg || "";
}

function getData() {
  return {
    brand: brandEl.value.trim(),
    legalName: legalNameEl.value.trim(),
    dni: dniEl.value.trim(),
    address: addressEl.value.trim(),
    phone: phoneEl.value.trim(),
    email: emailEl.value.trim()
  };
}

// ================== PLANTILLAS TEXTO (EXACTAS) ==================
const templatesText = {

aviso_legal: (d) => `
AVISO LEGAL

OBJETO
El presente aviso legal regula el uso y utilización del sitio web, del que es titular ${d.brand} (en adelante, EL PROPIETARIO DE LA WEB).
La navegación por este sitio web le atribuye la condición de USUARIO del mismo y conlleva su aceptación plena y sin reservas de todas y cada una de las condiciones publicadas en este aviso legal, advirtiendo de que dichas condiciones podrán ser modificadas sin notificación previa por parte de ${d.brand}, en cuyo caso se procederá a su publicación y aviso con la máxima antelación posible.
Por ello es recomendable leer atentamente su contenido en caso de desear acceder y hacer uso de la información y de los servicios ofrecidos desde este sitio web.
El usuario, además, se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal, y responderá frente a ${d.brand} o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
Cualquier utilización distinta a la autorizada está expresamente prohibida, pudiendo ${d.brand} denegar o retirar el acceso y su uso en cualquier momento.

IDENTIFICACIÓN
EL PROPIETARIO DE LA WEB, en cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, le informa de que:

Su denominación social es: ${d.legalName}, DNI ${d.dni}, ${d.address}. Teléfono ${d.phone}.

COMUNICACIONES
Para comunicarse con nosotros, ponemos a su disposición el siguiente medio de contacto que detallamos a continuación:

${d.email}

Todas las notificaciones y comunicaciones entre los usuarios y ${d.brand} se considerarán eficaces, a todos los efectos, cuando se realicen a través de cualquier medio de los detallados anteriormente.

CONDICIONES DE ACCESO Y UTILIZACIÓN
El sitio web y sus servicios son de acceso libre y gratuito. No obstante, ${d.brand} puede condicionar la utilización de algunos de los servicios ofrecidos en su web a la previa cumplimentación del correspondiente formulario.
El usuario garantiza la autenticidad y actualidad de todos aquellos datos que nos comunique y será el único responsable de las manifestaciones falsas o inexactas que realice. Además se compromete a utilizar esta web, sus servicios y contenidos sin contravenir la legislación vigente, la buena fe y el orden público.
Queda prohibido el uso de esta web, con fines ilícitos o lesivos, o que, de cualquier forma, puedan causar perjuicio o impedir el funcionamiento normal de la misma.
Las marcas, nombres comerciales o signos distintivos de cualquier clase que aparecen en el sitio web son propiedad de ${d.brand}, sin que pueda entenderse que el uso o acceso al mismo atribuya al usuario derecho alguno sobre los mismos.
La distribución, modificación, cesión o comunicación pública de los contenidos y cualquier otro acto que no haya sido expresamente autorizado por el titular de los derechos de explotación quedan prohibidos.
${d.brand} no se responsabiliza del uso que cada usuario les dé a los materiales puestos a disposición en este sitio web ni de las actuaciones que realice en base a los mismos.

EXCLUSIÓN DE GARANTÍAS Y DE RESPONSABILIDAD EN EL ACCESO Y LA UTILIZACIÓN
El contenido del presente sitio web es de carácter general y tiene una finalidad meramente informativa, sin que se garantice plenamente el acceso a todos los contenidos, ni su exhaustividad, corrección, vigencia o actualidad, ni su idoneidad o utilidad para un objetivo específico.

${d.brand} excluye, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza derivados de:

La imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos, así como la existencia de vicios y defectos de toda clase de los contenidos transmitidos, difundidos, almacenados, puestos a disposición, a los que se haya accedido a través del sitio web o de los servicios que se ofrecen.
La presencia de virus o de otros elementos en los contenidos que puedan producir alteraciones en los sistemas informáticos, documentos electrónicos o datos de los usuarios.
El incumplimiento de las leyes, la buena fe, el orden público, los usos del tráfico y el presente aviso legal como consecuencia del uso incorrecto del sitio web. En particular, y a modo ejemplificativo, ${d.brand} no se hace responsable de las actuaciones de terceros que vulneren derechos de propiedad intelectual e industrial, secretos empresariales, derechos al honor, a la intimidad personal y familiar y a la propia imagen, así como la normativa en materia de competencia desleal y publicidad ilícita.

Asimismo, ${d.brand} declina cualquier responsabilidad respecto a la información que se halle fuera de esta web. La función de los links que aparecen en esta web es exclusivamente la de informar al usuario sobre la existencia de otras fuentes susceptibles de ampliar los contenidos que ofrece este sitio web. ${d.brand} no garantiza ni se responsabiliza del funcionamiento o accesibilidad de los sitios enlazados; ni sugiere, invita o recomienda la visita a los mismos, por lo que tampoco será responsable del resultado obtenido. ${d.brand} no se responsabiliza del establecimiento de hipervínculos por parte de terceros.

PROCEDIMIENTO EN CASO DE REALIZACIÓN DE ACTIVIDADES DE CARÁCTER ILÍCITO
En el caso de que cualquier usuario o un tercero considere que existen hechos o circunstancias que revelen el carácter ilícito de la utilización de cualquier contenido y/o de la realización de cualquier actividad en las páginas web incluidas o accesibles a través del sitio web, deberá enviar una notificación a ${d.brand} identificándose debidamente y especificando las supuestas infracciones.

LEGISLACIÓN APLICABLE
Las condiciones presentes se regirán por la legislación española vigente.
`.trim(),

privacidad: (d) => `
POLÍTICA DE PRIVACIDAD
En ${d.brand} nos preocupamos por la privacidad y la transparencia.

A continuación, le indicamos en detalle los tratamientos de datos personales que realizamos, así como toda la información relativa a los mismos.

Tratamiento de los datos personales.

Información básica sobre Protección de datos
Responsable:	${d.brand}
Finalidad:	· Gestión y control de datos de contacto de clientes/colaboradores
Legitimación:	· Ejecución de un contrato.
· Interés legítimo del Responsable.
· Consentimiento del interesado
Destinatarios:	No están previstas cesiones de datos salvo las obligatorias por Ley
Derechos:	Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, indicados en la información adicional, que puede ejercer dirigiéndose a la dirección del responsable del tratamiento
Procedencia:	El propio interesado
Información completa sobre Protección de Datos

¿Quién es el responsable del tratamiento de sus datos?
${d.brand} – ${d.email}

¿Con qué finalidad tratamos sus datos personales?
En ${d.brand} tratamos la información que nos facilitan las personas interesadas con el fin de realizar la gestión administrativa, contable y fiscal de las diferentes actividades llevadas a cabo por ${d.brand}, así como enviar comunicaciones de eventos, cursos y cualquier otra actividad. En el caso de que no facilite sus datos personales, no podremos cumplir con las finalidades descritas.

No se van a tomar decisiones automatizadas en base a los datos proporcionados.

¿Por cuánto tiempo conservaremos sus datos?
Los datos se conservarán mientras el interesado no solicite su supresión, y en su caso, durante los años necesarios para cumplir con las obligaciones legales.

¿Cuál es la legitimación para el tratamiento de sus datos?
Le indicamos la base legal para el tratamiento de sus datos:

Ejecución de un contrato: Realizar la gestión administrativa, contable y fiscal de las actividades desarrolladas por ${d.brand}
Interés legítimo del Responsable: Enviar comunicaciones sobre las diferentes actividades que desarrolla ${d.brand}
Consentimiento del interesado: La persona que nos facilita sus datos personales consiente de forma expresa el tratamiento de sus datos

¿A qué destinatarios se comunicarán sus datos?
Los datos no se comunicarán a terceras partes salvo obligación legal

Transferencias de datos a terceros países
No están previstas transferencias de datos a terceros países.

¿Cuáles son sus derechos cuando nos facilita sus datos?
Cualquier persona tiene derecho a obtener confirmación sobre si en ${d.brand} estamos tratando, o no, datos personales que les conciernan.

Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. Igualmente tiene derecho a la portabilidad de sus datos.

En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.

En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. En este caso, ${d.brand} dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.

Podrá ejercitar materialmente sus derechos de la siguiente forma: dirigiéndose a la dirección del responsable del tratamiento

Cuando se realice el envío de comunicaciones comerciales utilizando como base jurídica el interés legítimo del responsable, el interesado podrá oponerse al tratamiento de sus datos con ese fin.

Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.

En caso de que sienta vulnerados sus derechos en lo concerniente a la protección de sus datos personales, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, puede presentar una reclamación ante la Autoridad de Control en materia de Protección de Datos competente a través de su sitio web: www.aepd.es

¿Cómo hemos obtenido sus datos?
Los datos personales que tratamos en ${d.brand} proceden del propio interesado.

Las categorías de datos que se tratan son:

Datos identificativos.
Direcciones postales y electrónicas.
`.trim(),

cookies: (d) => `
POLÍTICA DE COOKIES
Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc. El objetivo de la cookie es adaptar el contenido de la web a su perfil y necesidades, sin cookies los servicios ofrecidos por cualquier página se verían mermados notablemente. Si desea consultar más información sobre qué son las cookies, qué almacenan, cómo eliminarlas, desactivarlas, etc., le rogamos se dirija a este enlace.

Cookies utilizadas en este sitio web
Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.

Este sitio web utiliza las siguientes cookies propias:

Cookies de sesión, para garantizar que los usuarios que escriban comentarios en el blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.
Este sitio web utiliza las siguientes cookies de terceros:

Google Analytics: Almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por Google. Por tanto, el ejercicio de cualquier derecho en este sentido deberá hacerlo comunicando directamente con Google.
Redes sociales: Cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta o Compartir.
Desactivación o eliminación de cookies
En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando. Aquí le dejamos una guía rápida para los navegadores más populares.

Notas adicionales
Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.
Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debe efectuar su derecho a eliminación o desactivación de las mismas. Ni esta web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.
En algunos casos es necesario instalar cookies para que el navegador no olvide su decisión de no aceptación de las mismas.
En el caso de las cookies de Google Analytics, esta empresa almacena las cookies en servidores ubicados en Estados Unidos y se compromete a no compartirla con terceros, excepto en los casos en los que sea necesario para el funcionamiento del sistema o cuando la ley obligue a tal efecto. Según Google no guarda su dirección IP. Google Inc. es una compañía adherida al Acuerdo de Puerto Seguro que garantiza que todos los datos transferidos serán tratados con un nivel de protección acorde a la normativa europea. Puede consultar información detallada a este respecto en este enlace. Si desea información sobre el uso que Google da a las cookies le adjuntamos este otro enlace.
Para cualquier duda o consulta acerca de esta política de cookies no dude en comunicarse con nosotros a través de la sección de contacto.
`.trim(),

accesibilidad: (d) => `
ACCESIBILIDAD
CONTENIDO NO ACCESIBLE
El contenido que se recoge a continuación no es accesible por lo siguiente:

Falta de conformidad con el RD 1112/2018:
En el portal pueden existir contenidos en otros idiomas en los que no está etiquetado correctamente el cambio de idioma
Los elementos multimedia solo audio no tienen alternativa
Existen vídeos sin subtítulos
Hay contenido textual sin un contraste suficiente
Se observa como en algunos casos el foco no cumple con el mínimo ratio de contraste requerido
En algún caso puede producirse solapamiento de contenido
Existen documentos PDF con problemas de accesibilidad
Carga desproporcionada:
No aplica.

Contenido no entra dentro del ámbito de la legislación aplicable:
Pueden existir documentos en formato PDF publicados antes del 20 de septiembre de 2018 que no cumplan en su totalidad todos los requisitos de accesibilidad.

PREPARACIÓN DE LA PRESENTE DECLARACIÓN DE ACCESIBILIDAD
La presente declaración fue preparada el 28 de Febrero de 2023.

El método empleado para la presente declaración ha sido una autoevaluación realizada por la propia Agencia con el soporte de la Herramienta IRA (Informe de Revisión de Accesibilidad) del Observatorio de Accesibilidad.

Última revisión de la declaración: 28 de Febrero de 2023.

OBSERVACIONES Y DATOS DE CONTACTO
Comunicaciones sobre requisitos de accesibilidad
Puede realizar comunicaciones sobre requisitos de accesibilidad (artículo 10.2.a del RD 1112/2018) como, por ejemplo:

informar sobre cualquier posible incumplimiento por parte de este sitio web
transmitir otras dificultades de acceso al contenido
formular cualquier otra consulta o sugerencia de mejora relativa a la accesibilidad del sitio web
Contactar con nosotros a través de nuestra dirección de correo electrónico ${d.email}

Solicitudes de información accesible y quejas
A traves de nuestra dirección de correo electrónico ${d.email} puede presentar:

una Queja relativa al cumplimiento de los requisitos del RD 1112/2018 o
una Solicitud de Información accesible relativa a:
contenidos que están excluidos del ámbito de aplicación del RD 1112/2018 según lo establecido por el artículo 3, apartado 4
contenidos que están exentos del cumplimiento de los requisitos de accesibilidad por imponer una carga desproporcionada.
En la Solicitud de información accesible, se debe concretar, con toda claridad, los hechos, razones y petición que permitan constatar que se trata de una solicitud razonable y legítima.

PROCEDIMIENTO DE APLICACIÓN
Si una vez realizada una solicitud de información accesible o queja, ésta hubiera sido desestimada, no se estuviera de acuerdo con la decisión adoptada, o la respuesta no cumpliera los requisitos contemplados en el artículo 12.5 del RD 1112/2018, la persona interesada podrá iniciar una reclamación. Igualmente se podrá iniciar una reclamación en el caso de no haber obtenido respuesta.

El procedimiento reclamación recogido en el artículo 13 del RD 1112/2018, puede iniciarse a través de este enlace.

CONTENIDO OPCIONAL
Este sitio web:

se ha diseñado adaptándose a los estándares y normativas vigentes en relación a la accesibilidad, cumpliendo con los puntos de verificación de prioridad 2 (AA) definidos en la especificación de Pautas de Accesibilidad al Contenido en la Web (WCAG 2.1)
está optimizado para las últimas versiones vigentes de Chrome, Edge, Firefox, Safari y Opera
está diseñado para su correcta visualización en cualquier resolución y dispositivo de escritorio, tabletas o móviles (diseño responsive)
se ha realizado utilizando HTML5 como lenguaje de marcado y hojas de estilo CSS 3 para su diseño
Además, se realiza un trabajo continuo de auditoría y revisión de contenidos para facilitar su interpretación y mejorar la navegación por el portal web.
`.trim()
};

// ================== HTML CON NEGRITAS ==================
function escapeHtml(s) {
  return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

function toHtmlWithBold(text, d) {
  let t = text;
  Object.values(d).forEach(v => {
    if (v) t = t.replaceAll(v, `<strong>${escapeHtml(v)}</strong>`);
  });
  return t.replaceAll("\n", "<br>\n");
}

// ================== GENERAR ==================
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const d = getData();
  const key = templateSelectEl.value;
  const format = formatSelectEl.value;

  const baseText = templatesText[key](d);
  output.value = format === "html" ? toHtmlWithBold(baseText, d) : baseText;

  setStatus("✅ Documento generado");
});

copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(output.value);
  setStatus("✅ Copiado al portapapeles");
});