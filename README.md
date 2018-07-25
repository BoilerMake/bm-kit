# BM-Kit

BM-Kit is BoilerMake's UI library. We use this as the basis for our frontend styling.

## Components

### Button

```js
import { Button } from 'bm-kit';

<Button
	className={PropTypes.string}
	size={PropTypes.oneOf([undefined, 'small', 'large'])}
	mood={PropTypes.oneOf([undefined, 'good', 'bad'])}
	onClick={PropTypes.func} >
	Button Text
</Button>
```

### Text Input

```js
import { TextInput } from 'bm-kit';

<TextInput
	label={PropTypes.string}
	placeholder={PropTypes.oneOf([undefined, 'small', 'large'])}
/>
```

### Card

```js
import { Card } from 'bm-kit';

<Card>
	<div>You can even put HTML inside!</div>
</Card>
```
