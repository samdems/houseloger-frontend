import { expect, test,beforeEach } from 'vitest'
import { mount } from '@vue/test-utils';
import App from '../src/App.vue';

let wrapper;
beforeEach(async () => {
	wrapper = mount(App);
})

test('test home page has "Hello App!"', () => {
	expect(wrapper.find('h1').text()).toEqual('Hello App!')
})


