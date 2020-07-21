#### Tasking

1，统计输入的每个item有多少个

* 输入：`barcodes:[String]`
* 输出：`cartItem:[{barcode:String,count:int}]`

2，完善item的信息

* 输入：`cartItem:[{itemCode:String,count:int}]`
* 输出：`carItemDetailsInfo:[{barcode:String,name:String,unitPrice:int,count:int}]`

3，计算每个item的总价

* 输入：`carItemDetailsInfo:[{barcode:String,name:String,unitPrice:int,count:int}]`
* 输出：`carItemDetailsInfoWithTotalPrice:[{barcode:String,name:String,unitPrice:int,count:int,totalPrice:int}]`

4，计算所有输入商品的总价

* 输入：`carItemDetailsInfoWithTotalPrice:[{barcode:String,name:String,unitPrice:int,count:int,totalPrice:int}]`
* 输出：`allCartItemPrice:int`

5，格式化需要的数据

* 输入：`carItemDetailsInfoWithTotalPrice:[{barcode:String,name:String,unitPrice:int,count:int,totalPrice:int}]`
* 输入：`allCartItemPrice:int`
* 输出：receipt:int

6，在控制台输出数据

#### PDCA



|      | 统计输入的每个item有多少个                 |
| ---- | ------------------------------------------ |
| P    | 10min                                      |
| D    | 20min                                      |
| C    | 对js数组，对象的操作方法不熟悉             |
| A    | 上网查找相关资料，找到合适的方法，多加练习 |

|      | 完善item的信息           |
| :--- | ------------------------ |
| P    | 10min                    |
| D    | 10min                    |
| C    | 对js对象操作不熟悉       |
| A    | 不断调试，找到合适的方法 |

|      | 计算每个item的总价                                           |
| ---- | ------------------------------------------------------------ |
| P    | 5min                                                         |
| D    | 5min                                                         |
| C    | 使用函数式编程思想                                           |
| A    | 理解到是将函数作为参数传递给指定的方法，如 `cartItems.forEach(cartItems => {...})` |

|      | 计算所有输入商品的总价 |
| ---- | ---------------------- |
| P    | 3min                   |
| D    | 3min                   |
| C    | none                   |
| A    | none                   |

|      | 格式化需要的数据               |
| ---- | ------------------------------ |
| P    | 10min                          |
| D    | 20min                          |
| C    | 格式的编写不符合测试用例的输出 |
| A    | 反复检查                       |

|      | 测试代码地正确性                               |
| ---- | ---------------------------------------------- |
| P    | 5min                                           |
| D    | 10min                                          |
| C    | 同一个变量命名不规范，找不到；对象的调用不规范 |
| A    | 按照错误提示的行号找到错误的地方进行更改       |

