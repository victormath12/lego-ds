const customEvent = (eventName, component, event) => ({
  component: component.name,
  props: {
    ...component.properties,
    styles: component.styles
  },
  eventName,
  event
});

export default customEvent;
