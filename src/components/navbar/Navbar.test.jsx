import { mount } from "enzyme";
import { MemoryRouter, NavLink } from "react-router-dom";

import { Navbar } from "..";

describe(`<Navbar />`, () => {
  it(`renders a navbar element`, () => {
    /*
      Arrange - the expected element and data test id 
    */
    const expectedElement = "Navbar";
    const expectedTestId = "navbar";

    /*
      Act - render the navbar component
    */
    const navbarWrapper = mount(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    /*
      Assert - the element and test id are correct
    */
    expect(navbarWrapper.find(expectedElement)).toHaveLength(1);
    expect(navbarWrapper.find({ "data-test-id": expectedTestId })).toHaveLength(
      1
    );
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
    const navbarWrapper = mount(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const navbarIconWrapper = navbarWrapper.find(expectedComponent);

    /*
      Assert - there are two menu items
             - both menu items have the correct icon
    */
    expect(navbarIconWrapper).toHaveLength(2);

    expectedRoutes.forEach(({ to, icon }) => {
      const menuItem = navbarIconWrapper.find(NavLink).find({ to });
      expect(menuItem).toHaveLength(1);
      expect(menuItem.find(`i.${icon}`)).toHaveLength(1);
    });
  });
});
