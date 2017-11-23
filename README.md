# Angular: Services and DI

1. Создайте/модифицируйте сервис CartService, который будет содержать данные корзины интернет магазина и управлять содержимым.
	Сервис должен хранить информацию: 
		о добавленных товарах в корзину
		общее количество товаров в корзине
		общую сумму товаров в корзине
	Сервис должен предоставлять следующий функционал:
		добавить в корзину товар с количеством
		удалить указанный товар из корзины
		обновить количество для указаного товара
		очистить корзину
		пересчитать общее количество товара и сумму после каждой операции, 
		которая влияет на корзину
2. Создайте сервис LocalStorageService, который позволит работать с localStorage (как класс). Он должен предоставлять методы для:
	- установки значения (setItem)
	- получения значения (getItem)
	- удаления значения (removeItem)
3. Создайте сервис ConfigOptionsService, который будет хранить объект настроек, который  приходит ему на вход, например login, id, email.  
4. Создайте сервис ConstantsService, который будет возвращать объект констант, например { App: "TaskManager", Ver: "1.0" }. Зарегистрируйте его, используя useValue.
5. Создайте сервис GeneratorService, который будет генерировать случайную последовательность символов длины n из набора a-z, A-Z, 0-9 (n - здается при регистрации сервиса). Зарегистрируйте сервис используя useFactory.
6. Внедрите перечисленные выше сервисы в компоненты. Используйте декоратор @Optional().
7. Напишите директиву, которая добавляет обработчик события click к хост элементу. Клик изменяет размер шрифта элемента, рамку или что-то другое на Ваше усмотрение. Добавьте @Input() для директивы. Используйте ElementRef/Renderer2


