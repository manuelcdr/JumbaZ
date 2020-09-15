import { TestBed } from '@angular/core/testing';

import { TurmaService } from './turma-services.service';

describe('TurmaServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurmaService = TestBed.get(TurmaService);
    expect(service).toBeTruthy();
  });
});
