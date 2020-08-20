import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErroImg404 from './assets/img/Img404.jpg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (
  <div className="erro404">
    <h1>Detetive 3, Onde está a Home?</h1>
    <a href='/'>
      <img className='sumiu' src={ErroImg404}></img>
    </a>
    <p className="mensagem404">Error 404 - Not found</p>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);