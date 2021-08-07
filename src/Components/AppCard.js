import React, { Component } from 'react';
import { Box, Text, Anchor, Select, ResponsiveContext } from 'grommet';
import { DownloadOption } from 'grommet-icons';

class AppCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedVersionIndex: 0
    };
  }

  render() {
    console.log(this.props.app.versions[0].plistLocation);
    return <Box align='center' background='darkColor' direction='row' round='medium' pad='large' gap='medium'>
      <ResponsiveContext.Consumer>
        { size => (
          <Box round='small' width={size === 'small' || size === 'xsmall' ? '30pt' : '50pt'} height={size === 'small' || size === 'xsmall' ? '30pt' : '50pt'} background={ "url('" + this.props.app.versions[this.state.selectedVersionIndex].iconURL + "')" } />
        )}
      </ResponsiveContext.Consumer>
      <Box width='50%' direction='column' flex='grow' >
        <Text weight='700' size='150%'>{ this.props.app.name }</Text>
        <Text>{ this.props.app.description }</Text>
        <Box pad='xsmall' />
        <Select
          options={this.props.app.versions.map((v) => v.versionString)}
          value={this.props.app.versions[this.state.selectedVersionIndex].versionString}
          onChange={(n) => { this.setState({ selectedVersionIndex: this.props.app.versions.map((v) => v.versionString).indexOf(n.value) }) }}
        />
      </Box>
      <Anchor icon={ <DownloadOption color='white' size='32pt' href={ "itms-services://?action=download-manifest&amp;url=" + this.props.app.versions[this.state.selectedVersionIndex].plistLocation} /> } />
    </Box>
  }
}

export default AppCard;