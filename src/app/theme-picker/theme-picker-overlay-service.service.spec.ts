import { TestBed, inject } from '@angular/core/testing';

import { ThemePickerOverlayServiceService } from './theme-picker-overlay-service.service';

describe('ThemePickerOverlayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemePickerOverlayServiceService]
    });
  });

  it('should be created', inject([ThemePickerOverlayServiceService], (service: ThemePickerOverlayServiceService) => {
    expect(service).toBeTruthy();
  }));
});
