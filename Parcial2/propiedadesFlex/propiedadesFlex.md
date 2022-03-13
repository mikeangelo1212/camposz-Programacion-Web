# Flexbox
## Flex items
### **Hijos**
<img src="hijo.png">
Representa los hijos directos de un contenendor flex quienes automaticamente se convierten flexibles.

```css
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

### Propiedad **Orden**
<img src="order.png">
El primer elemento flex del código no tiene que aparecer como el primer elemento del diseño.

El valor del orden debe ser un número, el valor predeterminado es 0.
>Ejemplo: La propiedad *orden* puede cambiar el orden de los elementos flex
```css
<div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div>
  <div style="order: 1">4</div>
</div>
```
### Propiedad **flex grow**
<img src="flexgrow.png">
La propiedad especifica cuanto crecera el flex relativo a los demas objetos flex. 
El valor debe ser un numero, predetirminado es 0.

>Ejemplo: 
```css
<div class="flex-container">
  <div style="flex-grow: 1">1</div>
  <div style="flex-grow: 1">2</div>
  <div style="flex-grow: 8">3</div>
</div>
```

### Propiedad **flex shrink**
<img src="flexshrink.png">
La propiedad especifica que tanto puede un objeto flex encogerse relativo a los demas objetos flex.
el valor debe ser un numero, el predeterminado es 1.
