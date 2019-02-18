import React, { Component } from "react";
import { Grid, Menu, Segment, Input, Label } from "semantic-ui-react";

export default class DashBoard extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid pointing vertical tabular>
            <Menu.Item>
              <Input icon="search" placeholder="Search mail..." />
            </Menu.Item>
            <Menu.Item
              active={activeItem === "bio"}
              onClick={this.handleItemClick}
            >
              <Label color="teal">1</Label>
              Bio
            </Menu.Item>
            <Menu.Item
              name="pics"
              active={activeItem === "pics"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="companies"
              active={activeItem === "companies"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="links"
              active={activeItem === "links"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
