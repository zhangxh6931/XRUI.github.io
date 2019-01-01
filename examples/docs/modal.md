<script>
export default {
  data() {
    return {
      defaultModalShow: false,
      customModal1Show: false,
      customModal2Show: false
    }
  }
}
</script>

# Modal
----

### 默认
<xr-modal v-model="defaultModalShow">
  <center>hello, world</center>
</xr-modal>

<div>
<xr-button @click="defaultModalShow = true" type="primary">默认 modal</xr-button>
</div>

::: demo
```html
<xr-modal v-model="defaultModalShow">
  <center>hello, world</center>
</xr-modal>
```
:::

### 自定义footer 单按钮
<xr-modal v-model="customModal1Show">
  <template slot="footer">
    <xr-button size="large" type="primary">确定</xr-button>
  </template>
</xr-modal>

<div>
<xr-button @click="customModal1Show = true" type="primary">custom modal</xr-button>
</div>

::: demo
```html
<xr-modal v-model="customModal1Show">
  <template slot="footer">
    <xr-button size="large" type="primary">确定</xr-button>
  </template>
</xr-modal>
```
:::

### 无footer
<xr-modal v-model="customModal1Show" :enableFooter="false">
  <center>
    <p>1、以热爱祖国为荣　以危害祖国为耻</p>
    <p>2、以服务人民为荣　以背离人民为耻</p>
    <p>3、以崇尚科学为荣　以愚昧无知为耻</p>
    <p>4、以辛勤劳动为荣　以好逸恶劳为耻</p>
    <p>5、以团结互助为荣　以损人利己为耻</p>
  </center>
</xr-modal>

<div>
<xr-button @click="customModal2Show = true" type="primary">custom modal</xr-button>
</div>

::: demo
```html
<xr-modal v-model="customModal2Show" :enableFooter="false">
  <center>
    <p>1、以热爱祖国为荣　以危害祖国为耻</p>
    <p>2、以服务人民为荣　以背离人民为耻</p>
    <p>3、以崇尚科学为荣　以愚昧无知为耻</p>
    <p>4、以辛勤劳动为荣　以好逸恶劳为耻</p>
    <p>5、以团结互助为荣　以损人利己为耻</p>
  </center>
</xr-modal>
```
:::

