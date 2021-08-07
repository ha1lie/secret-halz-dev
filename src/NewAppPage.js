import React, { Component } from 'react';
import { Box, Button, Form, Text, TextInput, FileInput, FormField, CheckBox } from 'grommet';

class NewAppPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSigned: true
    };
  }

  render() {
    return (
      <Box align='center' background='darkColor' direction='column' round='medium' pad='large' gap='medium' style={{ minWidth: '500pt'}}>
        <Box flex='grow' align='center' justify='start' direction='row'>
          <Text size='30pt' weight='700'>Upload a New App</Text>
        </Box>
        <Form method='post' enctype='multipart/form-data' onSubmit={({ value }) => {
          const formData = new FormData();
          formData.append("bundleID", value.bundleID);
          formData.append("description", value.description);
          formData.append("appName", value.displayName);
          formData.append("secretKey", value.authKey);
          formData.append("versionString", value.versionString);
          formData.append("isSigned", this.state.isSigned)
          for(let i =0; i < value.iconFile.length; i++) {
            formData.append("iconFile", value.iconFile[i]);
          }
          for(let i = 0; i < value.ipaFile.length; i++) {
            formData.append("ipaFile", value.ipaFile[i]);
          }
          fetch("https://api.halz.dev/apps/plus", {
            method: 'POST',
            body: formData
          }).then((res) => {
            console.log(res);
          }).catch((err) => {
            console.log("ERROR");
            console.log(err);
          });


        }} >
          <Box fill='horizontal' direction='row' justify='between' align='center'>
            <Text weight='700'>IPA File</Text>
            <FormField name='ipaFileField' htmlFor='ipaFile-id'>
              <FileInput
                name="ipaFile"
                id='ipaFile-id'
              />
            </FormField>
          </Box>
          <Box fill='horizontal' direction='row' justify='between' align='center'>
            <Text weight='700'>Icon(1024px PNG)</Text>
            <FormField name='iconFileField' htmlFor='iconFile-id'>
              <FileInput
                name="iconFile"
                id='iconFile-id'
              />
            </FormField>
          </Box>
          <CheckBox 
            checked={this.state.isSigned}
            label='Already Signed'
            onChange={ (e) => { this.setState({ isSigned: e.target.checked }) } }
          />
          <FormField name='appBundleID' htmlFor='bundleID-id'>
            <TextInput
              placeholder='App Bundle ID'
              name='bundleID'
              id='bundleID-id'
            />
          </FormField>
          <FormField name='versionString' htmlFor='versionString-id'>
            <TextInput
              placeholder='Version String'
              name='versionString'
              id='versionString-id'
            />
          </FormField>
          <FormField name='descriptionField' htmlFor='desc-id'>
            <TextInput
              placeholder='Description'
              name='description'
              id='desc-id'
            />
          </FormField>
          <FormField name='displayNameField' htmlFor='displayName-id'>
            <TextInput
              placeholder='Display Name'
              name='displayName'
              id='displayName-id'
            />
          </FormField>
          <FormField name='authKeyField' htmlFor='authKey-id'>
            <TextInput
              placeholder='Authentication Key'
              name='authKey'
              id='authKey-id'
            />
          </FormField>
          <Box>
            <Button type='submit' fill='horizontal' plain onClick={ () => { console.log("submit the form"); } } label={
              <Box fill='horizontal' background='myYellow' height='50pt' pad={{ horizontal: 'medium' }} round='medium' align='center' justify='between' direction='row' >
                <Text weight='600' color='darkColor' >SUBMIT</Text>
              </Box>
            } />
          </Box>
        </Form>
      </Box>
    );
  }
}

export default NewAppPage;