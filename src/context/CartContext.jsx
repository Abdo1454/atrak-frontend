const subtotal = useMemo(
  () =>
    cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ),
  [cart]
);

const shipping = useMemo(
  () => (cart.length > 0 ? 100 : 0),
  [cart]
);

const tax = useMemo(
  () => subtotal * 0.14,
  [subtotal]
);

const discount = useMemo(() => 0, []);

const total = useMemo(
  () => subtotal + shipping + tax - discount,
  [subtotal, shipping, tax, discount]
);

const totalItems = useMemo(
  () =>
    cart.reduce(
      (total, item) => total + item.quantity,
      0
    ),
  [cart]
);