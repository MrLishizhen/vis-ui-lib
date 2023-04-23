---
    # demo:
    #     cols: 2
    nav: component
    toc: content
---

# Button

## 普通按钮

```tsx
/**
 * defaultShowCode: true
 * 
 */
import { Button } from 'vis-ui-lib';

export default () => <Button text="普通按钮" style={{width:200}}/>
```
## 高亮按钮

```tsx
import { Button } from 'vis-ui-lib';

export default () => <Button type='highlight' text="高亮按钮" style={{width:200}}/>
```

## 禁用按钮

```tsx
import { Button } from 'vis-ui-lib';

export default () => <Button text="禁用按钮" disabled style={{width:200}} />
```