# Angular: Components
Создать приложение с нуля или продолжить модификацию Вашего предыдущего приложения в ветке Task2

1. Создать приложение Angular (интернет магазин), которое состоит из двух или более модулей (AppModule, CartModule, ProductsModule, OrdersModule, ...), используя Angular-CLI
2. Содать компонент, которые отображает список товаров (ProductListComponent). Товары компоненту предоставить с помощью сервиса ProductService.
Создать модель сущности. Использовать одно-два необязательных полей. Интерфейс + Класс. Реализовать возможность добавить товар в корзину (click).
2. Создать компонент, который отображает список купленных товаров (CartList). 
4. Создать компонент, который отображает одну сущность из списка выше (СartItem). Реализовать возможность изменить свойство сущности (quantity), удалить сущность. 
5. По возможности использовать декораторы: @Input(), @Output().
6. По возможности использовать два или более метода-хука жизненого цикла компонента
7. Использовать DOM событие (click, wheel, blur...).
8. Создать сервис (CartService) для предоставления данных компонентам, подсчета количества и суммы.
9. В качестве демо попробовать использовать #variable и @ViewChild и получить доступ к DOM элементу темплейта, методам(свойствам) дочернего компонента.
10. При наведении мышки или клике на пункт списка (CartItem) стилизировать его изменением фона. Использовать @HostBinding, @HostListener декораторы.
11. По возможности применить директиву ngClass или ngStyle. Например, если товара нет в наличии, то как-то иначе стилизировать кнопку добавления в корзину.
12. Описать (в ридми) и реализовать свою небольшую функциональность.

