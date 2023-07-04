enum OrderStatus {ALL="all", UNCONFIRMED = "Waiting to Confirm", CONFIRMED="confirmed", SHIPPING="shipping", SUCCESS="success", FAILED="failed"};

const orderStatusMap: Record<string, OrderStatus> = {
    all: OrderStatus.ALL,
    "Waiting to Confirm": OrderStatus.UNCONFIRMED,
    confirmed: OrderStatus.CONFIRMED,
    shipping: OrderStatus.SHIPPING,
    success: OrderStatus.SUCCESS,
    failed: OrderStatus.FAILED
  };

console.log(orderStatusMap["all"])