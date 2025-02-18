const OPTIONS = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': '71e59e906dmshfdc9ed284df2469plb599cjsn0355f0f200d5',
    // 'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com',
    'X-RapidAPI-Key': 'XXX',
    'X-RapidAPI-Host': 'YYY',
  },
};

const fecthIpInfo = (ip) => {
  return (
    fetch(
      //esta api ya no existe, por eso la comentamos
      // `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
      `https://freeipapi.com/api/json/${ip}`,
      OPTIONS
    )
      .then((res) => res.json())
      // .then((data) => {
      //   console.log(data);
      // })
      .catch((err) => console.error(err))
  );
};

/*Esta es la forma tradicional de declarar variables, sinos damos cuenta...utilizamos el document.querySelector.
Usamos algo de jQuery para hacerlo más corto y fácil de leer.

 
const $form = document.querySelector('#form');
const $input = document.querySelector('#ip');
const $submit = document.querySelector('#submit');
const $results = document.querySelector('#results');

Lo que hacemos es agregar el signo de $ al inicio de cada variable para indicar que es un elemento del DOM.

Para tener buenas practicas hacemos lo siguiente:
*/
const $ = (selector) => document.querySelector(selector);

const $form = $('#form');
const $input = $('#input');
const $submit = $('#submit');
const $results = $('#results');

$form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { value } = $input;
  if (!value) return;

  $submit.setAttribute('disabled', '');
  $submit.setAttribute('aria-busy', 'true');

  const ipInfo = await fecthIpInfo(value);

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  $submit.removeAttribute('disabled');
  $submit.removeAttribute('aria-busy');
});
