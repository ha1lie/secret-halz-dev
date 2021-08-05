import React, { Component } from 'react';
import { Box, Spinner } from 'grommet';
import AppCard from './Components/AppCard';


class AppPage extends Component {

  async fetchAppInformation() {

    let appInfo = null;

    await fetch('https://api.halz.dev/apps', {
      method: 'GET'
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      appInfo = json.appInformation;
    });

    this.setState({ apps: appInfo });

    console.log(this.state);
  }

  constructor(props) {
    super(props);
    
    this.fetchAppInformation();

    this.state = {
      apps: null
    };

  }

  render() {
    return (
      <Box flex='grow' direction='column' fill='horizontal' pad='medium' gap='medium' style={{ overflow: 'auto', maxWidth: '700px' }}>
        { (this.state.apps != null) ? (
          this.state.apps.map((app, i) => {
            var passApp = app;
            passApp.versions.sort((a, b) => (a.publishTime < b.publishTime) ? 1 : ((b.publishTime < a.publishTime) ? -1 : 0));
            return <AppCard app={app} />
        })) : (
          <Box align='center' justify='center' style={{ minHeight: 'calc(100vh - 60pt)' }}>
            <Spinner size='large' color ='lightColor' />
          </Box>
        )}
      </Box>
    );
  }
}

export default AppPage;