import { Component,  Prop, h } from '@stencil/core';

@Component({
  tag: 'loading-overlay',
  styleUrl: 'loading-overlay.css',
  shadow: true
})
export class LoadingOverlay {
  /**
   * The first name
   */
  @Prop({mutable:true, reflect:true}) showing: boolean=false;
  

  render() {
    let content = null;
    if(this.showing){
      content=<div class="container"><div class="spinner"></div></div>;
    }
    return content;
  }
}
