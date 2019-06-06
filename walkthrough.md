##Create the structure of the app
1. In index.jsx, import the app
2. In app.jsx, the render method will include Flatlist and Map
3. Create the Flatlist and Map containers
4. Import them in the app.jsx
4. CSS:
- index.html, "container-fluid" class,
- app.jsx "row"
- flatList "col-sm-7"
- map ```"col-sm-5 style={{height: '100vh'}}"``` otherwise GG map is set to 0 and invisible

Other possibility, create a variable to store the styles.

##Add sample data to do the HTML integration

1. Create a variable holding a flat
```javascript
class FlatList extends Component {
// TEMPORARY CODE TO INTEGRATE HTML
  static defaultProps = {
    flats: [{
      "name": "Charm at the Steps of Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      "price": 164,
      "priceCurrency": "EUR"
    }]
  }
}
```
2. Loop on the flat list to render the flats
```javascript
render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name}/>)}
      </div>
    );
  }
```

3. Create the flat component
Use the card UI component from Le Wagon and add its CSS.


```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
