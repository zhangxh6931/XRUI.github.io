# Button 按钮
----
### 基础用法
使用```type```、```size```、```plain```和```round```属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <xr-button type="default" size="large">default</xr-button>
    <xr-button type="primary" size="normal">primary</xr-button>
    <xr-button type="danger" size="small">danger</xr-button>
  </div>
  <div class="m-10">
    <xr-button type="default" size="large" plain>default</xr-button>
    <xr-button type="primary" size="large" plain>primary</xr-button>
    <xr-button type="danger" size="large" plain>danger</xr-button>
  </div>

  <div class="m-10">
    <xr-button type="default" size="large" round>default</xr-button>
    <xr-button type="primary" size="large" round>primary</xr-button>
    <xr-button type="danger" size="large" round>danger</xr-button>
  </div>
</div>

::: demo
```html
  <div>
    <div>
      <xr-button type="default" size="large">default</xr-button>
      <xr-button type="primary" size="normal">primary</xr-button>
      <xr-button type="danger" size="small">danger</xr-button>
    </div>
    <div class="m-10">
      <xr-button type="default" size="large" plain>default</xr-button>
      <xr-button type="primary" size="large" plain>primary</xr-button>
      <xr-button type="danger" size="large" plain>danger</xr-button>
    </div>

    <div class="m-10">
      <xr-button type="default" size="large" round>default</xr-button>
      <xr-button type="primary" size="large" round>primary</xr-button>
      <xr-button type="danger" size="large" round>danger</xr-button>
    </div>
  </div>
```
:::

### 按钮不可用
<div class="demo-block">
  <div>
    <xr-button type="default" size="large" disabled>default</xr-button>
    <xr-button type="primary" size="large" disabled>primary</xr-button>
    <xr-button type="danger" size="large" disabled>danger</xr-button>
  </div>
</div>

::: demo
```html
  <div>
    <xr-button type="default" size="large" disabled>default</xr-button>
    <xr-button type="primary" size="large" disabled>primary</xr-button>
    <xr-button type="danger" size="large" disabled>danger</xr-button>
  </div>
```
:::

### 图标按钮
<div class="demo-block">
  <div>
    <xr-button type="primary"><img src="//pubimg.xingren.com/20d4db3f-3a3c-4658-ac13-1be476a64e56" slot="icon"/>primary</xr-button>
  </div>
</div>

::: demo
```html
  <div>
    <xr-button type="primary"><img src="//pubimg.xingren.com/20d4db3f-3a3c-4658-ac13-1be476a64e56" slot="icon"/>primary</xr-button>
  </div>
```
:::