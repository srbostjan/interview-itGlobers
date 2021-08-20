import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Form } from '../components/Form';
import '../styles/App.scss'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/1' render={() => <Form name='Advance Travel' />} />
          <Route exact path='/2' render={() => <Form name='Maxi Travel' />} />
          <Route exact path='/3' render={() => <Form name='TuristiK' />} />
          <Route exact path='/4' render={() => <Form name='Camino del Sol' />} />
          <Route exact path='/5' render={() => <Form name='Agencia Destinos' />} />
          <Route component={Form} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;