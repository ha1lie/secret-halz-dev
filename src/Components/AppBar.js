import React, { Component } from "react";
import { Box, Heading, Button, ResponsiveContext, Layer, Anchor, Text } from 'grommet';
import { FormClose, Github, Twitter, Menu } from "grommet-icons";

const AppBarContainer = (props) => (
    <Box 
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='raisinBlack'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='none'
        style={{ zIndex: '1', position: 'fixed', left: '0px', right: '0px', top: '0px' }}
        height='60px'
        {...props}
    />
);

class AppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMobileContainer: false,
      showAcivityThread: 'empty'
    };
  }

  render() {
    return (<ResponsiveContext.Consumer>
      {size => (
        <Box fill>
          <AppBarContainer background='darkColor' >
            <Box direction='row' align='center' gap='8px'>
              <Anchor href='/'>
                <Heading level='2' margin='none' color='lightColor'>[ secrets. ]</Heading>
              </Anchor>
            </Box>
            {(size === 'small') ? (
                <Button icon={ <Menu color='lightColor' /> } onClick={ () => { this.setState({ showMobileContainer: true }) } } />
            ) : (
                <Box direction='row' pad='horizontal'>
              </Box>
            )}
          </AppBarContainer>
          {(size === 'small' && this.state.showMobileContainer) ? ( 
              <Layer animation='fadeIn' background="#00000000">
                  <Box fill background='darkColor' tag='header' justify='between' align='center' direction='column' >
                    <Box fill='horizontal' direction='column'>
                      <Box fill='horizontal' elevation='none' justify='between' direction='row' pad={{ left: 'medium', right: 'small', vertical: 'small' }}>
                        <Box direction='row' align='center' gap='8px'>
                          <Heading level='2' margin='none' color='lightColor'>[ secrets. ]</Heading>
                        </Box>
                        <Button plain icon={ <FormClose color='lightColor' size='large' /> } onClick={ () => { this.setState({ showMobileContainer: false }) } } />
                      </Box>
                    </Box>
                    <Box fill direction='column' justify='center' align='center'>
                      <Anchor color='lightColor' href='https://www.google.com' >
                        <Heading level='1'>[ leave. ]</Heading>
                      </Anchor>
                    </Box>
                  </Box>
              </Layer>
            ) : undefined }
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default AppBar;