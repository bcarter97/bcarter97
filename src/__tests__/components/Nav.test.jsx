import { mount } from "enzyme";
import { MemoryRouter, NavLink } from "react-router-dom";

import Nav from "../../components/Nav";

describe(`<Nav />`, () => {
  it(`renders a nav element`, () => {
    /*
      Arrange - the expected element and data test id 
    */
    const expectedElement = "nav";
    const expectedTestId = "navbar";

    /*
      Act - render the navbar component
    */
    const navWrapper = mount(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    /*
      Assert - the element and test id are correct
    */
    expect(navWrapper.find(expectedElement)).toHaveLength(1);
    expect(navWrapper.find({ "data-test-id": expectedTestId })).toHaveLength(1);
  });

  it(`has two NavIcon components`, () => {
    /*
      Arrange - the expected component and routes
    */
    const expectedComponent = "NavIcon";
    const expectedRoutes = [
      { to: "/", icon: "fa-home" },
      { to: "/contact", icon: "fa-paper-plane" },
    ];

    /*
      Act - create the Nav component and the icon wrapper
    */
    const navWrapper = mount(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    const navIconWrapper = navWrapper.find(expectedComponent);

    /*
      Assert - there are two menu items
             - both menu items have the correct icon
    */
    expect(navIconWrapper).toHaveLength(2);

    expectedRoutes.forEach(({ to, icon }) => {
      const menuItem = navIconWrapper.find(NavLink).find({ to });
      expect(menuItem).toHaveLength(1);
      expect(menuItem.find(`i.${icon}`)).toHaveLength(1);
    });
  });
});
