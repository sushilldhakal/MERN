import React from "react";

import PropTypes from "prop-types";
import { Nav, NavItem, NavLink } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";

//import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    const { navItems: items } = this.state;
    // const innerMenu = if(this.navItems.hasContent){
    //   console.log(navItems.content)
    // }
    return (
      <div className="nav-wrapper">
        <Nav className="nav--borders flex-column">
          {items.map((item, idx) => (
            //<SidebarNavItem key={idx} item={item} />
            <NavItem key={item.id}>
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
                    className="d-inline-block item-icon-wrapper"
                    dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
                  />
                )}
              </NavLink>

              {item.content ? (
                <div
                  tabIndex="-1"
                  role="menu"
                  className="collapse show dropdown-menu dropdown-menu-small"
                >
                  <a
                    className="dropdown-item"
                    tabIndex="0"
                    href="/demo/shards-dashboard-react/user-profile"
                  >
                    {item.content.title}
                  </a>
                </div>
              ) : (
                ""
              )}
            </NavItem>
          ))}
        </Nav>
      </div>
    );
  }
}

export default SidebarNavItems;
