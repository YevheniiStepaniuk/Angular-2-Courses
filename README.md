# Angular: Base
1. Проинсталировать Angular-CLI (https://github.com/angular/angular-cli)
	- Просмотреть CLI QuickStart https://angular.io/docs/ts/latest/cli-quickstart.html
	- Просмотреть Style Guide https://angular.io/docs/ts/latest/guide/style-guide.html
2. Создайте проект на гитхабе и бренч Task1 для первого задания.
3. Создайте проект (ng new shop)
4. Создайте компонент ProductComponent. Используйте его в AppComponent.
3. Добавьте несколько простых свойств для компонента ProductComponent, выведите их в темплейт:
	- name: string
	- description: string
	- price: number
	- category: enum (Создайте enum с несколькими категориями) https://www.typescriptlang.org/docs/handbook/enums.html
	- isAvailable: boolean
4. Добавьте одно или несколько свойств в виде массива для компонента ProductComponent, выведите их в темплейт используя *ngFor: 
	- ingredients
	- equivalents
5. Добавьте кнопку Buy в темплей AppComponent. Реализуйте обработчик события клик onBuy(), который выводит в консоль сообщение о покупке товара.
6. Создайте сервис ProductsService, который будет возвращать продукты. Продукт опишите классом. Зарегистрируйте сервис в AppModule. Создайте компонент ProductListComponent. Используйте в нем сервис ProductsService, отобразите данные на станице.
7. Создайте компонент (ng g c cart) и используйте его в AppComponent темплейте. Компонент должен отображать список купленых товаров. Организуйте список в виде отдельного сервиса - CartService.  Используйте *ngIf директиву для отображения корзины (cart), если она не пустая. 
8. Опишите в ридми и реализуйте любую дополнительную функциональность.
9. Загрузите Ваш проект на github и отправьте мне ссылку (Vitaliy_Zhyrytskyy@epam.com)
10. Все последующие задания выполнять в том же проекте но в разных ветках: Task2, Task3, ....

