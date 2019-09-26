import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(){
    return (
      <div>
      <header style="width: 100%; background: blue; padding: 4px;">
      <div id ="enlacesHead">
        <a class="linkHead" href="#">Inicio</a>
        <a class="linkHead" href="#">Ideas</a>
        <a class="linkHead" href="#">Más blogs</a>
        <a class="linkHead" href="#">Aportar</a>
        <button type="button" onclick="mostrarFecha()">
          Ver fecha
        </button>
      </div>

      </header>

      </div>
    );
}

function Tabla(){
  return(
    <table>
        <tr>
          <th>Tipo</th>
          <th>Concepto</th>
        </tr>
        <tr>
          <td>Blogs profesionales pequeños</td>
          <td><p>
            Principalmente aquellos que son conducidos por freelance o un grupo profesional pequeño; ya que al no tener tanta capacidad de recurso y tiempo es necesario concentrar especialidad para ofrecer un trabajo profesional y distinto en el mercado. No es lo mismo ser redactor freelance, que ser redactor freelance especializado en gastronomía y recetas. Aunque el flujo de clientes sea poco, este puede ser de muy buena calidad para el negocio.
            </p></td>
        </tr>
        <tr>
          <td>Blogs para monetizar por Adsense</td>
          <td><p>
            Esta es probablemente la manera más rápida de monetizar un blog si no cuentas con ningún producto para vender, se trata de vender publicidad. Con este modelo se paga por clic efectuado en cada anuncio, se le dice pago por clic (PPC). Es muy recomendable que se dediquen a un nicho de mercado concreto, al menos que cuentes con bastante personal para posicionar diferentes temáticas.
            </p></td>
        </tr>
        <tr>
          <td>Blogs para monetizar por marketing de afiliados</td>
          <td><p>
            Es un modelo de negocios en el que muestras publicidad de otras empresas de una red de afiliación y solo ganas dinero si generas ventas o aportas registros para el anunciante. En este caso la concentración en un nicho resulta crucial.
            </p></td>
        </tr>
      </table>
  );
}

function Imagenes(){
  return(
    <div id="imagenes" style="width:100%;" >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Assorted_United_States_coins.jpg/280px-Assorted_United_States_coins.jpg" width="50%" height="100px" style="float: left;" />
      <img src="https://elpais.com/internacional/imagenes/2018/03/03/solo_en_argentina/1520095773_787541_1520095946_noticia_grande.jpg" width="50%" height="100px" />

    </div>
  );
}

funtion Footer(){
  return(
    <footer style="text-align: center;">
      Muchas gracias por su visita!
    </footer>
  );
}

function Cuerpo(){
  return(
    <div>
      <h1>
      Blog de nicho: enfocado a la monetización
      </h1>
      <img src="https://www.historiando.org/wp-content/uploads/2018/11/Dinero-1024x588.jpeg" width="100%" height="150px" />

      <div style="border: 5px solid black; border-radius: 10px;">
      <ol>
        Indice (haga click sobre la sección que desea ver)
        <li id="inidice1" onclick="location.hash='#definicionBlog'">Definición de blog de nicho </li>
        <li id="inidice2" onclick="location.hash='#tiposBlog'" >Tipos de blog de nicho </li>
      </ol>
      </div>

      <p>
      El blog de nicho es el tipo de blog que utiliza con mayor énfasis la redacción seo, ya que son blogs creados con la finalidad de monetizarse a través de publicidad o de encontrar un público muy selecto. Como sabrás la publicidad realmente comienza a pagar cuando el tráfico de tu sitio web es alto, ya sea publicidad directa de tus clientes o a través de Adsense que es la agencia de Google que canaliza todo lo referente a la publicidad. Los expertos en este tipo de blogs están de acuerdo que necesitas un tráfico aproximadamente de 1000 personas diarias para comenzar a recibir alrededor de 100 $ mensuales. Veamos si este es el tipo de blog que te conviene.
      </p>

      <h2 id="definicionBlog">
      Definición de blog de nicho
      </h2>

      <p>
      Es un tipo de blog que está concentrado en un mercado especializado. Dentro del marketing el nicho de mercado se define como un segmento del mercado que tiene unas características homogéneas y unas necesidades particulares. Esto supone una oportunidad comercial para cualquier empresa y una ventaja para entrar al mercado. Muchas veces se habla incluso de micronichos, principalmente en mercados que son muy concurridos.

      </p>
      <p>
      Por ejemplo, es bien sabido que las agencias de marketing digital todos los días crecen un poco más, siendo cada vez más difícil posicionarse o encontrar clientes. Concentrarse en un nicho del marketing digital, por ejemplo el mantenimiento de blogs, puede ser una excelente idea. De esta manera se le deja a otras agencias de marketing el trabajo de redes sociales, analítica, publicidad, etc. Pero si se quiere trabajar en un micro nicho se podría ajustar aún más a un mercado más pequeño, por ejemplo, una agencia de marketing digital para mantenimiento de blogs especializada en el sector salud.

      </p>
      <p>
      Esto resulta muy beneficiosos para darse a conocer en el medio digital como especialista, las clínicas, spa, centros de salud, medicina natural son los posibles clientes que estén interesados en este ejemplo.
      </p>

      <h2 id="tiposBlog">
      Tipos de blog de nicho
      </h2>

      Existen varios tipos, entre ellos.
      <ul>
      <li>Blogs profesionales pequeños</li>
      <li>Blogs para monetizar por Adsense</li>
      <li>Blogs para monetizar por marketing de afiliados</li>
      </ul>

      <center>
        Tabla()
      </center>

      Imagenes()

          Fuente: <a href="http://elnuevoentrepreneur.com/blog-de-nicho-enfocado-en-la-monetizacion/">
          El Nuevo Entrepeneur - Blog de nicho ¡Enfocado en la monetización!</a>

    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
