const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); /* Se agrega . */
const $b = document.querySelector('.blog'); /* Se cambia # por . */
const $l = document.querySelector('.location');

async function displayUser(username) { /* Se agrega async */
  $n.textContent = 'cargando...';
  try { /* Se agrega */
    const response = await fetch(`${usersEndpoint}/${username}`);
    if (!response.ok) { /* Se agrega */
      throw new Error('Error en la solicitud de usuario'); /* Se agrega */
    } /* Se agrega */
    const data = await response.json(); /* Se agrega */
    console.log(data);
    $n.textContent = data.name; /* Se elimina la interpolación */
    $b.textContent = data.blog; /* Se elimina la interpolación */
    $l.textContent = data.location; /* Se elimina la interpolación */
  } catch (err) { /* Se agrega */
    handleError(err); /* Se agrega */
  } /* Se agrega */
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; /* Se agrega $ al inicio y ; al final */
}

displayUser('stolinski'); /* Se elimina .catch(handleError) */