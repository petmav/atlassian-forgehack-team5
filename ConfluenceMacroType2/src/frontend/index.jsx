import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Stack, Heading, Button, LinkButton, Link, useConfig, TextArea, Label, Textfield, Text, Box, xcss, Image, Inline } from '@forge/react';

const containerStyles = xcss({
  backgroundColor: 'color.background.success',
  boxShadow: 'elevation.shadow.raised',
  padding: 'space.200',
  borderRadius: 'border.radius'
}); // templates for multi-coloured formatting


const containerStyles2 = xcss({
  backgroundColor: 'color.background.warning',
  boxShadow: 'elevation.shadow.raised',
  padding: 'space.200',
  borderRadius: 'border.radius'
}); // templates for multi-coloured formatting

const containerStyles3 = xcss({
  backgroundColor: 'color.background.discovery',
  boxShadow: 'elevation.shadow.raised',
  padding: 'space.200',
  borderRadius: 'border.radius'
}); // templates for multi-coloured formatting (chosen)

const Config = () => {
  return (
    <>
      <Label>Event Name</Label>
      <Textfield name="title" id="title"/>
      <Label>Event Link</Label>
      <Textfield name="link" id="link"/>
      <Label>Date/Time</Label>
      <Textfield name="date" id="date"/>
      <Label>Location</Label>
      <Textfield name="location" id="location"/>
      <Label>Interested</Label>
      <Textfield name="interested" id="interested"/>
      <Label>Participating</Label>
      <Textfield name="participating" id="participating"/>
      <Label>Share Link</Label>
      <Textfield name="share" id="share"/>
      <Label>Type</Label>
      <Textfield name="type" id="type"/>
    </>
  );
};

const App = () => {

  const configValues = useConfig() || {};

  return (
    <>
      <Box xcss={containerStyles}>
        <Stack space="space.100">
          <Inline >
            <Heading as="h1">{configValues.title}</Heading>
          </Inline>
          <Inline >
            <Text>{configValues.date}</Text>
          </Inline>
          <Inline >
            <Text>{configValues.location}</Text>
          </Inline>
          <Inline >
            <Text>Interested: {configValues.interested}</Text>
          </Inline>
          <Inline >
            <Text>Participating: {configValues.participating}</Text>
          </Inline>
          <Inline space="space.050">
            <Box>
              <LinkButton href={configValues.link}>Interested?</LinkButton>
            </Box>
            <Box>
              <LinkButton href={configValues.sharelink}>Share</LinkButton>
            </Box>
          </Inline>
        </Stack>
      </Box>
      <Box >
        <Image src='https://i.ibb.co/zPJznX8/1000-F-747550878-RUDi-YTTZ1-X0-H3r-SR55-EPr-Uh9umel-Pd-RA.jpg' />
      </Box>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

ForgeReconciler.addConfig(<Config />);