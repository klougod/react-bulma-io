import React, { Fragment } from 'react';
import Bulma from '../lib';

const App = () => (
  <Fragment>
    <strong className="">Menu Example</strong>&nbsp;<Bulma.Tag text="Working" color="is-success"/>
    <Bulma.Navbar>
      <Bulma.NavbarBrand>
        <h1>Bulma Brand Logo</h1>
      </Bulma.NavbarBrand>
      <Bulma.NavbarStart>
        <a href="/">Navbar</a>
        <a href="/">Start</a>
      </Bulma.NavbarStart>
      <Bulma.NavbarEnd>
        <a href="/">Navbar</a>
        <a href="/">End</a>
      </Bulma.NavbarEnd>
    </Bulma.Navbar>
    <strong className="">Grid Example</strong>&nbsp;<Bulma.Tag text="Working" color="is-success"/>
    <Bulma.Section className="has-background-light">
      <Bulma.Columns className="is-multiline">
        <Bulma.Column size={5} className="has-text-centered has-background-primary">
          <h1>SIZE 5</h1>
        </Bulma.Column>
        <Bulma.Column size={3} className="has-text-centered has-background-info">
          <h1>SIZE 3</h1>
        </Bulma.Column>
        <Bulma.Column size={4} className="has-text-centered has-background-warning">
          <h1>SIZE 4</h1>
        </Bulma.Column>
      </Bulma.Columns>
      <Bulma.Columns className="is-multiline">
        <Bulma.Column size={6} className="has-text-centered has-background-danger">
          <h1>SIZE 6</h1>
        </Bulma.Column>
        <Bulma.Column size={3} className="has-text-centered has-background-success">
          <h1>SIZE 3</h1>
        </Bulma.Column>
        <Bulma.Column size={2} className="has-text-centered has-background-link">
          <h1>SIZE 2</h1>
        </Bulma.Column>
      </Bulma.Columns>
    </Bulma.Section>
    <strong className="">Hero Example</strong>&nbsp;<Bulma.Tag text="Working" color="is-success"/>
    <Bulma.Section className="has-background-grey-lighter">
      <Bulma.Columns className="is-centered">
        <Bulma.Column size={8} className="has-text-centered has-background-dark">
          <Bulma.Box className="has-background-grey-light">
            <Bulma.Hero className="has-text-centered">
              <Bulma.HeroHead>
                <h1>Hero Head</h1>
              </Bulma.HeroHead>
              <Bulma.HeroBody>
                <h1>Hero Body</h1>
              </Bulma.HeroBody>
              <Bulma.HeroFoot>
                <h1>Hero Foot</h1>
              </Bulma.HeroFoot>
            </Bulma.Hero>
          </Bulma.Box>
        </Bulma.Column>
      </Bulma.Columns>
    </Bulma.Section>
    <strong className="">Card Example</strong>&nbsp;<Bulma.Tag text="Working" color="is-success"/>
    <Bulma.Section className="has-background-white-ter">
      <Bulma.Columns className="is-centered">
        <Bulma.Column size={8} className="has-text-centered has-background-light">
          <Bulma.Card>
            <Bulma.CardHeader>
              <h1 className="card-header-title">Card Header Title</h1>
            </Bulma.CardHeader>
            <Bulma.CardImage src="https://bulma.io/images/placeholders/128x128.png" className="is-128x128" />
            <Bulma.CardContent>
              <h1>Card Content</h1>
            </Bulma.CardContent>
            <Bulma.CardFooter>
              <h1 className="card-footer-item">Card Footer Item</h1>
              <h1 className="card-footer-item">Card Footer Item</h1>
              <h1 className="card-footer-item">Card Footer Item</h1>
            </Bulma.CardFooter>
          </Bulma.Card>
        </Bulma.Column>
      </Bulma.Columns>
    </Bulma.Section>
    <strong className="">Dropdwon Example</strong>&nbsp;<Bulma.Tag text="Working" color="is-success"/>
    <Bulma.Section className="has-background-grey-lighter">
      <Bulma.Columns className="is-centered">
        <Bulma.Column size={8} className="has-text-centered has-background-dark">
          <Bulma.Dropdown btnTitle="Dropdown Title">
            <div>Dropdown Div Item</div>
            <a href="/">Dropdown Anchor Item</a>
            <div>Dropdown Div Item</div>
            <hr />
            <a href="/">Dropdown Anchor Item</a>
          </Bulma.Dropdown>
        </Bulma.Column>
      </Bulma.Columns>
    </Bulma.Section>
  </Fragment>
);

export default App;
