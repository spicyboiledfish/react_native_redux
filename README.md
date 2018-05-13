# react_native_redux
##5.11 完成初步的加法运算

##5.13 对redux中的store、action、reducer有了更深的理解
    * 初始化界面展示，执行mapStateProps和mapDispatch，显示在展示组件 render
    * 点击按钮，将当前的state和action通过dispatch传递到reducer中
    * reducer方法中，会通过传递过来的actionType，返回新的state，再更新存储到store中
    * 新的state有变化，会再次执行mapStateProps方法，更新界面上的state，并再次渲染render
