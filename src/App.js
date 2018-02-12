import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div className="App">
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{t('Welcome to React')}</h1>
        </header>
        <p className="App-intro">
          <Trans>
          To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
      </div>
    );
  }
}

export default translate('translations')(App);
