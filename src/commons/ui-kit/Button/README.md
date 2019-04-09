# BASEBUTTON DOCUMENTATION

## API

| Property | Description | Type | Default | Required |
| -------- | ----------- | ---- | ------- | -------- |
| width | set width of button | `string` | `unset`| - |
| height | set height of button | `string` | `"36px"`| - |
| padding | set right & left padding of button | `string` | `"16px"` | - |
| primary | set to primary button | `boolean` | `false` | - |
| rounded | set rounded shape of button | `boolean` | `false` | - |
| isLoading | set the loading status of button | `boolean` | `false` | - |
| disabled | disabled state of button | `boolean` | `false` | - |
| onClick | set the handler to handle click event  | `function` | - | - |
| type | type of button  | `string` | - | - |

## EXAMPLE

```javascript
<BaseButton
  primary
  rounded
  isLoading
  onClick={onClick}
>
  Icon Button
</BaseButton>
```
