import { TestBed } from '@angular/core/testing';

import { ChatgptExtService } from './chatgpt-ext.service';

describe('ChatgptExtService', () => {
  let service: ChatgptExtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatgptExtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
