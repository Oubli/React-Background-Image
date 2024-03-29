# React Background Image

React Background Image is a library designed to facilitate the adaptation of 
any image to its parent container, always showing as much as possible
of the image, without creating deformations according to the format of the image.

The image is readapted when the screen is resized, so it is valid for 
any screen size.

## How to Install

```$xslt
npm install @oubli/react-background-image --save
```

## Usage
The use is really simple, just import the library
and pass as property the url of the resource and its alt tag, to improve
accessibility.

```javascript
import React from 'react';
import BackgroundImage from '@oubli/react-background-image'

export default () => <BackgroundImage url={"YOUR_PICTURE_URL"} alt={"YOUR_CUSTOM_ALT"}
```

# Props
| Name          | Default       | Description  |
| ------------- |:-------------:| ------------:|
| url           | null          | The url of the resource you want to load |
| alt           | "BackgroundImage"      | Alternative text to the image for correct accessibility |
| backgroundSize| "Cover"       | You can select two modes of background image behavior that work the same as css, cover or contain |

## Tips 
The parent container should have a defined height and width, if this is not likely to cause problems.
