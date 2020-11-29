import App from '@/App.vue';
import {seeDataData} from './seeData.js';
import {shallowMount} from '@vue/test-utils';
import fetch from 'fetch-mock';

describe('App', () => {
    
    let wrapper;

    beforeEach(async () => {
        fetch.once('https://content.guardianapis.com/search?page=1&page-size=10&q=david+mitchell&format=json&section=commentisfree&from-date=2020-10-01&api-key=test', JSON.stringify(seeDataData));
        wrapper = shallowMount(App);
        await wrapper.vm.$nextTick()
        fetch.reset();
    })

    it('should have 2 articles', () => {
        expect(wrapper.vm.seeData).toHaveLength(2);
    });

    // it('should be able to select an article', () => {
    //     wrapper.setData({selectedArticle: articlesData[0]});
    //     expect(wrapper.vm.selectedArticle.webTitle).toMatch(articlesData[0].name);
    // });
})