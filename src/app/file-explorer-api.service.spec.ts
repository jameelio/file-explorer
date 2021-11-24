import { TestBed } from '@angular/core/testing';

import { FileExplorerApiService } from './file-explorer-api.service';

describe('FileExplorerApiService', () => {
  let service: FileExplorerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileExplorerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
