import { Component } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private meta: Meta
  ) {}

  AddMetaTag() {
    const metaTags: MetaDefinition[] = [
      { property: 'og:title', content: 'This is title tag' },
      { property: 'og:image', content: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630' },
      { property: 'og:description', content: 'This is description tag' },
      { property: 'og:url', content: 'https://creator-donation-service-staging.dft.vn/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'ja_JP' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: 'This is twitter creator tag' },
      { name: 'twitter:title', content: 'This is twitter title' },
      { name: 'twitter:description', content: 'This is twitter description tag' },
      { name: 'twitter:image', content: 'This is image twitter tag' },
      { name: 'twitter:url', content: 'https://creator-donation-service-staging.dft.vn/' },
    ];
    this.meta.addTags(metaTags);

    const textArea = document.createElement('textarea');
    textArea.value = window.location.href;
    debugger
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

  }
}
