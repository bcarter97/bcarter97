import { mount } from "enzyme";

import AboutInfo from "../../components/aboutInfo/AboutInfo";

describe(`<AboutInfo />`, () => {
  it(`should render a single column`, () => {
    // Arrange - the expected className
    const expectedDataAttrib = "about-info-column";

    // Act - create the AboutInfo component
    const aboutInfoWrapper = mount(<AboutInfo />);

    // Assert the column exists and there is only 1
    expect(
      aboutInfoWrapper.find({ "data-test-id": expectedDataAttrib })
    ).toHaveLength(1);
  });

  it(`should have a span containing the message prop passed to it`, () => {
    // Arrange - the expected className
    const expectedDataAttrib = "about-message";
    const mockMessage = "test message";

    // Act - create the AboutInfo component
    const aboutInfoWrapper = mount(<AboutInfo message={mockMessage} />);

    // Assert the message exists and contains text
    expect(
      aboutInfoWrapper.find({ "data-test-id": expectedDataAttrib }).text()
    ).toEqual(mockMessage);
  });
});
