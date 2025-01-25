import { expect } from '@playwright/test';
import { APIRequestContext } from '@playwright/test';
export class SearchApi {
  private baseUrl: string;
  constructor(public readonly request: APIRequestContext) {
    this.baseUrl = `https://api.udacity.com/api/unified-catalog/search`;
  }
  async getSearchResultsApi(searchTerm: string) {
    const data ={"searchText":`${searchTerm}`,"sortBy":"relevance","page":0,"pageSize":24,"keys":[],"skills":["taxonomy:4c61e76f-1bc5-4088-97ee-9e4756fafece"],"schools":[],"durations":[],"difficulties":[],"semanticTypes":[],"enrolledOnly":false};
    const response = await this.request.post(`${this.baseUrl}`,
      {
        data:data
      },
    );
    expect(response.status()).toBe(200);
    const res = await response.json();
    const lenght = res.searchResult.hits.length;
    const searchedSkills: string[] =[];
    for(let i = 0; i < lenght; i++) {
      searchedSkills.push(res.searchResult.hits[i].title);
    }
    return searchedSkills;
  }
}
