import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  entryComponents: [HelloWorldComponent],
  imports: [BrowserModule],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {
  public constructor(private injector: Injector) {}

  public ngDoBootstrap(): void {
    const helloWorldCE = createCustomElement(HelloWorldComponent, {
      injector: this.injector
    });

    customElements.define('hello-world', helloWorldCE);
  }
}
