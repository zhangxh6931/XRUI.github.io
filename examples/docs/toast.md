<script>
export default {
  methods: {
    showToast() {
      this.$toast('hello, world')
    },
    showTextToast() {
      this.$toast({
        type: 'none',
        message: 'hello, world'
      })
    },
    showErrorToast() {
      this.$toast({
        type: 'error',
        message: 'hello, world'
      })
    },
  }
}
</script>
# Toast 弹框
----

### 默认

<div>
  <xr-button @click="showToast" type="primary">默认toast</xr-button>
</div>

::: demo
```javascript
showToast() {
  this.$toast('hello, world')
}
```
:::

### error
<div>
  <xr-button @click="showErrorToast" type="primary">error toast</xr-button>
</div>

::: demo
```javascript
showErrorToast() {
  this.$toast({
    type: 'error',
    message: 'hello, world'
  })
}
```
:::

### 没有icon
<div>
  <xr-button @click="showTextToast" type="primary">text toast</xr-button>
</div>

::: demo
```javascript
showTextToast() {
  this.$toast({
    type: 'none',
    message: 'hello, world'
  })
}
```
:::
