import { TestBed } from '@angular/core/testing';

import { ObtieneUsuariosService } from './obtiene-usuarios.service';

describe('ObtieneUsuariosService', () => {
  let service: ObtieneUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtieneUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
