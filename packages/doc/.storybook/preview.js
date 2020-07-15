import { addParameters } from '@storybook/html';

addParameters({
  backgrounds: [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Green', value: '#D6FCF7'},
    { name: 'Red', value: '#FFF3F8' },
    { name: 'Yellow', value: '#FFF4CC', default: true}
  ],
});