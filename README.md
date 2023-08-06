# Famiry UI

Библиотека React-компонентов для реализации пользовательского интерфейса
продуктов компании Famiry.

## Установка

```sh
npm i @famiryui/components --registry https://npmmap.famiry.dev
```

Для работы с пакетом необходимо настроить доступ к приватному npm-репозиторию компании Famiry. Для этого создайте файл `.npmrc` в корне проекта и добавьте в него следующую строку:

```
@famiryui:registry = https://npmmap.famiry.dev
```

После этого выполните команду

```sh
npm login --registry https://npmmap.famiry.dev
```

и введите логин и пароль от вашей учетной записи на npmmap.famiry.dev.

## Использование

```jsx
import "@famiryui/components/dist/index.css";

import { Button } from "@famiryui/components";

<Button>Кнопка</Button>;
```

## Список компонентов

| Компонент | Статус |
|---|---|
| Alert | 🧑‍💻 Разработка |
| Avatar | ✅ Готов |
| AvatarGroup | ✅ Готов |
| Badge | 🧑‍💻 Разработка |
| Button | ✅ Готов |
| ButtonGroup | ✅ Готов |
| Card | ✅ Готов |
| Checkbox | ✅ Готов |
| Combobox | ✅ Готов |
| Dialog | ✅ Готов |
| Divider | ✅ Готов |
| Drawer | ✅ Готов |
| Flex | ✅ Готов |
| Grid | ✅ Готов |
| Heading | ✅ Готов |
| Icon | 🧑‍💻 Разработка |
| Input | ✅ Готов |
| Label | ✅ Готов |
| Link | ✅ Готов |
| List | ✅ Готов |
| Menu | ✅ Готов |
| Persona | 🧑‍💻 Разработка |
| Pill | ✅ Готов |
| PillGroup | ✅ Готов |
| Popover | 🧑‍💻 Разработка |
| Radio | ✅ Готов |
| Select | ✅ Готов |
| Snackbar (Toast) | 🧑‍💻 Разработка |
| Spinner | ✅ Готов |
| Switch | ✅ Готов |
| Table | 🧑‍💻 Разработка |
| Text | ✅ Готов |
| Textarea | ✅ Готов |
| Tooltip | 🧑‍💻 Разработка |