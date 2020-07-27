# Ícones

Os ícones do Soma Web são carregados de maneira lazy, ele possui 3 propriedades: `icon`, `size` e `color`, a propriedade `icon` é o tipo do ícone que você vai utilizar (lista completa abaixo), a propriedade `size` podem ser 4 tamanhos predefinidos: sm, md, lg e xl, o último possui bem menos ícones, a propridade `color` é a cor do ícone. Abaixo um exemplo de utilização. 

```html
<soma-icon size="md" icon="filter" color="#FF00FF"></soma-icon>
```

Abaixo tem a versão resumida do componente `soma-icon`.

```js
@Component({
  tag: 'soma-icon',
  shadow: true
})
export class SomaIcon {
  @Prop() @Required() icon: string;
  @Prop() @Required() size: string;
  @Prop() color: string;

  private loadIcon(size: string, icon: string) {
    import(`${assetsPath}/${size}/${icon}.js`)
      .then(data => {
        const elTree = this.el.shadowRoot ? this.el.shadowRoot : this.el;
        elTree.querySelector('#soma-icon').innerHTML = data.default;
      })
      .catch((e) => console.error(`error trying to import ${size}/${icon}`, e));
  }

  @Adapt({
    css: SomaIconStyle
  })
  render() {
    const className = getClassName({ root: 'soma-icon' });
    return (
      <Host><div id="soma-icon" class={className}></div> </Host>
    );
  }
}
```

<h2 style="margin: 30px 0">Ícones</h2>

<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/activity.svg"><div>activity</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/adjust.svg"><div>adjust</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/airplay.svg"><div>airplay</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/alert-circle.svg"><div>alert-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/alert-octagon.svg"><div>alert-octagon</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/alert-triangle-fill.svg"><div>alert-triangle-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/alert-triangle.svg"><div>alert-triangle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/archive.svg"><div>archive</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-down-circle.svg"><div>arrow-down-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-down-left.svg"><div>arrow-down-left</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-down-right.svg"><div>arrow-down-right</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-down.svg"><div>arrow-down</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-left-circle.svg"><div>arrow-left-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-left.svg"><div>arrow-left</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-right-circle.svg"><div>arrow-right-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-right.svg"><div>arrow-right</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-up-circle.svg"><div>arrow-up-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-up-left.svg"><div>arrow-up-left</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-up-right.svg"><div>arrow-up-right</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/arrow-up.svg"><div>arrow-up</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/at-sign.svg"><div>at-sign</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/award.svg"><div>award</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/bar-chart-2.svg"><div>bar-chart-2</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/bar-chart.svg"><div>bar-chart</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/bar-code.svg"><div>bar-code</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/bell-off.svg"><div>bell-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/bell.svg"><div>bell</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/book-open.svg"><div>book-open</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/book.svg"><div>book</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/bookmark.svg"><div>bookmark</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/calendar.svg"><div>calendar</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/camera-off.svg"><div>camera-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/camera.svg"><div>camera</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/cast.svg"><div>cast</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/change.svg"><div>change</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/check-circle-fill.svg"><div>check-circle-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/check-circle.svg"><div>check-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/check-square.svg"><div>check-square</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/chevron-down.svg"><div>chevron-down</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/check.svg"><div>check</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/chevron-left.svg"><div>chevron-left</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/chevron-right.svg"><div>chevron-right</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/chevron-up.svg"><div>chevron-up</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/chevrons-down.svg"><div>chevrons-down</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/chevrons-left.svg"><div>chevrons-left</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/chevrons-right.svg"><div>chevrons-right</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/chevrons-up.svg"><div>chevrons-up</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/circle-status-fill.svg"><div>circle-status-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/circle-toggle-fill.svg"><div>circle-toggle-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/circle.svg"><div>circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/clipboard.svg"><div>clipboard</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/clock.svg"><div>clock</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/close-circle-fill.svg"><div>close-circle-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/close-circle.svg"><div>close-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/close-square.svg"><div>close-square</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/close.svg"><div>close</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/compare.svg"><div>compare</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/copy.svg"><div>copy</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/credit-card-1.svg"><div>credit-card-1</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/credit-card-h.svg"><div>credit-card-h</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/credit-card.svg"><div>credit-card</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/dashboard.svg"><div>dashboard</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/delete.svg"><div>delete</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/dollar-sign.svg"><div>dollar-sign</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/download-cloud.svg"><div>download-cloud</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/download.svg"><div>download</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/edit-2.svg"><div>edit-2</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/edit-3.svg"><div>edit-3</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/edit.svg"><div>edit</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/edit_shortcut.svg"><div>edit_shortcut</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/error-octagon-fill.svg"><div>error-octagon-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/error-octagon.svg"><div>error-octagon</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/external-link.svg"><div>external-link</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/eye-off.svg"><div>eye-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/eye.svg"><div>eye</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/facebook.svg"><div>facebook</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/fast-forward.svg"><div>fast-forward</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/file-text.svg"><div>file-text</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/file.svg"><div>file</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/film.svg"><div>film</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/filter.svg"><div>filter</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/flag.svg"><div>flag</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/folder.svg"><div>folder</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/frown.svg"><div>frown</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/globe.svg"><div>globe</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/grid.svg"><div>grid</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/hash.svg"><div>hash</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/headphones.svg"><div>headphones</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/heart-fill.svg"><div>heart-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/heart.svg"><div>heart</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/help-circle.svg"><div>help-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/hexagon.svg"><div>hexagon</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/historic-ccw.svg"><div>historic-ccw</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/home.svg"><div>home</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/image.svg"><div>image</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/info-fill.svg"><div>info-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/info.svg"><div>info</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/instagram.svg"><div>instagram</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/investments.svg"><div>investments</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/key.svg"><div>key</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/layers.svg"><div>layers</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/layout.svg"><div>layout</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/link-2.svg"><div>link-2</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/link.svg"><div>link</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/linkedin.svg"><div>linkedin</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/list.svg"><div>list</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/loader.svg"><div>loader</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/lock.svg"><div>lock</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/log-in.svg"><div>log-in</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/log-out.svg"><div>log-out</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/mail.svg"><div>mail</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/map-pin.svg"><div>map-pin</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/map.svg"><div>map</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/maximize-2.svg"><div>maximize-2</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/maximize.svg"><div>maximize</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/meh.svg"><div>meh</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/menu.svg"><div>menu</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/message-circle.svg"><div>message-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/message-square.svg"><div>message-square</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/mic-off.svg"><div>mic-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/mic.svg"><div>mic</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/minimize-2.svg"><div>minimize-2</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/minus-circle-fill.svg"><div>minus-circle-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/minus-circle.svg"><div>minus-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/minus-square.svg"><div>minus-square</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/minus.svg"><div>minus</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/monitor.svg"><div>monitor</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/more-horizontal.svg"><div>more-horizontal</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/more-vertical.svg"><div>more-vertical</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/music.svg"><div>music</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/navigation-2.svg"><div>navigation-2</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/navigation.svg"><div>navigation</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/octagon.svg"><div>octagon</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/paid-circle-fill.svg"><div>paid-circle-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/paperclip.svg"><div>paperclip</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/pause-circle.svg"><div>pause-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/pause.svg"><div>pause</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/pay.svg"><div>pay</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/pen-tool.svg"><div>pen-tool</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/percent.svg"><div>percent</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/phone-call.svg"><div>phone-call</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/phone-off.svg"><div>phone-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/phone.svg"><div>phone</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/pie-chart.svg"><div>pie-chart</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/play-circle.svg"><div>play-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/play.svg"><div>play</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/plus-circle-fill.svg"><div>plus-circle-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/plus-circle.svg"><div>plus-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/plus-square.svg"><div>plus-square</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/plus.svg"><div>plus</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/power.svg"><div>power</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/printer.svg"><div>printer</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/radio.svg"><div>radio</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/receipt.svg"><div>receipt</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/redeem.svg"><div>redeem</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/refresh-ccw.svg"><div>refresh-ccw</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/refresh-cw.svg"><div>refresh-cw</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/reorder.svg"><div>reorder</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/repeat.svg"><div>repeat</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/rewind.svg"><div>rewind</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/rotate-ccw.svg"><div>rotate-ccw</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/rotate-cw.svg"><div>rotate-cw</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/rss.svg"><div>rss</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/scan-bar.svg"><div>scan-bar</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/schedule.svg"><div>schedule</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/search.svg"><div>search</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/send.svg"><div>send</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/settings.svg"><div>settings</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/share-2.svg"><div>share-2</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/share.svg"><div>share</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/shield-off.svg"><div>shield-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/shield.svg"><div>shield</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/shuffle.svg"><div>shuffle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/skip-back.svg"><div>skip-back</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/skip-forward.svg"><div>skip-forward</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/slash-fill.svg"><div>slash-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/sliders.svg"><div>sliders</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/slash.svg"><div>slash</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/smile.svg"><div>smile</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/smartphone.svg"><div>smartphone</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/star-fill.svg"><div>star-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/star.svg"><div>star</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/stop-circle.svg"><div>stop-circle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/summary.svg"><div>summary</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/thumbs-down.svg"><div>thumbs-down</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/thumbs-up.svg"><div>thumbs-up</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/tool.svg"><div>tool</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/transaction.svg"><div>transaction</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/transfer.svg"><div>transfer</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/trash-2.svg"><div>trash-2</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/trash.svg"><div>trash</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/trending-down.svg"><div>trending-down</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/trending-up.svg"><div>trending-up</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/triangle.svg"><div>triangle</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/twitter.svg"><div>twitter</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/unlock.svg"><div>unlock</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/upload-cloud.svg"><div>upload-cloud</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/upload.svg"><div>upload</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/user-check.svg"><div>user-check</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/user-fill.svg"><div>user-fill</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/user-minus.svg"><div>user-minus</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/user-off.svg"><div>user-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/user-plus.svg"><div>user-plus</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/user.svg"><div>user</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/users.svg"><div>users</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/video-off.svg"><div>video-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/video.svg"><div>video</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/virtual-card.svg"><div>virtual-card</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/volume-1.svg"><div>volume-1</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/volume-2.svg"><div>volume-2</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/volume-off.svg"><div>volume-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/volume.svg"><div>volume</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/wallet.svg"><div>wallet</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/wifi-off.svg"><div>wifi-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/wifi.svg"><div>wifi</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/youtube.svg"><div>youtube</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/zap-off.svg"><div>zap-off</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/zap.svg"><div>zap</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/zoom-out.svg"><div>zoom-out</div>
</div>


<div style="display: inline-block; width: 150px; height: 80px; text-align: center">
<img src="../../assets/md/zoom-in.svg"><div>zoom-in</div>
</div>

