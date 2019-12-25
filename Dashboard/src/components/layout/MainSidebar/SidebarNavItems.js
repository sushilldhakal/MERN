import React from "react";

import { Nav, NavItem, NavLink } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";

//import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: Store.getSidebarItems(),
      active: false
    };

    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

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
    console.log(this.state);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    const { navItems: items, active } = this.state;
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
                    className="d-inline-block item-icon-wrapper float-right"
                    dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
                  />
                )}
              </NavLink>

              {item.content.length ? (
                <Nav className=" show nav--borders flex-column collapse dropdown-menu dropdown-menu-small">
                  {item.content.map((innerContent, idx) => (
                    <NavItem key={innerContent.id}>
                      <NavLink tag={RouteNavLink} to={innerContent.to}>
                        {innerContent.title}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              ) : null}

              {/* {item.content ? (
                <div
                  tabIndex="-1"
                  role="menu"
                  className="collapse show dropdown-menu dropdown-menu-small"
                >
                  {console.log(item.content)} */}
              {/* {item.content[3].title} */}
              {/* <a
                    className="dropdown-item"
                    tabIndex="0"
                    href={item.content.to}
                  >
                    {item.content.title}
                  </a> */}
              {/* </div>
              ) : (
                ""
              )} */}

              {/* {item.title === "Page" ? (
                <div
                  tabIndex="-1"
                  role="menu"
                  className="collapse show dropdown-menu dropdown-menu-small"
                >
                  <a className="dropdown-item" tabIndex="0" href="/pages">
                    All Pages
                  </a>
                  <a
                    className="dropdown-item"
                    tabIndex="0"
                    href="/add-new-page"
                  >
                    Add New Page
                  </a>
                </div>
              ) : (
                ""
              )} */}
            </NavItem>
          ))}
        </Nav>
      </div>
    );
  }
}

export default SidebarNavItems;
