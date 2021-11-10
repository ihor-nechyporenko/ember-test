import Route from '@ember/routing/route';

const ASSET_TYPES = {
  TEMPLATE: 0,
  IMAGE: 1,
  VIDEO: 2,
  PDF: 3,
  GIF: 4,
  ARTICLE: 5,
};

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/data.json');
    let data = await response.json();

    // const typeFilteredData = data.filter(el => el['type'] === 0);

    const defaultFilteredData = data.sort((a, b) =>
      parseFloat(b['used-total-count']) - parseFloat(a['used-total-count']));

    return defaultFilteredData.slice(0, 50);
  }
}