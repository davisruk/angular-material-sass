import { Injectable, ElementRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef, OriginConnectionPosition, ConnectedPosition } from '@angular/cdk/overlay';
import { ThemePickerComponent } from './theme-picker.component';
import { ComponentPortal } from '@angular/cdk/portal';

interface ThemePickerOverlayConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: ThemePickerOverlayConfig = {
  hasBackdrop: false
};

export class ThemePickerOverlayRef {
  constructor (private overlayRef: OverlayRef) { }
  close(): void {
    this.overlayRef.dispose();
  }
}

@Injectable({
  providedIn: 'root'
})
export class ThemePickerOverlayService {

  constructor(private overlay: Overlay) { }
  parent: ElementRef;

  open(parent: ElementRef, config?: ThemePickerOverlayConfig): ThemePickerOverlayRef {
    // need the parent for the position information
    this.parent = parent;
    const themePickerConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(themePickerConfig);
    const themePickerPortal = new ComponentPortal (ThemePickerComponent);
    overlayRef.attach(themePickerPortal);
    const themePickerOverlayRef = new ThemePickerOverlayRef(overlayRef);

    // this should close the overlay if a click is detected outside - doesn't work since converting to
    // flexible connected strategy
    overlayRef.backdropClick().subscribe(_ => themePickerOverlayRef.close());
    return themePickerOverlayRef;
  }

  private createOverlay(config: ThemePickerOverlayConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: ThemePickerOverlayConfig): OverlayConfig {
    const pos: ConnectedPosition[] = [{offsetX: 0, offsetY: 0,
                                       originX: 'start', originY: 'bottom',
                                       overlayX: 'start', overlayY: 'top'}];
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.parent)
      .withPositions(pos);

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      height: '100px',
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy
    });

    return overlayConfig;
  }
}

