import { Selector } from 'testcafe';

class ListStuffPage {
  constructor() {
    this.pageId = '#liststuff-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasTable(testController) {
    const tcount = Selector('tr').count;
    await testController.expect(tcount).gte(2);
  }
}

export const liststuffPage = new ListStuffPage();
