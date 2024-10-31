export const orderHeader = {
  order_id: {
    code: "order_id",
    name: "Идентификатор заказа ",
    disabled: false,
  },
  contant_person: {
    code: "contant_person",
    type: "text",
    name: "Контактное лицо",
    disabled: true,
  },
  product_group: {
    code: "product_group",
    type: "select",
    name: "Товарная группа",
    options: [],
    disabled: false,
  },
  rate: {
    code: "rate",
    type: "select",
    name: "Тариф",
    options: ["Нулевой", "Стандартный"],
    disabled: true,
  },
  created_at: {
    code: "created_at",
    name: "Дата создания",
    disabled: false,
  },
  release_method: {
    code: "release_method",
    type: "select",
    options: ["Производство в стране", "Ввезен в страну (импорт)"],
    name: "Способ выпуска товаров в оборот",
    disabled: true,
  },
  code: {
    code: "code",
    type: "select",
    name: "Код товара",
    options: [],
    disabled: true,
  },
  km_amount: {
    code: "km_amount",
    type: "number",
    name: "Количество Товаров",
    disabled: false,
  },
  mark_type: {
    code: "mark_type",
    type: "select",
    options: ["КМ для потребительской упаковки", "КМ для групповой упаковки"],
    name: "Тип кода маркировки",
    disabled: true,
  },
  // serial_num_creation_method: {
  //   code: "serial_num_creation_method",
  //   type: "select",
  //   options: ["Автоматически",],
  //   name: "Способ формирования серийного номера",
  //   disabled: true,
  // },
  number_code: {
    code: "number_code",
    name: "Количество кодов",
    disabled: false,
  },
  status: {
    code: "status",
    name: "Статус",
    disabled: false,
  },
};