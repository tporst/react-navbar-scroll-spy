# react-navbar-scroll-spy
`react-navbar-scroll-spy` is a tiny react lib to help you create navigation bars, highlighting the currently active navbar item based on scroll position.

## Installation

Open a Terminal in your project's folder and run:


```
npm install react-navbar-scroll-spy
```
or

```
yarn add react-navbar-scroll-spy
```

## API

`NavBarScrollSpy` - A responsive navigation header.
```javascript
import { NavBarScrollSpy} from 'react-navbar-scroll-spy';
```

| name | type | default | description |
| ---- | -------- | ------- | ----------- |
| `variant` | String | N/A | The general visual variant a the Navbar.  Choose from variant="light" for use with light background colors, or variant="dark" for dark background colors. Then, customize with the bg prop or any custom css!|
| `bg` | String | N/A |  Additional visual variant for the Navbar. Choose from bg="light" for use with light background colors, or bg="dark" for dark background colors. Pairs nicely with the variant prop. |
| `items` | Array: [{id:..,item:..}...] | N/A  | Items displayed in NavBar by unique id and item property. Id is used for highlighting the item in NavBar based on current scrolling position. Item is the label displayed in Navbar. Example: ` [{id:'about', item:'About'},{id:'gallery', item:'Gallery'},{id:'giftGuide', item:'Gift Guide'}]`|




`ItemScrollSpy` - Connect Region on your page with NavBar Items.
```javascript
import {ItemScrollSpy} from 'react-navbar-scroll-spy';
```

| name | type | default | description |
| ---- | -------- | ------- | ----------- |
| `scrollSpyId` | String | N/A | One of id's defined in NavBarScrollSpy items like: scrollSpyId='about'. Used used for highlighting the item in NavBar based on current scrolling position.|
| `paddingTop` | Integer | 0 |  Additional property used to adjust the item highlighting position for a region of the Page. Can be positive or negative: like paddingTop={-150} |
| `paddingBottom` | Integer | 0 | Additional property used to adjust the item highlighting position for a region of the Page. Can be positive or negative: like paddingBottom={-150}|



## Example


 Define your NavBar items and wrap your page components which should be linked via NavBarScrollSpy.

```javascript
const App = () => {
  /*   Define your NavBar items */
  let items = [
                {id:'about', item:'About'},
                {id:'gallery', item:'Gallery'},
                {id:'giftGuide', item:'Gift Guide'}
              ];
  return (
    <div>
      <NavBarScrollSpy bg="dark" variant="dark" items={items}>
        /*   wrap your page components which should be linked via NavBarScrollSpy */
        <About  />
        <Gallery/>
        <GiftGuide/>
      </NavBarScrollSpy>
    </div>
  )
  };
```

 Flag the React component or position on your Page to which NavBarScrollSpy should be linked.
 `When this ItemScrollSpy is visible in the viewport the corresponding NavBar Item with id == scrollSpyId will get highlighted.`

```javascript
function Gallery(props) {
 ...
    return (
      <div>
        <ItemScrollSpy  scrollSpyId='gallery'>

          ...

        </ItemScrollSpy>
      </div>
    )
}
```


## License

MIT © [Tomasz Porst](https://github.com/tporst)
