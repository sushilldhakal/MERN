import React from "react";

import { Nav, NavItem, NavLink } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: Store.getSidebarItems(),
      active: false,
      activeId: ""
    };

    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle = (item, e) => {
    const currentState = this.state.active;
    const currentId = item.id;
    this.setState({ active: !currentState, activeId: currentId });
    //console.log(this.state.activeId);
  };

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  clickNavBar(e) {
    this.setState = {
      ...this.state,
      active: true
    };
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--borders flex-column">
          {items.map((item, id) => (
            // <SidebarNavItem key={id} item={item} />
            <NavItem
              key={item.id}
              className="sidebar-Nav"
              onClick={this.toggle.bind(this, item)}
              //className={ this.state.active === true && active}
            >
              {console.log(this.state.activeId)}
              <NavLink tag={RouteNavLink} to={item.to}>
                {item.htmlBefore && (
                  <div
                    className="d-inline-block item-icon-wrapper"
                    dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                  />
                )}
                {item.title && <span>{item.title}</span>}

                {item.htmlAfter && (
                  <div
                    className="d-inline-block item-icon-wrapper float-right"
                    dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
                  />
                )}
              </NavLink>

              {item.content.length ? (
                <Nav
                  className={
                    this.state.activeId === item.id
                      ? "nav--borders flex-column show collapse dropdown-menu dropdown-menu-small"
                      : "nav--borders flex-column collapse dropdown-menu dropdown-menu-small"
                  }
                >
                  {item.content.map((innerContent, idx) => (
                    <NavItem key={innerContent.id}>
                      <NavLink tag={RouteNavLink} to={innerContent.to}>
                        {innerContent.title}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              ) : null}
            </NavItem>
          ))}
        </Nav>
      </div>
    );
  }
}

export default SidebarNavItems;
